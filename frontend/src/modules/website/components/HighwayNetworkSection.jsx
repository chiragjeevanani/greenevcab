import React from 'react';
import { Compass, Sun, Battery, ShieldCheck, MapPin, Coffee, Wifi, Clock, ArrowRight } from 'lucide-react';
import { HIGHWAY_CORRIDORS } from '../data/siteData';
import { CLIENT_IMAGES } from '../data/mediaData';

export default function HighwayNetworkSection({ onOpenContact }) {
  const highwayImg1 = CLIENT_IMAGES.find(img => img.id === 'img-highway-hub-1') || CLIENT_IMAGES[0];
  const highwayImg2 = CLIENT_IMAGES.find(img => img.id === 'img-highway-hub-2') || CLIENT_IMAGES[0];

  const hubFeatures = [
    { icon: Sun, title: 'Solar Powered Hub', desc: '100% renewable rooftop solar generation' },
    { icon: Battery, title: 'BESS Battery Storage', desc: 'Grid-independent battery backup system' },
    { icon: Coffee, title: 'Lounge & Cafe', desc: 'Air-conditioned dining, lounge & fresh coffee' },
    { icon: Wifi, title: 'Free Wi-Fi & Restrooms', desc: 'Clean washrooms and high-speed internet' },
    { icon: Clock, title: '24/7 All-Weather Operation', desc: 'CCTV surveillance & continuous monitoring' },
    { icon: ShieldCheck, title: 'Fleet Support Area', desc: 'Dedicated charging bays for heavy logistics' }
  ];

  return (
    <section id="highway-network" className="py-24 bg-[#0D1B15] relative overflow-hidden border-t border-b border-[#1B3328]">
      
      {/* Glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#39E58C]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#39E58C]/10 border border-[#39E58C]/30 text-[#39E58C] text-xs font-semibold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>INTERCITY CORRIDORS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-[#font-heading]">
            Highway EV <span className="text-gradient-green">Charging Hubs</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9AA9A1] max-w-2xl">
            Connecting major industrial and commercial highway routes with ultra-fast solar charging plazas and premium hospitality lounges.
          </p>
        </div>

        {/* Top Grid: Media Showcase & Corridor Distance Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left 7 cols: Image Banner */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-[#1B3328] shadow-2xl group">
            <img
              src={highwayImg1.src}
              alt="Highway EV Hub"
              className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07110D] via-transparent to-transparent opacity-80" />

            <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#07110D]/90 backdrop-blur-md border border-[#39E58C]/40 text-[#39E58C] text-xs font-mono font-bold">
              UP TO 240kW DC FAST CHARGERS
            </div>
          </div>

          {/* Right 5 cols: Corridors Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#07110D] border border-[#1B3328] shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#1B3328]">
              <div>
                <h3 className="text-xl font-bold text-white font-[#font-heading]">Key Highway Corridors</h3>
                <p className="text-xs text-[#9AA9A1] mt-0.5">Gujarat & West India EV Network</p>
              </div>
              <MapPin className="w-6 h-6 text-[#39E58C]" />
            </div>

            {/* Corridor items */}
            <div className="space-y-3">
              {HIGHWAY_CORRIDORS.map((corridor, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-[#0D1B15] border border-[#1B3328] hover:border-[#39E58C]/40 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#39E58C]/15 text-[#39E58C] font-bold text-xs flex items-center justify-center font-mono">
                      0{idx + 1}
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white block">{corridor.destination}</span>
                      <span className="text-[11px] text-[#9AA9A1]">Estimated travel: {corridor.travelTime}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-[#39E58C] font-mono block">{corridor.distance}</span>
                    <span className="text-[10px] text-[#9AA9A1] uppercase font-mono">Distance</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#39E58C]/10 border border-[#39E58C]/30 flex items-center justify-between">
              <span className="text-xs font-semibold text-white">Next Hub Deployment</span>
              <span className="text-xs font-bold text-[#39E58C] font-mono">120 km intervals</span>
            </div>
          </div>

        </div>

        {/* Bottom Grid: Hub Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubFeatures.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-[#07110D] border border-[#1B3328] hover:border-[#39E58C]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#39E58C]/15 text-[#39E58C] flex items-center justify-center mb-4">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">{feat.title}</h4>
                <p className="text-xs text-[#9AA9A1] mt-1 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
