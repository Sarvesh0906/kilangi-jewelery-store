import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, ShoppingBag, User, Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { name: "Jewellery", href: "#", hasDropdown: true },
  { name: "Gold", href: "#" },
  { name: "Gifts", href: "#" },
  { name: "Gifting", href: "#" },
  { name: "About Us", href: "#" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -ml-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Search - Desktop */}
          <div className="hidden lg:flex items-center gap-2 flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search Earrings..."
                className="pl-10 pr-4 py-2 bg-secondary rounded-sm text-sm w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-kilangi-green transition-colors link-underline flex items-center gap-1"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="h-3 w-3" />}
              </a>
            ))}
          </nav>

          {/* Logo */}
          <motion.a
            href="/"
            className="flex-shrink-0 mx-4 lg:mx-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img src={logo} alt="KILANGI" className="h-10 lg:h-14 w-auto object-contain" />
          </motion.a>

          {/* Desktop Navigation - Right */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.slice(2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-kilangi-green transition-colors link-underline"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-3 lg:gap-4 flex-1 justify-end">
            <button className="lg:hidden p-2 text-foreground" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button className="hidden lg:block p-2 text-foreground hover:text-kilangi-green transition-colors" aria-label="Account">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 text-foreground hover:text-kilangi-green transition-colors" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 text-foreground hover:text-kilangi-green transition-colors relative" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-medium">
                0
              </span>
            </button>
          </div>
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
