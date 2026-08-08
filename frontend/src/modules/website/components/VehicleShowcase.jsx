import React, { useState } from 'react';
import { Sparkles, Maximize2, ShieldCheck, Zap, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { CLIENT_IMAGES } from '../data/mediaData';

export default function VehicleShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    'All',
    'Charging Infrastructure',
    'Mobile Charging',
    'Highway Corridors',
    'Fleet Solutions'
  ];

  const filteredImages = activeCategory === 'All'
    ? CLIENT_IMAGES
    : CLIENT_IMAGES.filter(img => img.category === activeCategory);

  const openLightbox = (img) => {
    setSelectedImage(img);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="showcase" className="py-24 bg-[#0D1B15] relative overflow-hidden border-t border-b border-[#1B3328]">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#39E58C]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#39E58C]/10 border border-[#39E58C]/30 text-[#39E58C] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INFRASTRUCTURE & FLEET</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-[#font-heading]">
            Electric. Comfortable. <span className="text-gradient-green">Ready.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9AA9A1] max-w-2xl">
            Inspect our real charging hubs, mobile doorstep charging vans, fast-charging terminals, and commercial fleet infrastructure.
          </p>

          {/* Category Filter Bar */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-[#07110D] border border-[#1B3328]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#39E58C] text-[#07110D] shadow-md shadow-[#39E58C]/20'
                    : 'text-[#9AA9A1] hover:text-white hover:bg-[#0D1B15]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => openLightbox(img)}
              className="group relative rounded-3xl bg-[#07110D] border border-[#1B3328] hover:border-[#39E58C]/50 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#39E58C]/15 transition-all duration-300"
            >
              {/* Aspect Ratio Container */}
              <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden bg-[#07110D]">
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07110D] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Category Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#07110D]/80 backdrop-blur-md border border-[#1B3328] text-[11px] font-mono text-[#39E58C]">
                  {img.category}
                </div>

                {/* Zoom Icon Button */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#07110D]/80 backdrop-blur-md border border-[#1B3328] text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="w-4 h-4 text-[#39E58C]" />
                </div>

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#0D1B15]/90 backdrop-blur-md border border-[#1B3328] translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-sm font-bold text-white font-[#font-heading] line-clamp-1">
                    {img.title}
                  </h4>
                  <p className="text-xs text-[#9AA9A1] mt-1 line-clamp-2 leading-relaxed">
                    {img.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="relative max-w-5xl w-full bg-[#0D1B15] border border-[#1B3328] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]">
            
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#07110D]/80 hover:bg-[#39E58C] text-white hover:text-[#07110D] border border-[#1B3328] transition-colors flex items-center justify-center"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media Image Side */}
            <div className="lg:w-2/3 bg-[#07110D] flex items-center justify-center p-4 overflow-hidden relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[70vh] w-auto object-contain rounded-xl"
              />
            </div>

            {/* Details Side */}
            <div className="lg:w-1/3 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <span className="text-xs font-mono text-[#39E58C] uppercase tracking-wider block mb-2">
                  {selectedImage.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-[#font-heading]">
                  {selectedImage.title}
                </h3>
                <p className="mt-4 text-xs sm:text-sm text-[#9AA9A1] leading-relaxed">
                  {selectedImage.description}
                </p>

                {/* Highlights */}
                {selectedImage.highlights && (
                  <div className="mt-6 space-y-2 pt-4 border-t border-[#1B3328]">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Key Specifications & Assets</h4>
                    {selectedImage.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#F5F7F6]">
                        <Zap className="w-3.5 h-3.5 text-[#39E58C] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-[#1B3328] flex items-center justify-between text-xs text-[#9AA9A1]">
                <span>GREEN EV CAB • Official Asset</span>
                <span className="text-[#39E58C] font-semibold">PRE-LAUNCH</span>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
