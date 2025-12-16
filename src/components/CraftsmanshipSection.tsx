import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import craftsmanshipImage from "@/assets/craftsmanship-new.jpg";

const CraftsmanshipSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-kilangi-cream">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-sm overflow-hidden image-zoom">
              <img
                src={craftsmanshipImage}
                alt="KILANGI Craftsmanship - elegant gold jewelry"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
              OUR ETHOS
            </span>
            <h2 className="heading-lg text-foreground mb-6">
              Every <span className="text-elegant text-kilangi-green">Shape.</span><br />
              Every <span className="text-elegant text-kilangi-green">Sparkle.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every piece we create is a tribute of artistry and memories, 
              beautifully handcrafted with precision, guided by passion.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From ethically sourced materials to sustainable processes, 
              we believe that beauty shines brightest when it's made responsibly.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 btn-outline group"
            >
              Know More
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
