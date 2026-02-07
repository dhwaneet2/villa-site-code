import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function StorySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const textLines = [
    'A private villa night.',
    'Curated guests.',
    'Inner Circle access.',
    'Live upgrades through the night.',
    'The Vault opens at midnight.',
  ];

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl mb-16 tracking-wide"
          style={{ fontFamily: 'Playfair Display, serif' }}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          NOT EVERYONE GETS INSIDE.
        </motion.h2>

        <div className="space-y-6 mb-16">
          {textLines.map((line, index) => (
            <motion.p
              key={index}
              className="text-base md:text-lg text-[#B3B3B3]"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <p className="text-sm text-white">Some enter.</p>
          <p className="text-sm text-white">Few belong.</p>
        </motion.div>

        <motion.div
          className="h-[1px] w-32 bg-[#B89A5A] mx-auto mt-16"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 2 }}
        />
      </div>
    </section>
  );
}
