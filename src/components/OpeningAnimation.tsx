import React from 'react';
import { motion } from 'motion/react';

interface OpeningAnimationProps {
  onComplete: () => void;
}

export function OpeningAnimation({ onComplete }: OpeningAnimationProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.5 }}
      onAnimationComplete={onComplete}
    >
      <div className="relative flex flex-col items-center">
        {/* Gold line that expands */}
        <motion.div
          className="absolute h-[1px] bg-[#B89A5A]"
          initial={{ width: 0 }}
          animate={{ width: '300px' }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Main title */}
        <motion.h1
          className="mt-16 text-4xl md:text-6xl tracking-[0.3em] text-white"
          style={{ fontFamily: 'Playfair Display, serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          THE INNER CIRCLE
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-sm tracking-[0.5em] text-[#B3B3B3]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          CHAPTER 01
        </motion.p>

        {/* Gold shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B89A5A] to-transparent opacity-30"
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{ duration: 1, delay: 2.2 }}
        />
      </div>
    </motion.div>
  );
}