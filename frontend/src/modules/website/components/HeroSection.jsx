import React from 'react';
import { ArrowRight, Sparkles, Zap, Shield, ChevronDown, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, BRAND_STATS } from '../data/siteData';
import { CLIENT_IMAGES } from '../data/mediaData';

export default function HeroSection({ onOpenContact }) {
  const fallbackHeroImg = CLIENT_IMAGES[0];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-start pt-32 sm:pt-36 lg:pt-40 pb-16 overflow-hidden bg-[#07110D]">
      
      {/* Hero Background Media with Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={fallbackHeroImg.src} alt="Green EV Cab Hero" className="w-full h-full object-cover opacity-35 scale-105 filter brightness-75 contrast-110" />

        {/* Gradient overlays for readability and luxury feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07110D] via-[#07110D]/75 to-[#07110D]/50" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#07110D]/60 to-[#07110D]" />
        
        {/* Soft Green Glow Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#39E58C]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#19B86B]/15 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Pre-launch Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D1B15] border border-[#39E58C]/40 text-[#39E58C] text-xs font-semibold tracking-wider uppercase shadow-xl backdrop-blur-md mb-8 animate-bounce-subtle">
          <Sparkles className="w-4 h-4 text-[#39E58C] animate-spin-slow" />
          <span>COMING SOON • PRE-LAUNCH PREVIEW</span>
          <span className="w-2 h-2 rounded-full bg-[#39E58C] animate-ping" />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl font-[#font-heading]">
          The Future of Urban & Highway Mobility Is <span className="text-gradient-green">Electric.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-xl text-[#9AA9A1] max-w-2xl font-normal leading-relaxed">
          Cleaner journeys. Smarter mobility. India’s most trusted integrated EV charging network and zero-emission taxi service is preparing to launch.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#39E58C] to-[#19B86B] text-[#07110D] font-extrabold text-sm shadow-xl shadow-[#39E58C]/25 hover:shadow-2xl hover:shadow-[#39E58C]/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0D1B15]/90 hover:bg-[#12241C] border border-[#1B3328] hover:border-[#39E58C]/40 text-white font-semibold text-sm transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 group"
          >
            <span>Explore Services</span>
            <ChevronDown className="w-4 h-4 text-[#39E58C] group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Quick Trust Highlights */}
        <div className="mt-14 pt-8 border-t border-[#1B3328]/60 w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {BRAND_STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center p-3 rounded-2xl bg-[#0D1B15]/50 border border-[#1B3328]/50 backdrop-blur-sm hover:border-[#39E58C]/30 transition-colors">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#39E58C] font-[#font-heading]">
                {stat.value}
              </span>
              <span className="text-xs text-[#9AA9A1] font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <a
          href="#about"
          className="mt-12 inline-flex flex-col items-center gap-2 text-[#9AA9A1] hover:text-[#39E58C] transition-colors group"
          aria-label="Scroll down to About section"
        >
          <span className="text-[11px] uppercase tracking-widest font-mono">SCROLL DOWN</span>
          <div className="w-6 h-10 rounded-full border-2 border-[#1B3328] group-hover:border-[#39E58C] flex items-start justify-center p-1 transition-colors">
            <div className="w-1.5 h-3 bg-[#39E58C] rounded-full animate-bounce" />
          </div>
        </a>

      </div>
    </section>
  );
}
