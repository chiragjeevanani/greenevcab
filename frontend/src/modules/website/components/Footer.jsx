import React, { useState } from 'react';
import { Zap, Mail, Globe, ArrowUpRight, Shield, FileText, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

// Custom inline SVG icons for social platforms
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer({ onOpenContact }) {
  const [modalType, setModalType] = useState(null); // 'privacy' | 'terms' | null

  return (
    <footer className="bg-[#07110D] border-t border-[#1B3328] pt-16 pb-12 text-[#9AA9A1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1B3328]">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#39E58C] to-[#19B86B] p-0.5 flex items-center justify-center shadow-lg shadow-[#39E58C]/20">
                <div className="w-full h-full bg-[#07110D] rounded-[10px] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#39E58C]" />
                </div>
              </div>
              <div>
                <span className="font-[#font-heading] font-extrabold text-xl tracking-tight text-white block">
                  GREEN <span className="text-[#39E58C]">EV CAB</span>
                </span>
                <span className="text-[10px] text-[#9AA9A1] font-mono tracking-widest block">
                  DRIVE GREEN • LIVE CLEAN
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed max-w-sm text-[#9AA9A1]">
              {COMPANY_INFO.name} is committed to building India’s largest integrated EV charging and mobility ecosystem. Providing innovative, reliable, and zero-emission solutions for a cleaner tomorrow.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0D1B15] border border-[#1B3328] text-white hover:text-[#39E58C] hover:border-[#39E58C]/40 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0D1B15] border border-[#1B3328] text-white hover:text-[#39E58C] hover:border-[#39E58C]/40 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0D1B15] border border-[#1B3328] text-white hover:text-[#39E58C] hover:border-[#39E58C]/40 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0D1B15] border border-[#1B3328] text-white hover:text-[#39E58C] hover:border-[#39E58C]/40 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-mono text-[#39E58C] uppercase tracking-wider mb-4 font-bold">Quick Links</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">What's Coming</a></li>
              <li><a href="#showcase" className="hover:text-white transition-colors">Fleet Showcase</a></li>
              <li><a href="#why-electric" className="hover:text-white transition-colors">Why Electric</a></li>
              <li><a href="#highway-network" className="hover:text-white transition-colors">Highway Corridors</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs font-mono text-[#39E58C] uppercase tracking-wider mb-4 font-bold">Offerings</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-1.5"><span className="text-[#39E58C]">•</span> EV Cab & Taxi Rides</li>
              <li className="flex items-center gap-1.5"><span className="text-[#39E58C]">•</span> Mobile Charging Vans</li>
              <li className="flex items-center gap-1.5"><span className="text-[#39E58C]">•</span> Highway Charging Hubs</li>
              <li className="flex items-center gap-1.5"><span className="text-[#39E58C]">•</span> Fast AC & DC Stations</li>
              <li className="flex items-center gap-1.5"><span className="text-[#39E58C]">•</span> Commercial Fleet Solutions</li>
            </ul>
          </div>

          {/* Col 4: Corporate Info */}
          <div>
            <h4 className="text-xs font-mono text-[#39E58C] uppercase tracking-wider mb-4 font-bold">Corporate Contact</h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#39E58C] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">{COMPANY_INFO.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#39E58C] shrink-0" />
                <span>{COMPANY_INFO.website}</span>
              </div>
              <div className="pt-2">
                <span className="inline-block px-2.5 py-1 rounded bg-[#39E58C]/10 text-[#39E58C] text-[10px] font-mono font-bold">
                  PRE-LAUNCH STATUS
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          <div className="text-center sm:text-left space-y-1">
            <p className="text-white font-semibold">{COMPANY_INFO.copyright}</p>
            <p className="text-[11px] text-[#9AA9A1] font-mono">India's Zero-Emission EV Mobility Initiative</p>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <button onClick={() => setModalType('privacy')} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => setModalType('terms')} className="hover:text-white transition-colors">
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>

      {/* Legal Policy Modals */}
      {modalType && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0D1B15] border border-[#1B3328] rounded-3xl p-6 sm:p-8 max-w-2xl w-full relative max-h-[85vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#07110D] border border-[#1B3328] text-white hover:text-[#39E58C]"
            >
              <X className="w-5 h-5" />
            </button>

            {modalType === 'privacy' ? (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white font-[#font-heading]">Privacy Policy</h3>
                <p className="text-xs text-[#9AA9A1] leading-relaxed">
                  {COMPANY_INFO.name} respects your privacy. During this pre-launch phase, any contact information or feedback submitted via our website is strictly used to communicate official launch updates, partnership inquiries, and platform testing invitations.
                </p>
                <p className="text-xs text-[#9AA9A1] leading-relaxed">
                  We do not sell, rent, or lease customer data to third parties. All personal data submitted is stored securely following Indian IT security practices.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white font-[#font-heading]">Terms & Conditions</h3>
                <p className="text-xs text-[#9AA9A1] leading-relaxed">
                  Welcome to the official pre-launch web domain of {COMPANY_INFO.name}. This website serves as an informational preview of our upcoming electric mobility services, mobile charging vans, and charging station hubs.
                </p>
                <p className="text-xs text-[#9AA9A1] leading-relaxed">
                  All service visual representations and renderings displayed are property of {COMPANY_INFO.name}. Commercial ride booking and live payment features will commence upon full platform launch.
                </p>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-[#1B3328] text-right">
              <button
                onClick={() => setModalType(null)}
                className="px-5 py-2 rounded-xl bg-[#39E58C] text-[#07110D] font-bold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
