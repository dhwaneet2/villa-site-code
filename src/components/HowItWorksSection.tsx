import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Circle, RotateCw, Key } from 'lucide-react';

export function HowItWorksSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cards = [
    {
      icon: Circle,
      title: 'ENTRY',
      description: 'Guests receive Black or White cards on arrival.',
    },
    {
      icon: RotateCw,
      title: 'UPGRADES',
      description: 'Complete challenges. Get selected. Move deeper.',
    },
    {
      icon: Key,
      title: 'THE VAULT',
      description: 'Midnight reveal. Inner Circle enters first.',
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl mb-20 text-center tracking-wide"
          style={{ fontFamily: 'Playfair Display, serif' }}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          HOW IT WORKS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                className="text-center space-y-6 p-8 border border-[#B89A5A]/20 bg-black/50"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ borderColor: 'rgba(184, 154, 90, 0.5)', transition: { duration: 0.3 } }}
              >
                <div className="flex justify-center">
                  <Icon className="w-10 h-10 text-[#B89A5A]" />
                </div>
                <h3
                  className="text-xl tracking-[0.2em]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {card.title}
                </h3>
                <p className="text-sm text-[#B3B3B3] leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
