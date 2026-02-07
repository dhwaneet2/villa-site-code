import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

interface RequestAccessFormProps {
  onSubmit: () => void;
}

// ⚠️ PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw0tFhELUtYXCtYSIVUrF8FBc9EHunpcvXRtmJb5s9P26VbE0ILVUObbkvL4w_aUER8/exec';

export function RequestAccessForm({ onSubmit }: RequestAccessFormProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    fullName: '',
    instagram: '',
    email: '',
    phoneNumber: '',
    city: '',
    why: '',
    wantsReferral: false,
    referralName: '',
    referralInstagram: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    if (GOOGLE_SCRIPT_URL === 'PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE') {
      console.warn("Google Script URL is not set. Please follow the instructions to set it up.");
      // Simulate success for dev preview if user hasn't set it up
      setTimeout(() => {
        setIsSubmitting(false);
        onSubmit();
      }, 800);
      return;
    }

    // Fire and forget request for speed
    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).catch(error => console.error('Background submission error:', error));

    // Optimistic UI update (simulate fast network)
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        fullName: '', instagram: '', email: '', phoneNumber: '', city: '',
        why: '', wantsReferral: false, referralName: '', referralInstagram: ''
      });
      onSubmit();
    }, 800); // 800ms purposeful delay for "Sending..." feedback
  };

  return (
    <section ref={ref} id="request-access" className="py-32 px-6 md:px-12 bg-black">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl mb-8 text-center tracking-wide"
          style={{ fontFamily: 'Playfair Display, serif' }}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          REQUEST ACCESS
        </motion.h2>

        <motion.p
          className="text-sm text-center text-[#B3B3B3] mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Requesting access does not guarantee entry.
          <br />
          We select based on vibe, not volume.
        </motion.p>

        <motion.div
          className="backdrop-blur-sm bg-white/5 border border-[#B89A5A]/20 p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm text-[#B3B3B3] mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-[#B89A5A]/30 px-4 py-3 text-white focus:outline-none focus:border-[#B89A5A] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="instagram" className="block text-sm text-[#B3B3B3] mb-2">
                Instagram Username
              </label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-[#B89A5A]/30 px-4 py-3 text-white focus:outline-none focus:border-[#B89A5A] transition-colors"
                placeholder="@username"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-[#B3B3B3] mb-2">
                Email ID
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-[#B89A5A]/30 px-4 py-3 text-white focus:outline-none focus:border-[#B89A5A] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm text-[#B3B3B3] mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-[#B89A5A]/30 px-4 py-3 text-white focus:outline-none focus:border-[#B89A5A] transition-colors"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm text-[#B3B3B3] mb-2">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-[#B89A5A]/30 px-4 py-3 text-white focus:outline-none focus:border-[#B89A5A] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="why" className="block text-sm text-[#B3B3B3] mb-2">
                Why do you want to be inside? (optional)
              </label>
              <textarea
                id="why"
                name="why"
                value={formData.why}
                onChange={handleChange}
                rows={4}
                className="w-full bg-black/50 border border-[#B89A5A]/30 px-4 py-3 text-white focus:outline-none focus:border-[#B89A5A] transition-colors resize-none"
              />
            </div>

            <div className="pt-6 border-t border-[#B89A5A]/20">
              <label className="flex items-start space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="wantsReferral"
                  checked={formData.wantsReferral}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 bg-black/50 border border-[#B89A5A]/30 checked:bg-[#B89A5A] focus:ring-0 focus:ring-offset-0"
                />
                <span className="text-sm text-[#B3B3B3] group-hover:text-white transition-colors">
                  I'd like to refer someone who fits the circle
                </span>
              </label>
            </div>

            {formData.wantsReferral && (
              <motion.div
                className="space-y-6 pt-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <label htmlFor="referralName" className="block text-sm text-[#B3B3B3] mb-2">
                    Referral Name
                  </label>
                  <input
                    type="text"
                    id="referralName"
                    name="referralName"
                    value={formData.referralName}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-[#B89A5A]/30 px-4 py-3 text-white focus:outline-none focus:border-[#B89A5A] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="referralInstagram" className="block text-sm text-[#B3B3B3] mb-2">
                    Referral Instagram
                  </label>
                  <input
                    type="text"
                    id="referralInstagram"
                    name="referralInstagram"
                    value={formData.referralInstagram}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-[#B89A5A]/30 px-4 py-3 text-white focus:outline-none focus:border-[#B89A5A] transition-colors"
                    placeholder="@username"
                  />
                </div>
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full mt-8 py-4 text-sm tracking-[0.2em] border border-[#B89A5A] transition-all duration-500 overflow-hidden relative group ${isSubmitting ? 'bg-[#B89A5A]/20 text-[#B89A5A] cursor-wait' : 'bg-transparent text-[#B89A5A]'
                }`}
              whileHover={isSubmitting ? {} : { scale: 1.02 }}
            >
              <span className="relative z-10">{isSubmitting ? 'SENDING REQUEST...' : 'SUBMIT REQUEST'}</span>
              {!isSubmitting && (
                <>
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
                    SUBMIT REQUEST
                  </motion.span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
