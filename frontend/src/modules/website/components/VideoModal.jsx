import React from 'react';
import { X, Film } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function VideoModal({ video, onClose }) {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative max-w-4xl w-full bg-[#0D1B15] border border-[#39E58C]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        
        {/* Modal Top Header */}
        <div className="p-4 sm:p-5 bg-[#07110D] border-b border-[#1B3328] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#39E58C]/20 text-[#39E58C] flex items-center justify-center">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-[#font-heading]">{video.title}</h3>
              <p className="text-xs text-[#9AA9A1]">{video.subtitle}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#0D1B15] hover:bg-[#39E58C] text-white hover:text-[#07110D] border border-[#1B3328] transition-colors flex items-center justify-center"
            aria-label="Close Video Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative bg-black aspect-[9/16] max-h-[70vh] sm:aspect-video flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            controls
            playsInline
            className="w-full h-full object-contain"
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support HTML video playback.
          </video>
        </div>

        {/* Modal Footer Callout */}
        <div className="p-4 bg-[#07110D] border-t border-[#1B3328] flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#9AA9A1]">
            <span className="w-2 h-2 rounded-full bg-[#39E58C] animate-pulse" />
            <span>Green EV Cab Official Brand Video • {COMPANY_INFO.shortName}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
