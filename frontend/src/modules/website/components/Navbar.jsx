import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Zap, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Why Electric', href: '#why-electric' },
    { name: 'Highway Hubs', href: '#highway-network' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3.5 border-b ${
      scrolled 
        ? 'bg-[#07110D]/85 backdrop-blur-xl border-[#1B3328]/50 shadow-2xl shadow-emerald-950/40' 
        : 'bg-gradient-to-b from-[#07110D]/90 via-[#07110D]/40 to-transparent border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#39E58C] to-[#19B86B] p-0.5 flex items-center justify-center shadow-lg shadow-[#39E58C]/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#07110D] rounded-[10px] flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#39E58C] animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-[#font-heading] font-extrabold text-xl tracking-tight text-white group-hover:text-[#39E58C] transition-colors">
                  GREEN <span className="text-[#39E58C]">EV CAB</span>
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#39E58C] bg-[#39E58C]/10 border border-[#39E58C]/30 rounded-full">
                  PRE-LAUNCH
                </span>
              </div>
              <span className="text-[10px] text-[#9AA9A1] font-mono tracking-widest hidden sm:block">
                DRIVE GREEN • LIVE CLEAN
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0D1B15]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#1B3328] shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-[#9AA9A1] hover:text-[#F5F7F6] hover:bg-[#1B3328]/60 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="relative group overflow-hidden px-4 py-2 rounded-full bg-gradient-to-r from-[#39E58C] to-[#19B86B] text-[#07110D] font-bold text-xs shadow-md hover:shadow-lg hover:shadow-[#39E58C]/25 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-1.5"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0D1B15] border border-[#1B3328] text-[#F5F7F6] hover:text-[#39E58C] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-[#07110D]/95 backdrop-blur-xl border-b border-[#1B3328] px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-[#1B3328]">
            <span className="text-xs font-mono text-[#39E58C] uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Official Launching Soon Site
            </span>
            <span className="text-[11px] px-2 py-0.5 rounded bg-[#39E58C]/20 text-[#39E58C] font-semibold">
              2026
            </span>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-[#F5F7F6] hover:bg-[#0D1B15] hover:text-[#39E58C] transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#9AA9A1]">→</span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#1B3328] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#39E58C] to-[#19B86B] text-[#07110D] font-bold text-xs text-center shadow-lg shadow-[#39E58C]/20 flex items-center justify-center gap-2"
            >
              <span>Contact Launch Team</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
