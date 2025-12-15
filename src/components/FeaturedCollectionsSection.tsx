import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import winterImage from "@/assets/winter-love.jpg";
import labGrownImage from "@/assets/lab-grown.jpg";

const FeaturedCollectionsSection = () => {
  return (
    <section className="py-0">
      <div className="grid lg:grid-cols-2">
        {/* Winter Love Collection */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative min-h-[400px] lg:min-h-[500px] group overflow-hidden"
        >
          <img
            src={winterImage}
            alt="Winter Love Has Arrived Collection"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 lg:p-12">
            <h3 className="heading-md text-primary-foreground mb-2">
              Winter <span className="text-elegant">Love</span> Has<br /> Arrived..
            </h3>
            <motion.a
              href="#"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-primary-foreground font-medium mt-4 group/link"
            >
              Explore New Arrivals
              <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

        {/* Lab Grown Collection */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative min-h-[400px] lg:min-h-[500px] group overflow-hidden bg-kilangi-cream"
        >
          <img
            src={labGrownImage}
            alt="Lab Grown Silver and Gold Collection"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 p-8 lg:p-12 text-right">
            <h3 className="heading-md text-foreground mb-2">
              Introducing <span className="text-elegant text-kilangi-green">Lab Grown</span><br /> Silver and Gold
            </h3>
            <motion.a
              href="#"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-foreground font-medium mt-4 group/link"
            >
              Shop Gold and Silver
              <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCollectionsSection;
