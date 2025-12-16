import { motion } from "framer-motion";
import { Instagram, ArrowRight } from "lucide-react";
import instagram1 from "@/assets/instagram-1.jpg";
import craftsmanship from "@/assets/craftsmanship-new.jpg";
import winterLove from "@/assets/winter-love-new.jpg";
import labGrown from "@/assets/lab-grown-new.jpg";

const instagramPosts = [
  { id: 1, image: instagram1 },
  { id: 2, image: craftsmanship },
  { id: 3, image: winterLove },
  { id: 4, image: labGrown },
];

const InstagramSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Instagram className="h-5 w-5 text-kilangi-green" />
            <span className="text-sm font-medium text-muted-foreground">@KILANGI</span>
          </div>
          <h2 className="heading-lg text-foreground mb-3">
            Share Your <span className="text-elegant text-kilangi-green">Shine</span> in Our Jewels?
          </h2>
          <p className="text-muted-foreground">
            Tag <span className="font-medium text-foreground">#KilangiJewels</span> and you could be featured!
          </p>
        </motion.div>
      </div>

      {/* Full width images */}
      <div className="flex gap-4 lg:gap-6 overflow-hidden">
        {[...instagramPosts, ...instagramPosts].map((post, index) => (
          <motion.a
            key={`${post.id}-${index}`}
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex-shrink-0 w-48 lg:w-64 aspect-square group relative overflow-hidden rounded-sm image-zoom"
          >
            <img
              src={post.image}
              alt="KILANGI on Instagram"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
              <Instagram className="h-8 w-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.a>
        ))}
      </div>

      <div className="section-padding mt-8 text-center">
        <motion.a
          href="#"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 btn-outline group"
        >
          Share Your Sparkle
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
};

export default InstagramSection;
