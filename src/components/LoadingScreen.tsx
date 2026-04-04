import React, { useEffect } from 'react';
import { motion } from 'motion/react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  // Auto-dismiss after text has had time to display
  useEffect(() => {
    const timer = setTimeout(onComplete, 2400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-[#050505] flex items-center justify-center"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="text-2xl font-serif italic tracking-tight text-white"
      >
        Jay Lim
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
