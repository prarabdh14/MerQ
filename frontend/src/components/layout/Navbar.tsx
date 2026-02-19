import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, Search, User, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import CartDrawer from "@/components/cart/CartDrawer";

const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "Custom Prints", href: "/custom" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const shopCategories = [
  { name: "T-Shirts", href: "/shop?category=tshirts" },
  { name: "Hoodies", href: "/shop?category=hoodies" },
  { name: "Mugs", href: "/shop?category=mugs" },
  { name: "Cushions", href: "/shop?category=cushions" },
  { name: "Posters", href: "/shop?category=posters" },
  { name: "Phone Cases", href: "/shop?category=phonecases" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowMegaMenu(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="relative z-10">
              <motion.span
                className="text-2xl md:text-3xl font-bold tracking-tighter"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                MerQ<span className="text-accent">.</span>
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.name === "Shop" && setShowMegaMenu(true)}
                  onMouseLeave={() => link.name === "Shop" && setShowMegaMenu(false)}
                >
                  <Link
                    to={link.href}
                    className="link-underline text-sm font-medium uppercase tracking-wider py-2"
                  >
                    {link.name}
                  </Link>
                  
                  {/* Mega Menu for Shop */}
                  <AnimatePresence>
                    {link.name === "Shop" && showMegaMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-4"
                      >
                        <div className="bg-card border border-border rounded-lg p-6 min-w-[200px] shadow-xl">
                          <div className="space-y-3">
                            {shopCategories.map((cat) => (
                              <Link
                                key={cat.name}
                                to={cat.href}
                                className="block text-sm hover:text-accent transition-colors"
                              >
                                {cat.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-2 md:gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-accent/10"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: theme === "dark" ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </motion.div>
              </Button>

              <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-accent/10">
                <Search className="h-5 w-5" />
              </Button>

              <Link to="/account">
                <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-accent/10">
                  <User className="h-5 w-5" />
                </Button>
              </Link>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCartOpen(true)}
                className="relative hover:bg-accent/10"
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-bold">
                  0
                </span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden hover:bg-accent/10"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-background border-t border-border overflow-hidden"
            >
              <div className="container-wide py-8 space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className="block text-2xl font-bold hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-6 border-t border-border">
                  <Link to="/account" className="flex items-center gap-3 text-lg">
                    <User className="h-5 w-5" />
                    Account
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}