import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

import productRing1 from "@/assets/product-ring-1.jpg";
import productBracelet1 from "@/assets/product-bracelet-1.jpg";
import productEarrings1 from "@/assets/product-earrings-1.jpg";
import productPendant1 from "@/assets/product-pendant-1.jpg";

const recentProducts = [
  { id: 1, image: productRing1, name: "Twisted Petal Gold Bracelet", price: 1299 },
  { id: 2, image: productBracelet1, name: "Twisted Petal Gold Bracelet", price: 1799 },
  { id: 3, image: productEarrings1, name: "Swarovski Pearl Ring", price: 2199 },
  { id: 4, image: productPendant1, name: "Twisted Petal Gold Ring", price: 999 },
  { id: 5, image: productRing1, name: "Solitaire Diamond Ring", price: 2999 },
];

const RecentlyViewedSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 250;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-secondary">
      <div className="section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8"
        >
          <h2 className="heading-sm text-foreground">
            Recently Viewed
          </h2>
          <div className="hidden lg:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        {/* Products Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {recentProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-44 lg:w-52 group"
            >
              <div className="relative aspect-square bg-background rounded-sm overflow-hidden mb-3 image-zoom">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button 
                  className="absolute top-2 right-2 p-1.5 bg-background/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Add to wishlist"
                >
                  <Heart className="h-3.5 w-3.5 text-foreground" />
                </button>
              </div>
              <h3 className="text-sm font-medium text-foreground mb-1 line-clamp-1">
                {product.name}
              </h3>
              <p className="text-sm font-semibold text-foreground">
                ₹{product.price.toLocaleString()}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewedSection;
