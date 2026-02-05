import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  hoverImage?: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-muted rounded-lg">
          {/* Main Image */}
          <motion.img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
            animate={{ opacity: isHovered && product.hoverImage ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Hover Image */}
          {product.hoverImage && (
            <motion.img
              src={product.hoverImage}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 1.1 
              }}
              transition={{ duration: 0.3 }}
            />
          )}

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="text-xs font-medium uppercase tracking-wider px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full">
              {product.category}
            </span>
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-4 left-4 right-4 flex gap-2"
          >
            <Button
              className="flex-1 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              onClick={(e) => {
                e.preventDefault();
                // Add to cart logic
              }}
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-background/90 backdrop-blur-sm border-0 hover:bg-accent hover:text-accent-foreground"
              onClick={(e) => {
                e.preventDefault();
                // Quick view logic
              }}
            >
              <Eye className="h-4 w-4" />
            </Button>
          </motion.div>

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/90 backdrop-blur-sm hover:bg-accent group/heart transition-colors"
          >
            <Heart
              className={`h-4 w-4 transition-colors ${
                isLiked ? "fill-accent text-accent" : "group-hover/heart:text-accent-foreground"
              }`}
            />
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="mt-4 space-y-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-lg font-bold">${product.price}</p>
      </div>
    </motion.div>
  );
}