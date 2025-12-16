import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  "OUR COLLECTION": ["Rings", "Necklaces", "Earrings", "Bracelets", "Bangles", "Pendants"],
  "QUICK LINKS": ["About Us", "Contact Us", "FAQs", "Shipping Info", "Size Guide", "Care Guide"],
  "POLICIES": ["Privacy Policy", "Return Policy", "Terms & Conditions", "Warranty Policy"],
};

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail("");
  };

  return (
    <footer className="bg-kilangi-charcoal text-primary-foreground">
      {/* Main Footer */}
      <div className="section-padding py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <img src={logo} alt="KILANGI" className="h-auto lg:w-48 w-28 mb-6 invert"  />
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 max-w-sm">
              KILANGI Jewellery is a premium brand specializing in exquisite silver 
              and lab-grown gold pieces that combine timeless elegance with 
              contemporary design, carefully crafted for those who appreciate both 
              beauty and sustainability.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-primary-foreground/70 text-sm mb-3">
                Subscribe for exclusive offers and updates
              </p>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-kilangi-gold transition-colors"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-4 py-2 bg-kilangi-gold text-kilangi-charcoal text-sm font-medium rounded-sm hover:bg-kilangi-gold-light transition-colors"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>

            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-kilangi-gold hover:text-kilangi-charcoal transition-colors"
                  aria-label={`Follow us on ${Icon.name}`}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-2">
              <h4 className="font-medium text-primary-foreground lg:mb-4 mb-2 text-sm tracking-wide">{title}</h4>
              <ul className="lg:space-y-2.5 space-y-1">
                  {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/70 hover:text-kilangi-gold transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-padding py-6">
            <p className="text-sm text-center text-primary-foreground/60">
              &copy; {new Date().getFullYear()} KILANGI Jewellery | All rights reserved
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
