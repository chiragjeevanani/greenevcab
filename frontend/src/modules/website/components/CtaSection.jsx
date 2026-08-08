import React from 'react';
import { Mail, Globe, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function CtaSection({ onOpenContact }) {
  return (
    <section id="contact" className="py-24 bg-[#0D1B15] relative overflow-hidden border-t border-[#1B3328]">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#39E58C]/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07110D] border border-[#39E58C]/40 text-[#39E58C] text-xs font-semibold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#39E58C]" />
          <span>JOIN THE MOVEMENT</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-[#font-heading] max-w-3xl leading-tight">
          Ready for the <span className="text-gradient-green">Electric Future?</span>
        </h2>

        {/* Supporting text */}
        <p className="mt-4 text-base sm:text-xl text-[#9AA9A1] max-w-2xl leading-relaxed">
          Our journey is just getting started. Stay connected as we prepare to launch India’s cleanest EV cab network and charging infrastructure.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#39E58C] to-[#19B86B] text-[#07110D] font-extrabold text-sm shadow-xl shadow-[#39E58C]/25 hover:shadow-2xl hover:shadow-[#39E58C]/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="px-6 py-4 rounded-full bg-[#39E58C]/10 border border-[#39E58C]/30 text-[#39E58C] font-mono text-xs font-bold uppercase tracking-wider">
            LAUNCHING SOON
          </div>
        </div>

        {/* Real Contact Info Cards */}
        <div className="mt-16 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 border-t border-[#1B3328]">
          
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="p-6 rounded-2xl bg-[#07110D] border border-[#1B3328] hover:border-[#39E58C]/50 transition-colors flex flex-col items-center text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#39E58C]/15 text-[#39E58C] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-xs text-[#9AA9A1] font-mono uppercase">Email Enquiries</span>
            <span className="text-sm font-bold text-white mt-1 group-hover:text-[#39E58C] transition-colors">{COMPANY_INFO.email}</span>
          </a>

          <a
            href={`https://${COMPANY_INFO.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#07110D] border border-[#1B3328] hover:border-[#39E58C]/50 transition-colors flex flex-col items-center text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#39E58C]/15 text-[#39E58C] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Globe className="w-5 h-5" />
            </div>
            <span className="text-xs text-[#9AA9A1] font-mono uppercase">Official Domain</span>
            <span className="text-sm font-bold text-white mt-1 group-hover:text-[#39E58C] transition-colors">{COMPANY_INFO.website}</span>
          </a>

        </div>

      </div>
    </section>
  );
}
