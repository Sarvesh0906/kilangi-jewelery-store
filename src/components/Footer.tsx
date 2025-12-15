import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.jpg";

const footerLinks = {
  "Our Collection": ["Rings", "Necklaces", "Earrings", "Bracelets", "Bangles", "Pendants"],
  "Quick Links": ["About Us", "Contact Us", "FAQs", "Shipping Info", "Size Guide", "Care Guide"],
  "Policies": ["Privacy Policy", "Return Policy", "Terms & Conditions", "Warranty Policy"],
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
      {/* Newsletter */}
      <div className="border-b border-primary-foreground/10">
        <div className="section-padding py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="heading-md text-primary-foreground mb-2">
                Stay In Touch With <span className="text-elegant text-kilangi-gold">KILANGI</span>
              </h3>
              <p className="text-primary-foreground/70">
                Subscribe to receive updates, access to exclusive deals, and more.
              </p>
            </motion.div>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="flex gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-kilangi-gold transition-colors"
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-6 py-3 bg-kilangi-gold text-kilangi-charcoal font-medium rounded-sm hover:bg-kilangi-gold-light transition-colors flex items-center gap-2"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-padding py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <img src={logo} alt="KILANGI" className="h-12 mb-6 brightness-0 invert" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 max-w-sm">
              KILANGI Jewellery is a premium brand specializing in exquisite silver 
              and lab-grown gold pieces that combine timeless elegance with 
              contemporary design, carefully crafted for those who appreciate both 
              beauty and sustainability.
            </p>
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
            <div key={title}>
              <h4 className="font-medium text-primary-foreground mb-4">{title}</h4>
              <ul className="space-y-2.5">
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2024 KILANGI Jewellery. All rights reserved.
            </p>
            <div className="flex gap-6">
              <span className="text-sm text-primary-foreground/60">🇮🇳 INR ₹</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
