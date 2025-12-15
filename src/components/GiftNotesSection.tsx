import { motion } from "framer-motion";
import { ArrowRight, Gift } from "lucide-react";
import giftImage from "@/assets/gift-section.jpg";

const priceRanges = [
  { label: "Shop Under ₹1000", href: "#" },
  { label: "Shop Under ₹2000", href: "#" },
  { label: "Shop Under ₹3000", href: "#" },
  { label: "E-Gift Cards", href: "#" },
];

const GiftNotesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="heading-lg text-foreground">
            Make It <span className="text-elegant text-kilangi-green">Extra Special</span> with Personalised<br className="hidden lg:block" /> Gift Notes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {priceRanges.map((range, index) => (
            <motion.a
              key={range.label}
              href={range.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-sm bg-secondary aspect-[4/3] flex items-end p-5"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent z-10" />
              <img
                src={giftImage}
                alt={range.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="relative z-20 flex items-center justify-between w-full">
                <span className="text-primary-foreground font-medium">{range.label}</span>
                <ArrowRight className="h-4 w-4 text-primary-foreground group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftNotesSection;
