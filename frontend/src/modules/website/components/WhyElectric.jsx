import React from 'react';
import { Leaf, Sparkles, Cpu, Sun, ArrowUpRight } from 'lucide-react';
import { WHY_ELECTRIC_BENEFITS } from '../data/siteData';

export default function WhyElectric({ onOpenContact }) {
  const getIcon = (name) => {
    switch (name) {
      case 'Leaf': return Leaf;
      case 'Sparkles': return Sparkles;
      case 'Cpu': return Cpu;
      case 'Sun': return Sun;
      default: return Leaf;
    }
  };

  return (
    <section id="why-electric" className="py-24 bg-[#07110D] relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#39E58C]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#39E58C]/10 border border-[#39E58C]/30 text-[#39E58C] text-xs font-semibold uppercase tracking-widest mb-4">
            <Leaf className="w-3.5 h-3.5" />
            <span>ADVANTAGES & VALUE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-[#font-heading]">
            Why <span className="text-gradient-green">Electric Mobility?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9AA9A1] max-w-2xl">
            Redefining everyday travel with zero emissions, quiet luxury, and connected digital convenience.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_ELECTRIC_BENEFITS.map((benefit) => {
            const IconComponent = getIcon(benefit.iconName);
            return (
              <div
                key={benefit.number}
                className="group relative p-8 rounded-3xl bg-[#0D1B15] border border-[#1B3328] hover:border-[#39E58C]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-[#39E58C]/10"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-extrabold font-mono text-[#39E58C]/30 group-hover:text-[#39E58C] transition-colors">
                      {benefit.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#07110D] border border-[#1B3328] group-hover:border-[#39E58C]/40 text-[#39E58C] flex items-center justify-center transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Subtitle & Title */}
                  <span className="text-xs font-mono text-[#39E58C] uppercase tracking-wider block mb-1">
                    {benefit.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white font-[#font-heading] group-hover:text-[#39E58C] transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#9AA9A1] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1B3328]/60 flex items-center text-xs text-[#39E58C] font-semibold opacity-80 group-hover:opacity-100">
                  <span>Learn Vision</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
