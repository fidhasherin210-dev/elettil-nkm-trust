import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/nkm-logo.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isInHero, setIsInHero] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("hero");

    const handleScroll = () => {
      if (!heroSection) return;

      const rect = heroSection.getBoundingClientRect();
      setIsInHero(rect.bottom > 80);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkColor = isInHero
    ? "text-white hover:text-white/80"
    : "text-foreground hover:text-primary";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isInHero ? "bg-transparent py-6" : "bg-white shadow-soft py-3"}
      `}
    >
      <div className="container-narrow mx-auto px-5 md:px-8">
        <nav className="relative flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 z-10">
            <img
              src={logo}
              alt="NKM Foundation"
              className="h-11 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Center Menu */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`${linkColor} font-medium transition-colors relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Call Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:9446191909"
              className={`flex items-center gap-2 font-semibold transition-transform hover:scale-105
                ${isInHero ? "text-[#E84D3D]" : "text-[#E84D3D] "}
              `}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center
                  ${isInHero ? "bg-white/20" : "bg-black/10"}
                `}
              >
                <Phone className="w-5 h-5" />
              </div>
              <span> +91 9446191909</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-3 z-10 ${
              isInHero ? "text-white" : "text-foreground"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-5 pb-5 border-t border-border pt-5 bg-white text-center"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground hover:text-primary font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
