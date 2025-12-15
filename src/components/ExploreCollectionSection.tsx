import { motion } from "framer-motion";

import categoryRings from "@/assets/category-rings.jpg";
import categoryEarrings from "@/assets/category-earrings.jpg";
import categoryPendants from "@/assets/category-pendants.jpg";
import categoryBracelets from "@/assets/product-bracelet-1.jpg";
import categoryNecklaces from "@/assets/category-necklaces.jpg";
import categoryBangles from "@/assets/category-bangles.jpg";
import categoryAccessories from "@/assets/category-accessories.jpg";

const categories = [
  { name: "Rings", image: categoryRings },
  { name: "Earrings", image: categoryEarrings },
  { name: "Pendants", image: categoryPendants },
  { name: "Bracelets", image: categoryBracelets },
  { name: "Necklaces", image: categoryNecklaces },
  { name: "Bangles", image: categoryBangles },
  { name: "Accessories", image: categoryAccessories },
];

const ExploreCollectionSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary" id="collections">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-foreground">
            Explore Our Collection
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <motion.a
              key={category.name}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group text-center"
            >
              <div className="relative aspect-square rounded-full overflow-hidden mb-3 mx-auto w-20 h-20 lg:w-24 lg:h-24 border-2 border-transparent group-hover:border-primary transition-colors image-zoom">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-medium text-foreground group-hover:text-kilangi-green transition-colors">
                {category.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCollectionSection;
