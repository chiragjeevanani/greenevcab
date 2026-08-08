import React from 'react';
import { Smartphone, MapPin, CreditCard, Shield, BellRing, Download, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function MobileAppTeaser({ onOpenContact }) {
  const appFeatures = [
    {
      icon: MapPin,
      title: 'Find Station & Live Availability',
      desc: 'Locate nearest AC/DC charging stations and check real-time gun availability before arriving.'
    },
    {
      icon: Smartphone,
      title: 'Doorstep Mobile Charging Dispatch',
      desc: 'Request a mobile charging van to your exact GPS coordinates with live tracking.'
    },
    {
      icon: Shield,
      title: 'Safe EV Taxi Booking',
      desc: 'Book clean electric rides driven by professional verified drivers with 24/7 support.'
    },
    {
      icon: CreditCard,
      title: 'Seamless Digital Payments',
      desc: 'Instant UPI, Credit/Debit card, or integrated Green EV Wallet checkout.'
    }
  ];

  return (
    <section className="py-24 bg-[#07110D] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#39E58C]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#0D1B15] via-[#07110D] to-[#0D1B15] border border-[#39E58C]/40 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#39E58C]/10 border border-[#39E58C]/30 text-[#39E58C] text-xs font-semibold uppercase tracking-widest">
                <Smartphone className="w-3.5 h-3.5" />
                <span>SMART EV APP ECOSYSTEM</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-[#font-heading]">
                Your Complete EV Mobility <span className="text-gradient-green">Control Hub</span>
              </h2>

              <p className="text-sm sm:text-base text-[#9AA9A1] leading-relaxed">
                Whether you need a quick electric cab ride across town or high-speed doorstep mobile charging, our upcoming unified mobile application puts total energy and ride control at your fingertips.
              </p>

              {/* Feature 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {appFeatures.map((feat, i) => {
                  const IconComp = feat.icon;
                  return (
                    <div key={i} className="p-4 rounded-2xl bg-[#07110D] border border-[#1B3328] flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#39E58C]/15 text-[#39E58C] flex items-center justify-center shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                        <p className="text-xs text-[#9AA9A1] mt-0.5 leading-tight">{feat.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* App Pre-launch badges */}
              <div className="pt-6 border-t border-[#1B3328] flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onOpenContact}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#39E58C] text-[#07110D] font-extrabold text-xs shadow-lg hover:bg-[#19B86B] transition-colors flex items-center justify-center gap-2"
                >
                  <BellRing className="w-4 h-4" />
                  <span>Notify Me on App Store Launch</span>
                </button>

                <div className="flex items-center gap-3 text-xs text-[#9AA9A1] font-mono">
                  <span className="px-3 py-1 rounded-lg bg-[#07110D] border border-[#1B3328]">iOS & Android</span>
                  <span>Launching Soon</span>
                </div>
              </div>

            </div>

            {/* Right Mockup Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-[40px] p-4 bg-[#07110D] border-4 border-[#1B3328] shadow-2xl green-glow">
                
                {/* Phone Top Speaker Notch */}
                <div className="w-28 h-4 bg-[#0D1B15] rounded-full mx-auto mb-4 border border-[#1B3328]" />

                {/* Inner Screen */}
                <div className="rounded-[30px] bg-[#0D1B15] p-5 border border-[#1B3328] space-y-4 text-left">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#1B3328]">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-[#39E58C] text-[#07110D] font-extrabold text-[10px] flex items-center justify-center font-mono">G</div>
                      <span className="text-xs font-bold text-white">Green EV App</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#39E58C]/20 text-[#39E58C] font-mono">ONLINE</span>
                  </div>

                  {/* Mock Charger Status Card */}
                  <div className="p-4 rounded-2xl bg-[#07110D] border border-[#39E58C]/30 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#9AA9A1]">Highway Hub #04</span>
                      <span className="text-[#39E58C] font-bold">240kW DC</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">Ahmedabad Expressway Station</h4>
                    <div className="w-full bg-[#1B3328] h-2 rounded-full overflow-hidden">
                      <div className="bg-[#39E58C] h-full w-3/4 animate-pulse" />
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-[#9AA9A1]">
                      <span>Available Guns: 4/6</span>
                      <span className="text-white font-mono">⚡ Ultra Fast</span>
                    </div>
                  </div>

                  {/* Mock Doorstep Van Status Card */}
                  <div className="p-4 rounded-2xl bg-[#07110D] border border-[#1B3328] space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#9AA9A1]">Mobile EV Van Rescue</span>
                      <span className="text-amber-400 font-bold">On Demand</span>
                    </div>
                    <p className="text-xs text-white">Doorstep High-Speed DC Charging Delivery</p>
                    <button className="w-full py-2 rounded-xl bg-[#39E58C]/20 text-[#39E58C] font-bold text-xs border border-[#39E58C]/40">
                      Request Doorstep Van
                    </button>
                  </div>

                  <div className="text-center pt-2">
                    <span className="text-[10px] font-mono text-[#9AA9A1]">OFFICIAL APP INTERFACE PREVIEW</span>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
