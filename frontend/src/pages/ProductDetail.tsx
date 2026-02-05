import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Minus, Plus, Heart, Share2, Truck, Shield, RotateCcw, ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "Minimal Wave Tee", price: 45, category: "T-Shirts", description: "A sleek, minimalist design featuring a subtle wave pattern. Made from 100% organic cotton for ultimate comfort and sustainability.", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800", images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800", "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800", "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800"], sizes: ["XS", "S", "M", "L", "XL", "XXL"], colors: ["Black", "White", "Navy"] },
  { id: 2, name: "Abstract Hoodie", price: 89, category: "Hoodies", description: "Bold abstract print on a premium heavyweight hoodie. Features a relaxed fit, kangaroo pocket, and brushed fleece interior.", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800", images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800", "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=800"], sizes: ["S", "M", "L", "XL"], colors: ["Black", "Gray"] },
];

const relatedProducts = [
  { id: 5, name: "Retro Vibes Tee", price: 48, category: "T-Shirts", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600", hoverImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600" },
  { id: 6, name: "Urban Hoodie", price: 95, category: "Hoodies", image: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600" },
  { id: 11, name: "Quote Tee", price: 42, category: "T-Shirts", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600" },
  { id: 12, name: "Cozy Hoodie", price: 88, category: "Hoodies", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600" },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id)) || products[0];
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="container-wide py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/shop" className="hover:text-foreground">Shop</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-foreground">{product.category}</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>

        {/* Product Section */}
        <section className="container-wide py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Images */}
            <div className="space-y-4">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="aspect-[4/5] bg-muted rounded-2xl overflow-hidden"
              >
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Thumbnails */}
              <div className="flex gap-4">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === i ? "border-accent" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-8">
              <div>
                <p className="text-caption text-accent mb-2">{product.category}</p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-3xl font-bold">${product.price}</p>
              </div>

              <p className="text-muted-foreground leading-relaxed">{product.description}</p>

              {/* Color Selection */}
              <div>
                <h3 className="font-semibold mb-3">Color: {selectedColor}</h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-lg transition-colors ${
                        selectedColor === color
                          ? "border-accent bg-accent/10"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">Size</h3>
                  <button className="text-sm text-accent hover:underline">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <motion.button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-14 h-14 border rounded-lg font-medium transition-colors ${
                        selectedSize === size
                          ? "border-accent bg-accent text-accent-foreground"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-4 hover:bg-muted transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-4 hover:bg-muted transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <Button className="flex-1 btn-accent text-lg py-6">
                  Add to Cart — ${product.price * quantity}
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="h-14 w-14"
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart className={`h-5 w-5 ${isLiked ? "fill-accent text-accent" : ""}`} />
                </Button>

                <Button variant="outline" size="icon" className="h-14 w-14">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                {[
                  { icon: Truck, label: "Free Shipping", desc: "On orders over $75" },
                  { icon: Shield, label: "Quality Guarantee", desc: "Premium materials" },
                  { icon: RotateCcw, label: "Easy Returns", desc: "30-day policy" },
                ].map((feature) => (
                  <div key={feature.label} className="text-center">
                    <feature.icon className="h-6 w-6 mx-auto mb-2 text-accent" />
                    <p className="text-sm font-medium">{feature.label}</p>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>

              {/* Care Instructions */}
              <div className="p-6 bg-muted rounded-xl">
                <h3 className="font-semibold mb-3">Print Care Instructions</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Machine wash cold, inside out</li>
                  <li>• Do not bleach or iron directly on print</li>
                  <li>• Tumble dry low or hang dry</li>
                  <li>• Do not dry clean</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="section-padding bg-muted">
          <div className="container-wide">
            <h2 className="heading-section mb-12">You may also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}