import { motion } from "framer-motion";
import { Gem, Recycle, Leaf, Shield, Award, Heart } from "lucide-react";

const features = [
  { icon: Gem, label: "925 Sterling Silver" },
  { icon: Shield, label: "Skin-Safe Coating" },
  { icon: Recycle, label: "6 Months Warranty" },
  { icon: Award, label: "5-Day Easy Returns" },
  { icon: Leaf, label: "Ethical Sourcing" },
  { icon: Heart, label: "Free Gift Box" },
];

const features2 = [
  { icon: Recycle, label: "Pure & Skin\nSafe Materials" },
  { icon: Award, label: "Customisable\nDesigns" },
  { icon: Gem, label: "BIS Hallmark" },
];

const NotJustTrendSection = () => {
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
            Not Just A Trend. It's<br />
            <span className="text-elegant text-kilangi-green">The Future.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our lab-grown gold and silver jewellery is crafted with the same 
            brilliance and purity as mined metals without the environmental cost.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-kilangi-cream flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-6 w-6 text-kilangi-green group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="text-sm font-medium text-foreground">{feature.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Secondary Features */}
        <div className="bg-kilangi-cream rounded-sm p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            {features2.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background flex items-center justify-center">
                  <feature.icon className="h-7 w-7 text-kilangi-green" />
                </div>
                <span className="text-sm font-medium text-foreground whitespace-pre-line leading-relaxed">
                  {feature.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotJustTrendSection;
