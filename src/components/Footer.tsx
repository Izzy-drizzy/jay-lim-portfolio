import React from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-8">04 / Contact</span>
            <h2 className="text-6xl md:text-8xl font-sans font-bold uppercase tracking-tighter mb-12">
              Let's <br /> <span className="text-glow italic font-serif lowercase">Create</span>
            </h2>
            <div className="flex flex-col gap-6">
              <a href="mailto:contact@jaylim.com" className="group flex items-center gap-4 text-2xl md:text-3xl font-serif italic hover:text-glow transition-all">
                <Mail className="opacity-40 group-hover:opacity-100 transition-opacity" size={24} />
                contact@jaylim.com
              </a>
              <div className="flex gap-12 mt-8 text-[11px] uppercase tracking-[0.2em] font-sans opacity-50">
                <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Twitter</a>
                <a href="#" className="hover:opacity-100 transition-opacity">IMDb</a>
              </div>
            </div>
          </div>

          <div className="glass-card p-12 rounded-2xl">
            <h3 className="text-xl font-serif italic mb-8">Representation</h3>
            <div className="space-y-12">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-30 block mb-4">UK / Europe</span>
                <p className="text-lg font-sans font-semibold mb-1">United Agents</p>
                <p className="text-sm opacity-50">London, United Kingdom</p>
                <p className="text-sm opacity-50 mt-2">+44 (0) 20 1234 5678</p>
              </div>
              <div className="h-[1px] w-full bg-white/5" />
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-30 block mb-4">US / International</span>
                <p className="text-lg font-sans font-semibold mb-1">Creative Artists Agency (CAA)</p>
                <p className="text-sm opacity-50">Los Angeles, California</p>
                <p className="text-sm opacity-50 mt-2">+1 310 123 4567</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-30 font-sans">
            © 2024 Jay Lim. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] opacity-30 font-sans">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
