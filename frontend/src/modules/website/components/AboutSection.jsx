import React from 'react';
import { ShieldCheck, Leaf, Zap, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';
import { CLIENT_IMAGES } from '../data/mediaData';

export default function AboutSection({ onOpenContact }) {
  const mainAboutImg = CLIENT_IMAGES.find(img => img.id === 'img-master-infographic') || CLIENT_IMAGES[0];
  const stationImg = CLIENT_IMAGES.find(img => img.id === 'img-station-overview') || CLIENT_IMAGES[0];

  const corePillars = [
    {
      icon: Leaf,
      title: '100% Green Energy',
      desc: 'Powered by solar charging infrastructure and clean grid power.'
    },
    {
      icon: ShieldCheck,
      title: 'Safe & Reliable',
      desc: 'Verified drivers, 24/7 CCTV surveillance, and real-time app telemetry.'
    },
    {
      icon: Zap,
      title: 'Ultra-Fast Charging',
      desc: 'Up to 240kW DC chargers for rapid EV battery replenishment.'
    },
    {
      icon: Award,
      title: 'Pan-India Vision',
      desc: 'Connecting cities, highways, and residential hubs seamlessly.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0D1B15] relative overflow-hidden border-t border-b border-[#1B3328]">
      
      {/* Decorative background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#39E58C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#39E58C]/10 border border-[#39E58C]/30 text-[#39E58C] text-xs font-semibold uppercase tracking-widest mb-4">
            <Leaf className="w-3.5 h-3.5" />
            <span>BRAND VISION & MISSION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-[#font-heading]">
            Moving Cities <span className="text-gradient-green">Forward</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9AA9A1] max-w-2xl">
            {COMPANY_INFO.name} is building India’s largest integrated electric vehicle charging and zero-emission mobility ecosystem.
          </p>
        </div>

        {/* Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Media with Floating Info Card */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#1B3328] shadow-2xl group">
              <img
                src={mainAboutImg.src}
                alt={mainAboutImg.title}
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07110D] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#07110D]/90 backdrop-blur-xl border border-[#1B3328] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Official Registration</h4>
                  <p className="text-xs text-[#9AA9A1] mt-0.5 font-mono">{COMPANY_INFO.name}</p>
                </div>
                <button
                  onClick={onOpenContact}
                  className="px-4 py-2 rounded-xl bg-[#39E58C] text-[#07110D] font-bold text-xs hover:bg-[#19B86B] transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <span>Connect With Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Secondary Floating Card */}
            <div className="hidden sm:flex absolute -top-6 -right-6 z-20 p-5 rounded-2xl bg-[#07110D]/95 backdrop-blur-xl border border-[#39E58C]/40 shadow-2xl max-w-xs items-center gap-4 animate-pulse-glow">
              <div className="w-12 h-12 rounded-xl bg-[#39E58C]/20 border border-[#39E58C]/40 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-[#39E58C]" />
              </div>
              <div>
                <span className="text-xs text-[#9AA9A1] block font-mono">VISION TARGET</span>
                <span className="text-lg font-extrabold text-white font-[#font-heading]">100% Renewable</span>
                <span className="text-[11px] text-[#39E58C] block font-semibold">Solar + BESS Storage</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-[#font-heading]">
                Building India’s Cleanest Mobility Ecosystem
              </h3>
              <p className="mt-4 text-sm sm:text-base text-[#9AA9A1] leading-relaxed">
                We believe sustainable urban transportation should be effortless, comfortable, and zero-emission. From daily city taxi rides to emergency doorstep charging vans and solar highway hubs, Green EV Cab is setting a new benchmark for clean transportation in India.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {corePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-[#07110D] border border-[#1B3328] hover:border-[#39E58C]/40 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-[#39E58C]/15 flex items-center justify-center mb-3">
                      <IconComponent className="w-4 h-4 text-[#39E58C]" />
                    </div>
                    <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                    <p className="text-xs text-[#9AA9A1] mt-1 leading-normal">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Key Commitment Checkmarks */}
            <div className="space-y-2 pt-2 border-t border-[#1B3328]">
              {[
                'Commercial fleet & individual EV compatibility',
                'Proprietary mobile application booking engine',
                '24/7 dedicated customer helpline & roadside service',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-[#F5F7F6]">
                  <CheckCircle2 className="w-4 h-4 text-[#39E58C] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
