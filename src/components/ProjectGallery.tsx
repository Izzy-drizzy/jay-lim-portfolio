import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Project, GalleryItem } from '../types';

interface Props {
  project: Project;
  onClose: () => void;
}

const VideoThumbnail = ({ url, onClick }: { url: string; onClick: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <div className="relative w-full h-full cursor-pointer group/vid" onClick={onClick}>
      <video
        ref={videoRef}
        src={url}
        className="w-full h-full object-cover"
        muted
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover/vid:bg-black/20 transition-colors">
        <div className="w-14 h-14 rounded-full border-2 border-white/80 flex items-center justify-center backdrop-blur-sm">
          <Play size={20} className="translate-x-0.5 fill-white text-white" />
        </div>
      </div>
    </div>
  );
};

const LightboxModal = ({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) => {
  const item = items[index];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors z-10"
        onClick={onClose}
      >
        <X size={18} />
      </button>

      {items.length > 1 && (
        <>
          <button
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-5xl max-h-[85vh] w-full px-16 md:px-24 flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === 'image' ? (
          <img
            src={item.url}
            alt={item.caption ?? ''}
            className="max-w-full max-h-[75vh] object-contain rounded-lg"
          />
        ) : (
          <video
            src={item.url}
            controls
            autoPlay
            className="max-w-full max-h-[75vh] rounded-lg"
          />
        )}
        {item.caption && (
          <p className="text-[11px] uppercase tracking-[0.3em] opacity-40 text-center">{item.caption}</p>
        )}
        <p className="text-[10px] opacity-20 font-sans">{index + 1} / {items.length}</p>
      </motion.div>
    </motion.div>
  );
};

const ProjectGallery = ({ project, onClose }: Props) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const gallery = project.gallery ?? [];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxIndex === null) onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, lightboxIndex]);

  // Stop Lenis + lock body scroll while open
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('gallery:open'));
    document.body.style.overflow = 'hidden';
    return () => {
      window.dispatchEvent(new CustomEvent('gallery:close'));
      document.body.style.overflow = '';
    };
  }, []);

  // Videos first, then images
  const sortedGallery = [...gallery].sort((a, b) => {
    if (a.type === b.type) return 0;
    return a.type === 'video' ? -1 : 1;
  });

  const heroItem = sortedGallery[0];
  const restItems = sortedGallery.slice(1);

  // Build a masonry-style layout: first item is hero, rest split into columns
  const leftCol: { item: GalleryItem; idx: number }[] = [];
  const rightCol: { item: GalleryItem; idx: number }[] = [];
  restItems.forEach((item, i) => {
    if (i % 2 === 0) leftCol.push({ item, idx: i + 1 });
    else rightCol.push({ item, idx: i + 1 });
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 right-0 bottom-0 z-50 w-full md:w-[85vw] lg:w-[75vw] bg-[#080808] overflow-y-auto overscroll-contain"
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-6 bg-[#080808]/90 backdrop-blur-md border-b border-white/5">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-30 block mb-1">{project.category} · {project.year}</span>
            <h2 className="text-2xl font-serif italic">{project.title}</h2>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-30 hidden md:block">{project.role}</span>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        <div className="px-8 md:px-12 py-12">
          {gallery.length === 0 ? (
            <div className="py-32 text-center opacity-30 font-sans uppercase tracking-[0.4em] text-sm">
              No gallery content available
            </div>
          ) : (
            <>
              {/* Hero media */}
              {heroItem && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6 rounded-2xl overflow-hidden aspect-video cursor-pointer group"
                  onClick={() => setLightboxIndex(0)}
                >
                  {heroItem.type === 'image' ? (
                    <div className="relative w-full h-full">
                      <img
                        src={heroItem.url}
                        alt={heroItem.caption ?? project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  ) : (
                    <VideoThumbnail url={heroItem.url} onClick={() => setLightboxIndex(0)} />
                  )}
                </motion.div>
              )}

              {/* Synopsis */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-sm opacity-50 leading-relaxed max-w-2xl mb-12 font-sans"
              >
                {project.synopsis}
              </motion.p>

              {/* Masonry grid */}
              {restItems.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left column */}
                  <div className="flex flex-col gap-4">
                    {leftCol.map(({ item, idx }, colIdx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + colIdx * 0.08 }}
                        className={`rounded-xl overflow-hidden cursor-pointer group ${colIdx % 2 === 0 ? 'aspect-[4/3]' : 'aspect-[3/2]'}`}
                        onClick={() => setLightboxIndex(idx)}
                      >
                        {item.type === 'image' ? (
                          <div className="relative w-full h-full">
                            <img
                              src={item.url}
                              alt={item.caption ?? ''}
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            {item.caption && (
                              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                                <p className="text-[10px] uppercase tracking-[0.2em] opacity-70">{item.caption}</p>
                              </div>
                            )}
                          </div>
                        ) : (
                          <VideoThumbnail url={item.url} onClick={() => setLightboxIndex(idx)} />
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Right column — offset for masonry feel */}
                  <div className="flex flex-col gap-4 md:mt-16">
                    {rightCol.map(({ item, idx }, colIdx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.45 + colIdx * 0.08 }}
                        className={`rounded-xl overflow-hidden cursor-pointer group ${colIdx % 2 === 0 ? 'aspect-[3/2]' : 'aspect-[4/3]'}`}
                        onClick={() => setLightboxIndex(idx)}
                      >
                        {item.type === 'image' ? (
                          <div className="relative w-full h-full">
                            <img
                              src={item.url}
                              alt={item.caption ?? ''}
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            {item.caption && (
                              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                                <p className="text-[10px] uppercase tracking-[0.2em] opacity-70">{item.caption}</p>
                              </div>
                            )}
                          </div>
                        ) : (
                          <VideoThumbnail url={item.url} onClick={() => setLightboxIndex(idx)} />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <LightboxModal
            items={sortedGallery}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={() => setLightboxIndex((i) => (i! - 1 + sortedGallery.length) % sortedGallery.length)}
            onNext={() => setLightboxIndex((i) => (i! + 1) % sortedGallery.length)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectGallery;
