import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  isNew?: boolean;
}

const ProductCard = ({ image, name, price, originalPrice, badge, isNew }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-secondary rounded-sm overflow-hidden mb-4 image-zoom">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        
        {/* Badges */}
        {badge && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-sm">
            {badge}
          </span>
        )}
        {isNew && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded-sm">
            New
          </span>
        )}

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          className="absolute bottom-3 left-3 right-3 flex gap-2"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-background/95 backdrop-blur-sm text-foreground py-2.5 text-sm font-medium rounded-sm flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </motion.button>
        </motion.div>

        {/* Wishlist Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 bg-background/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-background transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${
              isLiked ? "fill-destructive text-destructive" : "text-foreground"
            }`}
          />
        </motion.button>
      </div>

      {/* Content */}
      <div className="space-y-1.5">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">
          925 Sterling Silver
        </span>
        <h3 className="font-medium text-foreground leading-snug line-clamp-2 group-hover:text-kilangi-green transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground">₹{price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
