import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "All Jewellery", href: "#" },
  { name: "Gold", href: "#" },
  { name: "Silver", href: "#" },
  { name: "Gifting", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Contact", href: "#" },
];

const categoryPills = [
  { name: "Bestsellers", image: "/placeholder.svg" },
  { name: "Earrings", image: "/placeholder.svg" },
  { name: "Rings", image: "/placeholder.svg" },
  { name: "Earrings", image: "/placeholder.svg" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-kilangi-cream">
      {/* Main Header Row */}
      <div className="section-padding border-b border-border/50">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -ml-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Search - Desktop */}
          <div className="hidden lg:flex items-center flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for Earrings.."
                className="pl-4 pr-12 py-2.5 bg-background border border-border rounded-full text-sm w-64 focus:outline-none focus:ring-1 focus:ring-kilangi-green/30"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground" />
            </div>
          </div>

          {/* Logo - Centered */}
          <motion.a
            href="/"
            className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img src={logo} alt="KILANGI" className="h-10 lg:h-16 w-auto object-contain" />
          </motion.a>

          {/* Right Icons */}
          <div className="flex items-center gap-2 lg:gap-3 flex-1 justify-end">
            <button className="p-2 text-foreground hover:text-kilangi-green transition-colors" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
            </button>
            <button className="hidden lg:block p-2 text-foreground hover:text-kilangi-green transition-colors" aria-label="Account">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 text-foreground hover:text-kilangi-green transition-colors" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Row */}
      <nav className="hidden lg:block bg-kilangi-cream border-b border-border/50">
        <div className="section-padding">
          <div className="flex items-center justify-center gap-10 py-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-kilangi-green transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Search Row */}
      <div className="lg:hidden bg-kilangi-cream border-b border-border/50 px-4 py-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for Earrings.."
            className="w-full pl-4 pr-12 py-2.5 bg-background border border-border rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-kilangi-green/30"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground" />
        </div>
      </div>

      {/* Mobile Category Pills */}
      <div className="lg:hidden bg-kilangi-cream border-b border-border/50 px-4 py-3 overflow-x-auto">
        <div className="flex items-center gap-3">
          {categoryPills.map((pill, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full text-sm font-medium whitespace-nowrap hover:border-kilangi-green transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-kilangi-green/20 overflow-hidden">
                <img src={pill.image} alt="" className="w-full h-full object-cover" />
              </div>
              {pill.name}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-background z-50 lg:hidden shadow-elevated"
            >
              <div className="p-4 border-b border-border flex items-center justify-between">
                <img src={logo} alt="KILANGI" className="h-10" />
                <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="p-4 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block py-2 text-lg font-medium text-foreground hover:text-kilangi-green transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
