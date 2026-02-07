import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Car, Users, Shield, Wine, Utensils, Music, Zap, Lock } from 'lucide-react';

export function WhatsIncluded() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const features = [
    {
      icon: Car,
      title: 'Private Transfer',
      description: 'Curated pickup & drop from select Mumbai locations. Exact location shared privately.',
    },
    {
      icon: Wine,
      title: 'Premium Open Bar',
      description: 'Unlimited curated drinks throughout the night. Served poolside & indoors.',
    },
    {
      icon: Utensils,
      title: 'Food Experience',
      description: 'Late-night bites & curated snacks to keep the energy up.',
    },
    {
      icon: Music,
      title: 'Curated Sound',
      description: 'Live DJ + mood-based sets. From chill beginnings to late-night chaos.',
    },
    {
      icon: Zap,
      title: 'White → Black System',
      description: 'Some Get Black and Rest Everyone Gets White. Upgrade to Black through vibe & interaction. Black unlocks The Vault.',
    },
    {
      icon: Lock,
      title: 'The Vault (Midnight Reveal)',
      description: 'A hidden in-villa experience for Black Card holders only. Revealed after midnight.',
    },
    {
      icon: Users,
      title: 'Exclusive Crowd',
      description: 'Invite-only guest list. No randoms. Quality over quantity.',
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'No public filming. What happens inside, stays inside.',
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-black">
      <div className="max-w-6xl mx-auto">
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
            WHAT'S INCLUDED
          </h2>
          <p className="text-sm text-[#B3B3B3]">
            This isn't just a party. It's an experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="border border-[#B89A5A]/20 p-8 bg-black/50 hover:border-[#B89A5A]/50 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Icon className="w-10 h-10 text-[#B89A5A] mb-6" />
                <h3
                  className="text-lg mb-3 tracking-wide"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-[#B3B3B3] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
