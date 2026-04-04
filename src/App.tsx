import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Filmography from './components/Filmography';
import BehindTheScenes from './components/BehindTheScenes';
import About from './components/About';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { motion, AnimatePresence } from 'motion/react';
import Lenis from 'lenis';

export default function App() {
  const [loading, setLoading] = useState(true);

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
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {!loading && (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen font-sans selection:bg-white selection:text-black"
          >
            <Navbar />
            <main>
              <Hero />
              <Filmography />
              <BehindTheScenes />
              <About />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
