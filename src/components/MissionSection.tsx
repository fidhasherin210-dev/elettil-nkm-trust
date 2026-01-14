import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Shield, Accessibility ,Sparkles} from "lucide-react";

const missions = [
  {
    icon: Accessibility,
    title: "Accessible Healthcare",
    description:
      "Ensure quality healthcare is accessible to everyone, regardless of their financial situation or social status.",
  },
  {
    icon: Shield,
    title: "Support the Underprivileged",
    description:
      "Support underprivileged patients who cannot afford life-saving treatments and provide them with essential medical care.",
  },
  {
    icon: Target,
    title: "Remove Barriers",
    description:
      "Remove financial barriers to medical care and create pathways for those in need to access proper treatment.",
  },
];

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" className="section-padding bg-muted" ref={ref}>
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
              Our Mission
              <Sparkles className="w-4 h-4" />
            </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            What Drives Us <span className="text-primary">Forward</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We are committed to creating a world where no one is denied healthcare
            due to financial constraints. Our mission is built on three core
            pillars.
          </p>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <mission.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {mission.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {mission.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
