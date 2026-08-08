import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Film, ArrowUpRight } from 'lucide-react';
import { CLIENT_VIDEOS } from '../data/mediaData';

export default function VideoBreakSection({ onOpenVideoModal }) {
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const currentVideo = CLIENT_VIDEOS[activeVideoIdx];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative py-28 bg-[#07110D] overflow-hidden border-t border-b border-[#1B3328]">
      
      {/* Full-width Cinematic Video Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-[#39E58C]/40 shadow-2xl bg-[#0D1B15] group aspect-video sm:aspect-[21/9] max-h-[600px] flex items-center justify-center">
          
          {/* Active Video Stream */}
          <video
            ref={videoRef}
            key={currentVideo.id}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            poster={currentVideo.poster}
            className="w-full h-full object-cover filter brightness-90 contrast-105"
          >
            <source src={currentVideo.src} type="video/mp4" />
          </video>

          {/* Luxury Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07110D] via-[#07110D]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07110D]/90 via-transparent to-[#07110D]/90" />
          <div className="absolute inset-0 bg-emerald-950/20 mix-blend-overlay" />

          {/* Central Overlay Statement */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07110D]/80 backdrop-blur-md border border-[#39E58C]/50 text-[#39E58C] text-xs font-semibold uppercase tracking-widest mb-6">
              <Film className="w-3.5 h-3.5" />
              <span>CINEMATIC BRAND FILM</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-[#font-heading] max-w-3xl leading-tight">
              A New Way To Move Is <span className="text-gradient-green">Coming.</span>
            </h2>

            <p className="mt-4 text-xs sm:text-base text-[#9AA9A1] max-w-lg font-medium">
              Watch our official presenter introduce India's most advanced EV charging network & zero-emission taxi fleet.
            </p>

            {/* Launch Modal Play Button */}
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() => onOpenVideoModal(currentVideo)}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#39E58C] to-[#19B86B] text-[#07110D] font-extrabold text-sm shadow-2xl shadow-[#39E58C]/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Play Full Cinema With Sound</span>
              </button>
            </div>
          </div>

          {/* Bottom Interactive Video Controls Bar */}
          <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#07110D]/90 backdrop-blur-xl border border-[#1B3328]">
            
            {/* Video Selector Tabs */}
            <div className="flex items-center gap-2">
              {CLIENT_VIDEOS.map((vid, idx) => (
                <button
                  key={vid.id}
                  onClick={() => {
                    setActiveVideoIdx(idx);
                    setIsPlaying(true);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    activeVideoIdx === idx
                      ? 'bg-[#39E58C] text-[#07110D]'
                      : 'bg-[#0D1B15] text-[#9AA9A1] hover:text-white border border-[#1B3328]'
                  }`}
                >
                  {vid.tag}
                </button>
              ))}
            </div>

            {/* Control Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-2 rounded-xl bg-[#0D1B15] border border-[#1B3328] text-white hover:text-[#39E58C] transition-colors"
                title={isPlaying ? 'Pause Preview' : 'Play Preview'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>

              <button
                onClick={toggleMute}
                className="p-2 rounded-xl bg-[#0D1B15] border border-[#1B3328] text-white hover:text-[#39E58C] transition-colors"
                title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4 text-[#39E58C]" />}
              </button>

              <button
                onClick={() => onOpenVideoModal(currentVideo)}
                className="p-2 rounded-xl bg-[#0D1B15] border border-[#1B3328] text-white hover:text-[#39E58C] transition-colors"
                title="Fullscreen Modal"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
