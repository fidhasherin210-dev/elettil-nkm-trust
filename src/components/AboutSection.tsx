import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, HandHeart ,Sparkles} from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card" ref={ref}>
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-[#E84D3D] text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              About Us
              <Sparkles className="w-4 h-4" />
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              A Legacy of <span className="text-primary">Compassion</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              NKM Foundation is the philanthropic arm of EH Mediversity LLP,
              founded by Mr. N.K. Saleem in loving memory of his father, Late
              Noohikunnummal Moideen.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The foundation stands as a commitment to compassion, dignity, and
              service to humanity. We believe that healthcare is a fundamental
              right, not a privilege, and work tirelessly to make this vision a
              reality.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium text-foreground">Compassion First</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <span className="font-medium text-foreground">Community Focused</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              
              <div className="relative space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <HandHeart className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      In Loving Memory
                    </h3>
                    <p className="text-muted-foreground">
                      Established in memory of Late Noohikunnummal Moideen, whose
                      values of kindness and service continue to inspire our work.
                    </p>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <blockquote className="text-lg italic text-foreground/80">
                    "The best way to find yourself is to lose yourself in the
                    service of others."
                  </blockquote>
                  <p className="mt-3 text-sm text-muted-foreground">
                    — Mahatma Gandhi
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
