import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BTS_GALLERY } from '../constants';
import { Play, Image as ImageIcon, X } from 'lucide-react';

const BehindTheScenes = () => {
  const [selectedItem, setSelectedItem] = useState<typeof BTS_GALLERY[0] | null>(null);

  return (
    <section id="bts" className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">03 / Process</span>
            <h2 className="text-5xl md:text-7xl font-sans font-bold uppercase tracking-tighter">Behind <br />The Scenes</h2>
          </div>
          <p className="max-w-sm text-sm opacity-50 font-sans leading-relaxed">
            A glimpse into the creative process, rehearsals, and moments captured off-camera.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BTS_GALLERY.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer glass-card"
            >
              {item.type === 'image' ? (
                <img 
                  src={item.url} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full bg-white/5 flex items-center justify-center">
                  <video
                    ref={(el) => { if (el) el.muted = true; }}
                    src={item.url}
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-3 mb-2">
                  {item.type === 'image' ? <ImageIcon size={14} className="opacity-60" /> : <Play size={14} className="opacity-60" />}
                  <span className="text-[9px] uppercase tracking-widest opacity-60">{item.type}</span>
                </div>
                <h3 className="text-xl font-serif italic">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12"
            >
              <div 
                className="absolute inset-0 bg-black/95 backdrop-blur-xl" 
                onClick={() => setSelectedItem(null)} 
              />
              
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="absolute -top-12 right-0 text-white/40 hover:text-white transition-colors"
                >
                  <X size={32} />
                </button>

                <div className="aspect-[4/5] md:aspect-video lg:aspect-[3/4] rounded-2xl overflow-hidden glass-card">
                  {selectedItem.type === 'image' ? (
                    <img 
                      src={selectedItem.url} 
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <video
                      src={selectedItem.url}
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                    />
                  )}
                </div>

                <div className="flex flex-col justify-center">
                  <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-6">Anecdote</span>
                  <h3 className="text-4xl md:text-5xl font-serif italic mb-8 leading-tight">{selectedItem.title}</h3>
                  <p className="text-lg md:text-xl opacity-60 font-sans leading-relaxed italic">
                    "{selectedItem.anecdote}"
                  </p>
                  
                  <div className="mt-12 pt-12 border-t border-white/10">
                    <button 
                      onClick={() => setSelectedItem(null)}
                      className="text-[10px] uppercase tracking-[0.4em] opacity-40 hover:opacity-100 transition-opacity"
                    >
                      Close Story
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BehindTheScenes;
