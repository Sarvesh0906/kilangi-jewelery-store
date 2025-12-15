import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";

import productRing1 from "@/assets/product-ring-1.jpg";
import productBracelet1 from "@/assets/product-bracelet-1.jpg";
import productEarrings1 from "@/assets/product-earrings-1.jpg";
import productPendant1 from "@/assets/product-pendant-1.jpg";
import productRing2 from "@/assets/product-ring-2.jpg";
import productBracelet2 from "@/assets/product-bracelet-2.jpg";

const categories = ["Rings", "Earrings", "Pendants", "Bracelets", "Bangles"];

const products = [
  {
    id: 1,
    image: productBracelet2,
    name: "Twisted Petal Gold Bracelet",
    price: 1299,
    originalPrice: 1599,
    badge: "Bestseller",
  },
  {
    id: 2,
    image: productRing1,
    name: "Twisted Petal Gold Bracelet",
    price: 1799,
    originalPrice: 2199,
  },
  {
    id: 3,
    image: productEarrings1,
    name: "Pearl Drop Elegance Earrings",
    price: 999,
    originalPrice: 1299,
  },
  {
    id: 4,
    image: productPendant1,
    name: "Minimalist Diamond Pendant",
    price: 2499,
    isNew: true,
  },
  {
    id: 5,
    image: productRing2,
    name: "Stacked Diamond Ring Set",
    price: 1899,
  },
  {
    id: 6,
    image: productBracelet1,
    name: "Crystal Tennis Bracelet",
    price: 1599,
    originalPrice: 1999,
  },
];

const BestsellersSection = () => {
  const [activeCategory, setActiveCategory] = useState("Rings");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background" id="bestsellers">
      <div className="section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="heading-lg text-foreground mb-3">
            Explore Our <span className="text-elegant text-kilangi-green">Timeless</span> Bestseller
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 lg:gap-3 mb-10">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 lg:px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-muted"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Products Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background border border-border rounded-full items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors shadow-soft"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background border border-border rounded-full items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors shadow-soft"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Products Grid */}
          <div
            ref={scrollRef}
            className="flex gap-4 lg:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-64 lg:w-72 snap-start">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 btn-primary group"
          >
            Shop Bestsellers
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
