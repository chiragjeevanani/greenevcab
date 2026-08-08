import React from 'react';
import { Sparkles, Car, Zap, Compass, BatteryCharging, Truck, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/siteData';
import { CLIENT_IMAGES } from '../data/mediaData';

export default function ServicesSection({ onOpenContact }) {
  // Map icons dynamically
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Car': return Car;
      case 'Zap': return Zap;
      case 'Compass': return Compass;
      case 'BatteryCharging': return BatteryCharging;
      case 'Truck': return Truck;
      default: return Zap;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#07110D] relative overflow-hidden">
      
      {/* Soft Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#39E58C]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#39E58C]/10 border border-[#39E58C]/30 text-[#39E58C] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ECOSYSTEM SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-[#font-heading]">
            What’s <span className="text-gradient-green">Coming Soon</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9AA9A1] max-w-2xl">
            Explore the comprehensive suite of electric mobility and fast-charging services currently in preparation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = getIcon(service.iconName);
            const clientImg = CLIENT_IMAGES.find(img => img.id === service.imageId) || CLIENT_IMAGES[0];

            return (
              <div
                key={service.id}
                className="group relative rounded-3xl bg-[#0D1B15] border border-[#1B3328] hover:border-[#39E58C]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-[#39E58C]/10 hover:-translate-y-1"
              >
                <div>
                  {/* Card Media Preview */}
                  <div className="relative h-52 overflow-hidden bg-[#07110D]">
                    <img
                      src={clientImg.src}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B15] via-[#0D1B15]/40 to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#07110D]/90 backdrop-blur-md border border-[#39E58C]/40 text-[#39E58C] text-[11px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#39E58C] animate-pulse" />
                      <span>{service.status}</span>
                    </div>

                    {/* Icon Floating Badge */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-2xl bg-[#39E58C] text-[#07110D] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 stroke-[2.5]" />
                    </div>
                  </div>

                  {/* Service Text Details */}
                  <div className="p-6">
                    <span className="text-xs font-mono text-[#39E58C] uppercase tracking-wider block mb-1">
                      {service.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#39E58C] transition-colors font-[#font-heading]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-[#9AA9A1] leading-relaxed">
                      {service.description}
                    </p>

                    {/* Key Feature List */}
                    <div className="mt-5 pt-4 border-t border-[#1B3328] space-y-2">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#F5F7F6]">
                          <Check className="w-3.5 h-3.5 text-[#39E58C] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={onOpenContact}
                    className="w-full py-3 rounded-xl bg-[#07110D] hover:bg-[#39E58C] border border-[#1B3328] hover:border-[#39E58C] text-[#9AA9A1] hover:text-[#07110D] font-bold text-xs transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Notify Upon Launch</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
