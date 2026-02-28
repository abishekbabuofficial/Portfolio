import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-4 glass shadow-xl shadow-black/20" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a 
            href="#top" 
            onClick={(e) => { e.preventDefault(); scrollTo("#top"); }}
            className="text-2xl font-display font-bold tracking-tighter text-foreground relative group"
          >
            AB<span className="text-primary">.</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="px-5 py-2.5 rounded-full font-semibold text-sm bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Contact Me
            </button>
          </nav>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-2xl font-display font-semibold text-foreground"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contact")}
                className="mt-4 px-8 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
