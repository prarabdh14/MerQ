import { motion } from "framer-motion";
import { Truck, Shield, Palette, Recycle } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Premium Prints",
    description: "Vibrant, fade-resistant prints that last through countless washes using advanced DTG technology.",
  },
  {
    icon: Shield,
    title: "Quality Materials",
    description: "We use only 100% organic cotton and sustainable fabrics for maximum comfort and durability.",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Free worldwide shipping on orders over $75. Most orders ship within 2-3 business days.",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly",
    description: "Sustainable packaging and water-based inks. We're committed to reducing our environmental footprint.",
  },
];

export default function WhyUs() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-caption text-accent mb-4 block">Why PRNTD</span>
          <h2 className="heading-section max-w-2xl mx-auto">
            Crafted with care, worn with pride
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 mb-6 group-hover:bg-accent/20 transition-colors"
              >
                <feature.icon className="h-7 w-7 text-accent" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-primary-foreground/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}