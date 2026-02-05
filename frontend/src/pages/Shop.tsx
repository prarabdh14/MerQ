import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const allProducts = [
  { id: 1, name: "Minimal Wave Tee", price: 45, category: "T-Shirts", style: "Minimal", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600", hoverImage: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600" },
  { id: 2, name: "Abstract Hoodie", price: 89, category: "Hoodies", style: "Art", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600", hoverImage: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600" },
  { id: 3, name: "Geometric Mug", price: 24, category: "Mugs", style: "Minimal", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600", hoverImage: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=600" },
  { id: 4, name: "Typography Poster", price: 35, category: "Posters", style: "Typography", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600", hoverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600" },
  { id: 5, name: "Retro Vibes Tee", price: 48, category: "T-Shirts", style: "Aesthetic", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600", hoverImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600" },
  { id: 6, name: "Urban Hoodie", price: 95, category: "Hoodies", style: "Minimal", image: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600", hoverImage: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600" },
  { id: 7, name: "Coffee Lover Mug", price: 22, category: "Mugs", style: "Funny", image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=600", hoverImage: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600" },
  { id: 8, name: "Modern Art Poster", price: 40, category: "Posters", style: "Art", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600", hoverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600" },
  { id: 9, name: "Zen Cushion", price: 55, category: "Cushions", style: "Minimal", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600" },
  { id: 10, name: "Pattern Phone Case", price: 28, category: "Phone Cases", style: "Aesthetic", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600" },
  { id: 11, name: "Quote Tee", price: 42, category: "T-Shirts", style: "Typography", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600" },
  { id: 12, name: "Cozy Hoodie", price: 88, category: "Hoodies", style: "Aesthetic", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600" },
];

const categories = ["All", "T-Shirts", "Hoodies", "Mugs", "Cushions", "Posters", "Phone Cases"];
const styles = ["Minimal", "Typography", "Art", "Funny", "Aesthetic"];
const priceRanges = ["Under $30", "$30 - $50", "$50 - $100", "Over $100"];

export default function Shop() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = allProducts.filter((product) => {
    if (selectedCategory !== "All" && product.category !== selectedCategory) return false;
    if (selectedStyles.length > 0 && !selectedStyles.includes(product.style)) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Header */}
        <section className="bg-primary text-primary-foreground section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="heading-display mb-4">Shop</h1>
              <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
                Discover our curated collection of premium prints and custom merchandise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters Bar */}
        <section className="sticky top-20 z-30 bg-background border-b border-border py-4">
          <div className="container-wide flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
                {(selectedStyles.length > 0 || selectedCategory !== "All") && (
                  <span className="ml-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                    {selectedStyles.length + (selectedCategory !== "All" ? 1 : 0)}
                  </span>
                )}
              </Button>
              
              {/* Category Pills */}
              <div className="hidden md:flex gap-2">
                {categories.slice(0, 5).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">{sortedProducts.length} products</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </section>

        {/* Filter Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.section
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-muted border-b border-border overflow-hidden"
            >
              <div className="container-wide py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Categories */}
                  <div>
                    <h3 className="font-semibold mb-4">Category</h3>
                    <div className="space-y-3">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`block text-sm transition-colors ${
                            selectedCategory === cat ? "text-accent font-medium" : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Styles */}
                  <div>
                    <h3 className="font-semibold mb-4">Print Style</h3>
                    <div className="space-y-3">
                      {styles.map((style) => (
                        <label key={style} className="flex items-center gap-3 cursor-pointer">
                          <Checkbox
                            checked={selectedStyles.includes(style)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedStyles([...selectedStyles, style]);
                              } else {
                                setSelectedStyles(selectedStyles.filter((s) => s !== style));
                              }
                            }}
                          />
                          <span className="text-sm">{style}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="font-semibold mb-4">Price Range</h3>
                    <div className="space-y-3">
                      {priceRanges.map((range) => (
                        <label key={range} className="flex items-center gap-3 cursor-pointer">
                          <Checkbox />
                          <span className="text-sm">{range}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Active Filters */}
                {(selectedStyles.length > 0 || selectedCategory !== "All") && (
                  <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-2">
                    {selectedCategory !== "All" && (
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-primary-foreground text-sm rounded-full">
                        {selectedCategory}
                        <button onClick={() => setSelectedCategory("All")}>
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    )}
                    {selectedStyles.map((style) => (
                      <span key={style} className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-primary-foreground text-sm rounded-full">
                        {style}
                        <button onClick={() => setSelectedStyles(selectedStyles.filter((s) => s !== style))}>
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                    <button
                      onClick={() => {
                        setSelectedCategory("All");
                        setSelectedStyles([]);
                      }}
                      className="text-sm text-muted-foreground hover:text-foreground underline"
                    >
                      Clear all
                    </button>
                  </div>
                )}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Products Grid */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {sortedProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">No products found matching your filters.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedStyles([]);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}