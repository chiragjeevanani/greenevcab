import React from 'react';
import { Sparkles, ArrowRight, Smartphone, Calendar, Zap, CheckCircle2 } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/siteData';

export default function HowItWorks({ onOpenContact }) {
  return (
    <section id="how-it-works" className="py-24 bg-[#0D1B15] relative overflow-hidden border-t border-b border-[#1B3328]">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#39E58C]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#39E58C]/10 border border-[#39E58C]/30 text-[#39E58C] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SIMPLE JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-[#font-heading]">
            How It Will <span className="text-gradient-green">Work</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9AA9A1] max-w-xl">
            Seamless digital booking and fast charging simplified into 3 effortless steps.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07110D] border border-[#39E58C]/40 text-[#39E58C] text-xs font-mono font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#39E58C] animate-ping" />
            <span>LAUNCHING SOON ACCROSS INDIA</span>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-[#39E58C]/30 to-transparent -translate-y-6 pointer-events-none" />

          {HOW_IT_WORKS_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="relative p-8 rounded-3xl bg-[#07110D] border border-[#1B3328] hover:border-[#39E58C]/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1 group"
            >
              <div>
                {/* Step Number & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#0D1B15] border border-[#39E58C]/30 text-[#39E58C] font-extrabold font-mono text-xl flex items-center justify-center group-hover:scale-105 group-hover:bg-[#39E58C] group-hover:text-[#07110D] transition-all">
                    {item.step}
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#39E58C]/10 text-[#39E58C] border border-[#39E58C]/30 font-semibold">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-[#font-heading] group-hover:text-[#39E58C] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#9AA9A1] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#1B3328] flex items-center justify-between text-xs text-[#9AA9A1]">
                <span>Step {idx + 1} of 3</span>
                <CheckCircle2 className="w-4 h-4 text-[#39E58C]" />
              </div>
            </div>
          ))}

        </div>

        {/* CTA Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#07110D] via-[#0D1B15] to-[#07110D] border border-[#39E58C]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h4 className="text-xl font-bold text-white font-[#font-heading]">Be First to Experience Green EV Mobility</h4>
            <p className="text-xs sm:text-sm text-[#9AA9A1] mt-1">Register your interest to get early access when our app goes live.</p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-3.5 rounded-full bg-[#39E58C] text-[#07110D] font-bold text-xs hover:bg-[#19B86B] transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Register Interest</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
