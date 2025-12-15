import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="relative bg-primary py-2.5 px-4 text-center"
    >
      <p className="font-body text-sm text-primary-foreground">
        Free Shipping on Orders Over ₹999 • Shop Now & Save!
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
        aria-label="Close announcement"
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  );
};

export default AnnouncementBar;
