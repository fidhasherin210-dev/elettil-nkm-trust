import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Stethoscope, Award, Users ,Sparkles } from "lucide-react";

const impacts = [
  {
    icon: Stethoscope,
    title: "Medical Assistance",
    description:
      "Providing financial aid for surgeries, medications, and hospital care to those who cannot afford them.",
    color: "primary",
  },
  {
    icon: Award,
    title: "Legacy of Care",
    description:
      "Distributed lakhs of rupees in medical aid and social welfare initiatives across communities.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "Bridging the gap between advanced healthcare facilities and marginalized communities.",
    color: "primary",
  },
];

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="section-padding bg-card" ref={ref}>
      <div className="container-narrow mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-[#E84D3D] text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Our Impact
              <Sparkles className="w-4 h-4" />
            </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Making a <span className="text-primary">Difference</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every day, we work to transform lives through compassionate care and
            dedicated service to those in need.
          </p>
        </motion.div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative overflow-hidden"
            >
              <div className="h-full bg-muted rounded-2xl p-8 relative">
                {/* Decorative gradient */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 ${
                    impact.color === "primary"
                      ? "bg-primary"
                      : impact.color === "accent"
                      ? "bg-accent"
                      : "bg-teal"
                  }`}
                />
                
                <div className="relative">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      impact.color === "primary"
                        ? "bg-primary"
                        : impact.color === "accent"
                        ? "bg-accent"
                        : "bg-teal"
                    }`}
                  >
                    <impact.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    {impact.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Association Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary/5 via-accent/5 to-teal/5 rounded-2xl p-8 md:p-12">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Our Association
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              NKM Foundation operates as the philanthropic arm of{" "}
              <span className="font-semibold text-foreground">
                EH Mediversity LLP
              </span>
              , working alongside advanced medical institutions to deliver
              compassionate care to those who need it most.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
