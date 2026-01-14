import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/nkm-01.jpg";
import hero2 from "@/assets/nkm-02.jpg";
import hero3 from "@/assets/nkm-03.jpg";

const slides = [
  {
    image: hero1,
    title: "NKM Foundation",
    subtitle: "Serving Humanity. Spreading Hope.",
    description:
      "A philanthropic initiative of EH Mediversity LLP dedicated to supporting underprivileged patients and communities.",
  },
  {
    image: hero2,
    title: "Compassionate Care",
    subtitle: "Every Life Matters",
    description:
      "We believe in the dignity of every individual and strive to provide quality healthcare to those who need it most.",
  },
  {
    image: hero3,
    title: "Building Hope",
    subtitle: "Together We Can",
    description:
      "Bridging the gap between advanced healthcare facilities and marginalized communities through compassion and action.",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] max-h-screen w-full overflow-hidden"
    >
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full container-narrow mx-auto px-4 md:px-8 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                  staggerChildren: 0.15,
                  delayChildren: 0.2,
                },
              },
              exit: {
                opacity: 0,
                y: -30,
                transition: { duration: 0.5 },
              },
            }}
            className="max-w-2xl text-primary-foreground"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-primary font-semibold mb-3 tracking-wide"
            >
              {slides[currentSlide].subtitle}
            </motion.p>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="font-display text-4xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            >
              {slides[currentSlide].title}
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed"
            >
              {slides[currentSlide].description}
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <a href="#mission">Our Mission</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">Contact Us</a>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;