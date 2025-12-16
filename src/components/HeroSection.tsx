import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-model-new.jpg";

const usps = [
  { label: "Anti - Fade Polish" },
  { label: "Timeless Design" },
  { label: "Lightweight Comfort" },
  { label: "Modern Minimal" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Desktop: Two-column layout */}
      <div className="hidden lg:grid lg:grid-cols-2 min-h-[600px]">
        {/* Left Image with Text Overlay */}
        <div className="relative">
          <img
            src={heroImage}
            alt="Elegant gold necklace on green silk fabric"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-12 left-8 right-8 text-white"
          >
            <h1 className="text-4xl xl:text-5xl font-serif leading-tight mb-4">
              Because You Deserve to<br />Feel{" "}
              <span className="italic text-kilangi-gold">Timeless.</span>
            </h1>
            <p className="text-white/90 mb-6 max-w-md leading-relaxed text-sm">
              Each piece is thoughtfully designed to celebrate your individuality — 
              blending modern elegance with lasting craftsmanship.
            </p>
            <motion.a
              href="#collections"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-foreground rounded-sm text-sm font-medium group hover:bg-kilangi-cream transition-colors"
            >
              Explore the Elegance
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
            alt="Model wearing elegant gold bracelet"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Mobile: Single column with text overlay */}
      <div className="lg:hidden relative min-h-[500px]">
        <img
          src={heroImage}
          alt="Elegant gold necklace on green silk fabric"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute bottom-8 left-6 right-6 text-white"
        >
          <h1 className="text-3xl font-serif leading-tight mb-3">
            Because You Deserve to Feel{" "}
            <span className="italic text-kilangi-gold">Timeless.</span>
          </h1>
          <p className="text-white/90 mb-5 text-sm leading-relaxed">
            Each piece is thoughtfully designed to celebrate your individuality — 
            blending modern elegance with lasting craftsmanship.
          </p>
          <motion.a
            href="#collections"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-foreground rounded-sm text-sm font-medium group"
          >
            Explore the Elegance
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>

      {/* USP Bar - Desktop */}
      <div className="hidden lg:block bg-background border-y border-border">
        <div className="section-padding py-5">
          <div className="flex items-center justify-center gap-4">
            {usps.map((usp, index) => (
              <motion.div
                key={usp.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-4 text-foreground"
              >
                <span className="font-medium text-sm">{usp.label}</span>
                {index < usps.length - 1 && (
                  <Sparkles className="h-4 w-4 text-kilangi-green" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* USP Bar - Mobile: 2x2 Grid */}
      <div className="lg:hidden bg-background border-y border-border">
        <div className="section-padding py-5">
          <div className="grid grid-cols-2 gap-3">
            {usps.map((usp, index) => (
              <motion.div
                key={usp.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-center justify-center gap-2 text-foreground"
              >
                <span className="font-medium text-sm">{usp.label}</span>
                {index % 2 === 0 && <Sparkles className="h-3 w-3 text-kilangi-green" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
