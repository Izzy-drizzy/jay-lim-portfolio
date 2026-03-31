import React from 'react';
import { motion } from 'motion/react';
import { JAY_LIM_INFO } from '../constants';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-40">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="/assets/photo/hero image.jpg"
            alt="Jay Lim Portrait"
            className="w-full h-full object-cover grayscale brightness-75" style={{ objectPosition: '50% 52%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent" />
        </motion.div>
      </div>

      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col">
            <motion.h1 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="text-[15vw] md:text-[12vw] leading-[0.85] font-sans font-extrabold uppercase tracking-tighter"
            >
              Jay <br />
              <span className="text-glow">Lim</span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-xs md:mb-12"
          >
            <p className="text-lg md:text-xl font-serif italic leading-relaxed opacity-80">
              {JAY_LIM_INFO.title}
            </p>
            <p className="mt-4 text-sm opacity-50 leading-relaxed font-sans tracking-wide">
              Crafting stories through movement, emotion, and the silent spaces in between.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-4 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-500"
            >
              Explore Works
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="w-[1px] h-12 bg-white" />
      </motion.div>
    </section>
  );
};

export default Hero;
