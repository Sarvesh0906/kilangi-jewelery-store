import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import giftBirthday from "@/assets/gift-birthday.jpg";
import giftAnniversary from "@/assets/gift-anniversary.jpg";
import giftEngagement from "@/assets/gift-engagement.jpg";

const giftCategories = [
  {
    title: "Birthday",
    description: "Celebrate every year with a timeless piece that speaks to your loved one.",
    image: giftBirthday,
    cta: "Shop Birthday Gifts",
  },
  {
    title: "Anniversary",
    description: "Make your love story with jewellery that perfectly matches the moment of your relationship.",
    image: giftAnniversary,
    cta: "Shop Anniversary Gifts",
  },
  {
    title: "Engagement",
    description: "Find a timeless piece with pure that captures the emotions of your special moments.",
    image: giftEngagement,
    cta: "Shop Engagement Gifts",
  },
];

const GiftsCelebrateSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-foreground mb-3">
            Gifts That <span className="text-elegant text-kilangi-green">Celebrate</span> Every Moment
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Discover our perfect handcrafted and meaningful gifts to make all your special celebrations extraordinary.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {giftCategories.map((gift, index) => (
            <motion.article
              key={gift.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden mb-5 image-zoom">
                <img
                  src={gift.image}
                  alt={gift.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="heading-sm text-foreground mb-2">{gift.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {gift.description}
              </p>
              <motion.a
                href="#"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-sm font-medium text-kilangi-green group/link"
              >
                {gift.cta}
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </motion.a>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 btn-outline"
          >
            Explore More Collection
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default GiftsCelebrateSection;
