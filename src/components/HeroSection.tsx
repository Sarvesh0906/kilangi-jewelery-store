import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Feather, Clock, Gem } from "lucide-react";
import heroImage from "@/assets/hero-model.jpg";

const usps = [
  { icon: Sparkles, label: "Anti-Fade Polish" },
  { icon: Clock, label: "Timeless Design" },
  { icon: Feather, label: "Lightweight Comfort" },
  { icon: Gem, label: "Modern Minimal" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[500px] lg:min-h-[600px]">
        {/* Content */}
        <div className="order-2 lg:order-1 flex flex-col justify-center section-padding py-12 lg:py-20 bg-kilangi-cream">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-lg"
          >
            <h1 className="heading-xl text-foreground mb-4">
              Because You Deserve to{" "}
              <span className="text-elegant text-kilangi-green">Feel Timeless.</span>
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Discover the perfect gift for your loved ones and elevate your everyday style 
              with 925 Sterling Silver Jewellery handcrafted for you.
            </p>
            <motion.a
              href="#collections"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 btn-primary group"
            >
              Explore Our Elegance
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 relative h-64 lg:h-auto"
        >
          <img
            src={heroImage}
            alt="Elegant woman wearing KILANGI gold necklace"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent lg:hidden" />
        </motion.div>
      </div>

      {/* USP Bar */}
      <div className="bg-background border-y border-border">
        <div className="section-padding py-4 lg:py-5">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-4 lg:gap-8">
            {usps.map((usp, index) => (
              <motion.div
                key={usp.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <usp.icon className="h-4 w-4 text-kilangi-green" />
                <span className="font-medium">{usp.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
