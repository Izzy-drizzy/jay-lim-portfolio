import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showreel from './components/Showreel';
import Filmography from './components/Filmography';
import BehindTheScenes from './components/BehindTheScenes';
import About from './components/About';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import Lenis from 'lenis';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const stop = () => lenis.stop();
    const start = () => lenis.start();
    window.addEventListener('gallery:open', stop);
    window.addEventListener('gallery:close', start);

    return () => {
      lenis.destroy();
      window.removeEventListener('gallery:open', stop);
      window.removeEventListener('gallery:close', start);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen font-sans selection:bg-white selection:text-black"
      >
        <Navbar />
        <main>
          <Hero />
          <Showreel />
          <Filmography />
          <BehindTheScenes />
          <About />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
