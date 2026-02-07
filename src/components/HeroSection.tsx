import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onRequestAccess: () => void;
}

export function HeroSection({ onRequestAccess }: HeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/hero-bg-2.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/55" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        style={{ opacity }}
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-[0.15em] drop-shadow-2xl"
          style={{ fontFamily: 'Playfair Display, serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          THE INNER CIRCLE
        </motion.h1>

        <motion.p
          className="text-xs md:text-sm tracking-[0.4em] text-white drop-shadow-md mb-2 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          CHAPTER 01
        </motion.p>

        <motion.div
          className="h-[1px] w-24 bg-[#B89A5A] mx-auto my-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        />

        <motion.p
          className="text-sm md:text-base text-white mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Private Villa Night
        </motion.p>

        <motion.p
          className="text-xs md:text-sm text-[#B3B3B3] mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          Access by Selection Only
        </motion.p>

        <motion.button
          onClick={onRequestAccess}
          className="relative px-10 py-4 text-sm tracking-[0.2em] bg-transparent border border-[#B89A5A] text-[#B89A5A] transition-all duration-500 overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="relative z-10">REQUEST ACCESS</span>
          <motion.div
            className="absolute inset-0 bg-[#B89A5A]"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            style={{ originX: 0 }}
          />
          <motion.span
            className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            REQUEST ACCESS
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <ChevronDown className="w-6 h-6 text-[#B89A5A]" />
      </motion.div>
    </motion.section>
  );
}
