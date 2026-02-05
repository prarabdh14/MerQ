import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    name: "T-Shirts",
    count: 42,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600",
    href: "/shop?category=tshirts",
  },
  {
    name: "Hoodies",
    count: 28,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600",
    href: "/shop?category=hoodies",
  },
  {
    name: "Mugs",
    count: 35,
    image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=600",
    href: "/shop?category=mugs",
  },
  {
    name: "Posters",
    count: 56,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    href: "/shop?category=posters",
  },
];

export default function Categories() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-caption text-accent mb-4 block">Collections</span>
          <h2 className="heading-section">Shop by Category</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={category.href}
                className="group block relative aspect-[4/5] overflow-hidden rounded-2xl"
              >
                {/* Background Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-foreground mb-1">
                        {category.name}
                      </h3>
                      <p className="text-primary-foreground/70 text-sm">
                        {category.count} Products
                      </p>
                    </div>
                    <motion.div
                      className="p-3 rounded-full bg-accent text-accent-foreground"
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}