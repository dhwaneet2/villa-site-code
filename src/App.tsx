import React, { useState, useEffect } from 'react';
import { OpeningAnimation } from './components/OpeningAnimation';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { CardSystemSection } from './components/CardSystemSection';
import { InnerZonesSection } from './components/InnerZonesSection';
import { VaultMystery } from './components/VaultMystery';
import { WhatsIncluded } from './components/WhatsIncluded';
import { WhySection } from './components/WhySection';
import { RequestAccessForm } from './components/RequestAccessForm';
import { ThankYouModal } from './components/ThankYouModal';
import { Footer } from './components/Footer';

export default function App() {
  const [showOpening, setShowOpening] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Hide opening animation after 3.5 seconds
    const timer = setTimeout(() => {
      setShowOpening(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('request-access');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {showOpening && <OpeningAnimation onComplete={() => setShowOpening(false)} />}
      
      {!showOpening && (
        <>
          <HeroSection onRequestAccess={scrollToForm} />
          <StorySection />
          <CardSystemSection />
          <HowItWorksSection />
          <InnerZonesSection />
          <VaultMystery />
          <WhatsIncluded />
          <WhySection />
          <RequestAccessForm onSubmit={handleFormSubmit} />
          <Footer />
          <ThankYouModal isOpen={showModal} onClose={handleCloseModal} />
        </>
      )}
    </div>
  );
}