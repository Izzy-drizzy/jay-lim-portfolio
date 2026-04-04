import React from 'react';
import { motion } from 'motion/react';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.75 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center backdrop-blur-md bg-black/10 border-b border-white/5"
    >
      <div className="flex flex-col">
        <span className="text-2xl font-serif italic tracking-tight">Jay Lim</span>
      </div>
      
      <div className="hidden md:flex gap-12 text-[11px] uppercase tracking-[0.2em] font-sans opacity-70">
        <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
        <a href="#works" className="hover:opacity-100 transition-opacity">Filmography</a>
        <a href="#bts" className="hover:opacity-100 transition-opacity">BTS</a>
      </div>

      <div className="flex items-center">
        <a 
          href="#contact" 
          className="px-6 py-2 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 font-sans"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
