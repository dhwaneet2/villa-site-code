import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Lock, Clock, Eye } from 'lucide-react';

export function VaultMystery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-black relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-[500px] h-[500px] bg-[#B89A5A] blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <Lock className="w-16 h-16 text-[#B89A5A] mx-auto mb-8" />
          <h2
            className="text-4xl md:text-6xl mb-8 tracking-wide"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            THE VAULT
          </h2>
          <div className="h-[1px] w-24 bg-[#B89A5A] mx-auto mb-8" />
        </motion.div>

        <motion.div
          className="space-y-8 text-center mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-lg md:text-xl text-white italic" style={{ fontFamily: 'Playfair Display, serif' }}>
            "What happens at midnight?"
          </p>
          
          <div className="space-y-4 text-sm md:text-base text-[#B3B3B3] max-w-2xl mx-auto leading-relaxed">
            <p>A hidden room. Locked from the start.</p>
            <p>Only whispers about what's inside.</p>
            <p>No cameras. No phones. No proof.</p>
          </div>

          <div className="h-[1px] w-16 bg-[#B89A5A] mx-auto my-8" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Clock className="w-8 h-8 text-[#B89A5A] mx-auto" />
              <p className="text-xs text-white">MIDNIGHT</p>
              <p className="text-xs text-[#B3B3B3]">The vault opens. Once.</p>
            </motion.div>

            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Eye className="w-8 h-8 text-[#B89A5A] mx-auto" />
              <p className="text-xs text-white">SELECTED FEW</p>
              <p className="text-xs text-[#B3B3B3]">Inner Circle enters first.</p>
            </motion.div>

            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Lock className="w-8 h-8 text-[#B89A5A] mx-auto" />
              <p className="text-xs text-white">NO ENTRY AFTER</p>
              <p className="text-xs text-[#B3B3B3]">Miss midnight. Miss everything.</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="border border-[#B89A5A]/30 p-8 md:p-12 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-sm text-center text-white mb-4">Past guests say:</p>
          <div className="space-y-4 text-xs md:text-sm text-[#B3B3B3] text-center italic max-w-lg mx-auto">
            <p>"I can't tell you what happened. But I'll never forget it."</p>
            <p>"The Vault is not what you expect. It's better. And stranger."</p>
            <p>"If you make it in, you'll understand why we can't talk about it."</p>
          </div>
        </motion.div>

        <motion.p
          className="text-xs text-center text-[#B89A5A] mt-12 tracking-wider"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          SOME SECRETS ARE WORTH THE WAIT.
        </motion.p>
      </div>
    </section>
  );
}
