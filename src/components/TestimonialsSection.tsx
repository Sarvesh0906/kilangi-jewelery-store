import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    text: "I purchased the Golden Radiance Necklace for my sister's birthday and she absolutely loved it! The craftsmanship is stunning, and it arrived in beautiful packaging.",
    product: "Golden Radiance Necklace",
  },
  {
    id: 2,
    name: "Ananya Patel",
    rating: 5,
    text: "So pretty! The Golden Radiance Necklace for my sister's birthday and she loved it! The craftsmanship is stunning and beautiful packaging.",
    product: "Pearl Elegance Earrings",
  },
  {
    id: 3,
    name: "Meera Krishnan",
    rating: 5,
    text: "Excellent quality jewellery! I've been wearing my bracelet daily for months and it still looks brand new. The anti-fade polish really works!",
    product: "Twisted Petal Bracelet",
  },
  {
    id: 4,
    name: "Riya Gupta",
    rating: 5,
    text: "So pretty! The design is modern yet timeless. I receive compliments every time I wear it. Will definitely be ordering more pieces!",
    product: "Solitaire Ring",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-kilangi-cream">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-foreground mb-3">
            Voices of Our <span className="text-elegant text-kilangi-green">Happy</span> Customer
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Each piece we create tells a story and nothing delights more than the words of those who wear them.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background p-6 rounded-sm shadow-soft"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <Quote className="h-5 w-5 text-muted-foreground/30 mb-3" />
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">Verified Purchase</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.article
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-background p-6 rounded-sm shadow-soft"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="h-5 w-5 text-muted-foreground/30 mb-3" />
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-medium text-foreground text-sm">{testimonials[currentIndex].name}</p>
                  <p className="text-xs text-muted-foreground">Verified Purchase</p>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
