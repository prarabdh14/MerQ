import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, ChevronDown, Send } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { question: "How long does shipping take?", answer: "Standard shipping takes 5-7 business days within the US, and 10-14 business days for international orders. Express shipping options are available at checkout." },
  { question: "What is your return policy?", answer: "We offer a 30-day return policy for all unworn items in original condition. Custom printed items can be returned if there are quality issues with the print." },
  { question: "How do I track my order?", answer: "Once your order ships, you'll receive an email with tracking information. You can also track your order in your account dashboard." },
  { question: "What print method do you use?", answer: "We use Direct-to-Garment (DTG) printing for most products, which ensures vibrant, long-lasting prints that won't crack or peel." },
  { question: "Can I cancel or modify my order?", answer: "You can cancel or modify your order within 2 hours of placing it. After that, the order enters production and cannot be changed." },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

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
              <span className="text-caption text-accent mb-4 block">Get in Touch</span>
              <h1 className="heading-display mb-6">We're Here to Help</h1>
              <p className="text-xl text-primary-foreground/70">
                Have a question or need assistance? We'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="heading-section mb-8">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us more..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button type="submit" className="btn-accent group">
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="heading-section mb-8">Contact Info</h2>
                  <div className="space-y-6">
                    {[
                      { icon: Mail, label: "Email", value: "hello@prntd.com" },
                      { icon: MapPin, label: "Location", value: "Los Angeles, California" },
                      { icon: Clock, label: "Hours", value: "Mon-Fri 9AM - 6PM PST" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-accent/10">
                          <item.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="font-medium">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="p-6 bg-muted rounded-2xl">
                  <h3 className="font-semibold mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    {["Order Tracking", "Shipping Info", "Returns & Exchanges", "Size Guide"].map((link) => (
                      <a
                        key={link}
                        href="#"
                        className="block text-muted-foreground hover:text-accent transition-colors"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section-padding bg-muted">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-caption text-accent mb-4 block">FAQ</span>
              <h2 className="heading-section">Frequently Asked Questions</h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <AccordionItem value={`item-${i}`} className="bg-background rounded-xl px-6 border-0">
                      <AccordionTrigger className="text-left font-semibold hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}