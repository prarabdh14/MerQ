import { motion } from "framer-motion";
import { Target, Leaf, Heart, Zap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const timeline = [
  { year: "2020", title: "The Beginning", description: "Started in a small garage with a single screen printer and big dreams." },
  { year: "2021", title: "Going Digital", description: "Upgraded to DTG printing, enabling full-color, photographic prints." },
  { year: "2022", title: "Sustainability First", description: "Switched to 100% organic materials and eco-friendly packaging." },
  { year: "2023", title: "Community of 50K", description: "Reached 50,000 happy customers worldwide and expanded product range." },
  { year: "2024", title: "Custom Platform Launch", description: "Launched our custom print platform, empowering creators everywhere." },
];

const values = [
  { icon: Target, title: "Quality Obsessed", description: "Every print is inspected by hand. We don't cut corners because you deserve the best." },
  { icon: Leaf, title: "Planet Conscious", description: "Sustainable materials, water-based inks, and carbon-neutral shipping on every order." },
  { icon: Heart, title: "Community Driven", description: "Built by creators, for creators. We celebrate and amplify diverse voices." },
  { icon: Zap, title: "Always Innovating", description: "Constantly pushing the boundaries of what's possible in custom printing." },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="text-caption text-accent mb-4 block">Our Story</span>
              <h1 className="heading-display mb-6">
                We believe in the <span className="text-gradient">power of print</span>
              </h1>
              <p className="text-xl text-primary-foreground/70">
                What started as a passion project has grown into a movement. We're here to help you express yourself through premium, sustainable merchandise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Image Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1600"
            alt="MerQ Workshop"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Values */}
        <section className="section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-caption text-accent mb-4 block">What We Stand For</span>
              <h2 className="heading-section">Our Values</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-6">
                    <value.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-muted">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-caption text-accent mb-4 block">Our Journey</span>
              <h2 className="heading-section">How We Got Here</h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-8 mb-12 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold">
                      {item.year}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="flex-1 w-0.5 bg-border mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "50K+", label: "Happy Customers" },
                { value: "100K+", label: "Products Shipped" },
                { value: "15+", label: "Countries Served" },
                { value: "4.9", label: "Average Rating" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <p className="text-primary-foreground/70">{stat.label}</p>
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