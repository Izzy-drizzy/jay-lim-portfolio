import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import ProjectGallery from './ProjectGallery';

const Filmography = () => {
  const [filter, setFilter] = useState<'All' | 'Film' | 'TV' | 'Theatre' | 'Commercial'>('All');
  const [sortBy, setSortBy] = useState<'year' | 'title'>('year');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    let result = PROJECTS.filter(p => 
      (filter === 'All' || p.category === filter) &&
      (p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
       p.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
       p.genre.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (sortBy === 'year') {
      result.sort((a, b) => b.year - a.year);
    } else {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [filter, sortBy, searchQuery]);

  return (
    <>
    <AnimatePresence>
      {selectedProject && (
        <ProjectGallery
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </AnimatePresence>

    <section id="works" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-4">02 / Filmography</span>
            <h2 className="text-5xl md:text-7xl font-sans font-bold uppercase tracking-tighter">The <br />Archive</h2>
          </div>
          
          <div className="w-full md:w-auto flex flex-col md:flex-row gap-6 items-stretch md:items-center">
            {/* Sort */}
            <div className="flex gap-2 p-1 bg-white/5 rounded-full border border-white/10">
              <button 
                onClick={() => setSortBy('year')}
                className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all ${sortBy === 'year' ? 'bg-white text-black' : 'opacity-50 hover:opacity-100'}`}
              >
                Year
              </button>
              <button 
                onClick={() => setSortBy('title')}
                className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all ${sortBy === 'title' ? 'bg-white text-black' : 'opacity-50 hover:opacity-100'}`}
              >
                Title
              </button>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-16">
          {['All', 'Film', 'TV', 'Theatre', 'Commercial'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-8 py-3 rounded-full border text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${filter === cat ? 'bg-white text-black border-white' : 'border-white/10 opacity-50 hover:opacity-100 hover:border-white/30'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 rounded-2xl glass-card hover:bg-white/10 transition-colors cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="lg:col-span-3 aspect-[4/3] rounded-lg overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-white/10 text-[9px] uppercase tracking-widest opacity-60">
                      {project.genre}
                    </span>
                    <span className="text-[10px] opacity-30 font-sans">{project.year}</span>
                  </div>
                  <h3 className="text-3xl font-serif italic mb-2 group-hover:text-glow transition-all">{project.title}</h3>
                  <p className="text-[11px] uppercase tracking-[0.2em] opacity-40 font-sans mb-4">{project.role}</p>
                  <p className="text-sm opacity-60 leading-relaxed max-w-xl">
                    {project.synopsis}
                  </p>
                </div>

                <div className="lg:col-span-3 flex flex-col justify-center items-end">
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500"
                  >
                    <ArrowUpRight size={24} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
            <div className="py-24 text-center opacity-30 font-sans uppercase tracking-[0.4em]">
              No projects found matching your criteria
            </div>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default Filmography;
