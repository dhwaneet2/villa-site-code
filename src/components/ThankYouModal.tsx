import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-black border border-[#B89A5A] p-12 max-w-md w-full text-center"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="w-16 h-[1px] bg-[#B89A5A] mx-auto mb-8"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              />

              <h3
                className="text-2xl md:text-3xl mb-6 tracking-wide"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Thank you for your response.
              </h3>

              <p className="text-sm text-[#B3B3B3] mb-8 leading-relaxed">
                Requests are reviewed manually.
                <br />
                <br />
                If selected, you'll be notified privately.
              </p>

              <motion.div
                className="w-16 h-[1px] bg-[#B89A5A] mx-auto mb-8"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />

              <motion.button
                onClick={onClose}
                className="px-10 py-3 text-sm tracking-[0.2em] bg-transparent border border-[#B89A5A] text-[#B89A5A] transition-all duration-500 overflow-hidden relative group"
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative z-10">CLOSE</span>
                <motion.div
                  className="absolute inset-0 bg-[#B89A5A]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ originX: 0 }}
                />
                <motion.span
                  className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  CLOSE
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
