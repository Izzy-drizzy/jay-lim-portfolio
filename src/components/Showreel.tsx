import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { JAY_LIM_INFO } from '../constants';

const Showreel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="showreel" ref={containerRef} className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">01 / Showreel</span>
            <h2 className="text-5xl md:text-7xl font-sans font-bold uppercase tracking-tighter">The Reel</h2>
          </div>
          <p className="max-w-xs text-sm opacity-50 font-sans leading-relaxed">
            A curated selection of performances from film, television, and stage.
          </p>
        </div>

        <motion.div 
          style={{ scale, opacity }}
          className="relative aspect-video rounded-2xl overflow-hidden glass-card group cursor-pointer"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src={JAY_LIM_INFO.showreelUrl}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            loop
            muted={isMuted}
            playsInline
          />
          
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-24 h-24 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
              {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-2" />}
            </div>
          </div>

          <div className="absolute bottom-8 right-8 flex gap-4">
            <button 
              onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>

          <div className="absolute bottom-8 left-8">
            <span className="text-[10px] uppercase tracking-[0.2em] font-sans opacity-60">2024 Showreel • 2:45</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showreel;
