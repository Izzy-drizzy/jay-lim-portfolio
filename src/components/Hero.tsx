import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import { JAY_LIM_INFO } from '../constants';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const setSpeed = () => { video.playbackRate = 0.7; };
    video.addEventListener('loadedmetadata', setSpeed);
    if (video.readyState >= 1) setSpeed();
    return () => video.removeEventListener('loadedmetadata', setSpeed);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Showreel video background */}
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          src={JAY_LIM_INFO.showreelUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-transparent" />
      </div>

      {/* Bottom-right: secondary content */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-16 right-8 md:right-12 max-w-xs text-right"
      >
        <p className="text-[1.7rem] md:text-[2rem] font-serif italic leading-relaxed opacity-80">
          {JAY_LIM_INFO.title}
        </p>
        <p className="mt-3 text-sm opacity-40 leading-relaxed font-sans tracking-wide">
          Crafting stories through movement, emotion, and the silent spaces in between.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-4 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-500"
        >
          Explore Works
        </motion.button>
      </motion.div>

      {/* Mute toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={toggleMute}
        className="absolute bottom-16 left-8 md:left-12 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors"
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </motion.button>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="w-[1px] h-12 bg-white" />
      </motion.div>
    </section>
  );
};

export default Hero;
