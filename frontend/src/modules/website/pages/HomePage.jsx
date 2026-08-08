import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import VehicleShowcase from '../components/VehicleShowcase';
import WhyElectric from '../components/WhyElectric';
import HowItWorks from '../components/HowItWorks';
import HighwayNetworkSection from '../components/HighwayNetworkSection';
import MobileAppTeaser from '../components/MobileAppTeaser';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

export default function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  return (
    <div className="bg-[#07110D] min-h-screen text-[#F5F7F6] selection:bg-[#39E58C] selection:text-[#07110D]">
      
      {/* Navigation Bar */}
      <Navbar onOpenContact={() => setIsContactModalOpen(true)} />

      {/* Hero Section */}
      <HeroSection onOpenContact={() => setIsContactModalOpen(true)} />

      {/* Brand Vision & About */}
      <AboutSection onOpenContact={() => setIsContactModalOpen(true)} />

      {/* Services / What's Coming */}
      <ServicesSection onOpenContact={() => setIsContactModalOpen(true)} />

      {/* Vehicle & Infrastructure Showcase */}
      <VehicleShowcase />

      {/* Why Electric */}
      <WhyElectric onOpenContact={() => setIsContactModalOpen(true)} />

      {/* How It Works */}
      <HowItWorks onOpenContact={() => setIsContactModalOpen(true)} />

      {/* Highway Network & Energy Storage */}
      <HighwayNetworkSection onOpenContact={() => setIsContactModalOpen(true)} />

      {/* Smart Mobile App Teaser */}
      <MobileAppTeaser onOpenContact={() => setIsContactModalOpen(true)} />

      {/* Final Call to Action */}
      <CtaSection onOpenContact={() => setIsContactModalOpen(true)} />

      {/* Footer */}
      <Footer onOpenContact={() => setIsContactModalOpen(true)} />

      {/* Contact Modal Popup */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

    </div>
  );
}
