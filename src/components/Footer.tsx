import React from 'react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 bg-black border-t border-[#B89A5A]/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3
            className="text-xl md:text-2xl mb-4 tracking-[0.3em]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            THE INNER CIRCLE
          </h3>
          <p className="text-xs text-[#B3B3B3] tracking-wider">
            Private access. Limited rooms.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
