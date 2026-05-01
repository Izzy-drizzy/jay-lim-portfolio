import React from 'react';
import { motion } from 'motion/react';
import { JAY_LIM_INFO } from '../constants';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden glass-card">
              <img
                src="/assets/photo/hero image.jpg"
                alt="Jay Lim About"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-sm hidden md:flex">
              <span className="text-[10px] uppercase tracking-[0.4em] font-sans opacity-40 text-center">
                Est. <br /> 2018
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-6">03 / Biography</span>
            <div className="space-y-8 text-lg opacity-60 font-sans leading-relaxed">
              <p>{JAY_LIM_INFO.bio}</p>
              <p>
                Jay Lim is an actor based between Korea, the UK, and Europe. He works in both Korean and English, which means he moves comfortably across very different kinds of stories and screens.
                His training started in classical theatre in Seoul, Korea, but he's spent most of his career in contemporary work — film, stage, and everything in between. That shift across cultures and formats has shaped how he approaches a role, whether it's a small independent production or a major stage piece.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-30 block mb-2">Height</span>
                <p className="text-xl font-serif italic">6'1\" / 185cm</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-30 block mb-2">Eyes</span>
                <p className="text-xl font-serif italic">Dark Brown</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-30 block mb-2">Languages</span>
                <p className="text-xl font-serif italic">English, Korean</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
