import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/products/ProductCard";

const featuredProducts = [
  {
    id: 1,
    name: "Minimal Wave Tee",
    price: 45,
    category: "T-Shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    hoverImage: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600",
  },
  {
    id: 2,
    name: "Abstract Hoodie",
    price: 89,
    category: "Hoodies",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
    hoverImage: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600",
  },
  {
    id: 3,
    name: "Geometric Mug",
    price: 24,
    category: "Mugs",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600",
    hoverImage: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=600",
  },
  {
    id: 4,
    name: "Typography Poster",
    price: 35,
    category: "Posters",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    hoverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-caption text-accent mb-4 block"
            >
              Featured
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-section"
            >
              Trending Now
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/shop"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:text-accent transition-colors"
            >
              View All Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
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
  );
}