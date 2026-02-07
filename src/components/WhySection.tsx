import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function WhySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const reasons = [
    'crowd quality',
    'privacy',
    'experience',
    'energy',
  ];

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-black">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          className="space-y-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-base md:text-lg text-[#B3B3B3]">
            Clubs became crowded.
          </p>
          <p className="text-base md:text-lg text-[#B3B3B3]">
            Villa parties became chaotic.
          </p>
        </motion.div>

        <motion.h2
          className="text-2xl md:text-4xl mb-12 tracking-wide"
          style={{ fontFamily: 'Playfair Display, serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          The Inner Circle exists for people who care about:
        </motion.h2>

        <motion.div
          className="space-y-4 mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {reasons.map((reason, index) => (
            <motion.p
              key={index}
              className="text-sm md:text-base text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              {reason}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          className="h-[1px] w-24 bg-[#B89A5A] mx-auto my-12"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        />

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <p className="text-sm md:text-base text-white">
            We don't sell tickets.
          </p>
          <p className="text-sm md:text-base text-white">
            We select guests.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
