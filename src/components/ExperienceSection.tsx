import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function ExperienceSection() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1702674414237-59d42b872561?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjBkb29yJTIwc2hhZG93cyUyMGRhcmtuZXNzfGVufDF8fHx8MTc3MDAzNDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'INNER CIRCLE',
    },
    {
      url: 'https://images.unsplash.com/photo-1766080971434-0d27af5dc250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFtcGFnbmUlMjBnbGFzc2VzJTIwZGFyayUyMGx1eHVyeXxlbnwxfHx8fDE3NzAwMzQ5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'MIDNIGHT',
    },
    {
      url: 'https://images.unsplash.com/photo-1761936587521-018660c15d88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxob3VldHRlJTIwZGFuY2luZyUyMG5pZ2h0JTIwY2x1YnxlbnwxfHx8fDE3NzAwMzQ5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'THE VAULT',
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-black">
      <div className="max-w-5xl mx-auto space-y-32">
        {images.map((image, index) => (
          <ImageBlock key={index} image={image} index={index} />
        ))}
      </div>
    </section>
  );
}

function ImageBlock({ image, index }: { image: { url: string; text: string }; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);

  return (
    <motion.div
      ref={(node) => {
        ref.current = node;
        inViewRef(node);
      }}
      className="relative h-[70vh] overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, delay: index * 0.2 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${image.url}')` }}
        >
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <motion.h3
              className="text-4xl md:text-6xl tracking-[0.3em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {image.text}
            </motion.h3>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
