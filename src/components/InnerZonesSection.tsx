import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Music, Lock, Sparkles } from 'lucide-react';

export function InnerZonesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const zones = [
    {
      icon: Music,
      title: 'THE FLOOR',
      description: 'Main dance energy. Everyone enters here.',
    },
    {
      icon: Sparkles,
      title: 'INNER ROOM',
      description: 'Black card access only. Calm. Premium.',
    },
    {
      icon: Lock,
      title: 'THE VAULT',
      description: 'Locked until midnight.',
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
          INNER ZONES
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {zones.map((zone, index) => {
            const Icon = zone.icon;
            return (
              <motion.div
                key={index}
                className="text-center space-y-6"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex justify-center">
                  <Icon className="w-10 h-10 text-[#B89A5A]" />
                </div>
                <div className="h-[1px] w-16 bg-[#B89A5A] mx-auto" />
                <h3
                  className="text-xl md:text-2xl tracking-[0.2em]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {zone.title}
                </h3>
                <p className="text-sm text-[#B3B3B3] leading-relaxed">
                  {zone.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}