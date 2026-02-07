import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function CardSystemSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2
            className="text-3xl md:text-5xl mb-6 tracking-wide"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            THE CARD SYSTEM
          </h2>
          <p className="text-sm text-[#B3B3B3] max-w-2xl mx-auto">
            Your journey is determined by the card you receive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* White Card */}
          <motion.div
            className="border border-white/20 p-10 bg-white/5"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-28 border-2 border-white bg-white/10 flex items-center justify-center">
                <span className="text-3xl" style={{ fontFamily: 'Playfair Display, serif' }}>W</span>
              </div>
            </div>
            <h3
              className="text-2xl mb-4 text-center tracking-[0.2em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              WHITE CARD
            </h3>
            <div className="space-y-3 text-sm text-[#B3B3B3] text-center">
              <p>Access to The Floor</p>
              <p>Entry-level experience</p>
              <p>Upgrade opportunities available</p>
              <p className="text-white mt-6">Complete challenges to unlock Black Card access</p>
            </div>
          </motion.div>

          {/* Black Card */}
          <motion.div
            className="border border-[#B89A5A] p-10 bg-[#B89A5A]/5"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-28 border-2 border-[#B89A5A] bg-black flex items-center justify-center">
                <span className="text-3xl text-[#B89A5A]" style={{ fontFamily: 'Playfair Display, serif' }}>B</span>
              </div>
            </div>
            <h3
              className="text-2xl mb-4 text-center tracking-[0.2em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              BLACK CARD
            </h3>
            <div className="space-y-3 text-sm text-[#B3B3B3] text-center">
              <p>Full access to The Floor</p>
              <p>Exclusive Inner Room privileges</p>
              <p>Priority for Vault entry</p>
              <p className="text-[#B89A5A] mt-6">Premium experience. Limited distribution.</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="h-[1px] w-32 bg-[#B89A5A] mx-auto mb-8" />
          <p className="text-sm text-white">Cards are assigned on arrival based on selection criteria.</p>
          <p className="text-xs text-[#B3B3B3] mt-2">Throughout the night, prove yourself. Earn upgrades. Move deeper.</p>
        </motion.div>
      </div>
    </section>
  );
}
