import { motion } from "framer-motion";

const phrases = [
  "PREMIUM PRINTS",
  "CUSTOM DESIGNS",
  "FAST SHIPPING",
  "ECO-FRIENDLY",
  "100% ORGANIC",
  "STREETWEAR",
];

export default function Marquee() {
  return (
    <section className="py-6 bg-accent overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {[...phrases, ...phrases].map((phrase, i) => (
          <span
            key={i}
            className="text-accent-foreground text-sm md:text-base font-bold uppercase tracking-widest mx-8"
          >
            {phrase} <span className="mx-4">★</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}