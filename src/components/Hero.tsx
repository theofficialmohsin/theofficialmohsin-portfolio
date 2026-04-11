import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="max-w-5xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gold/10 border border-gold/30 text-[10px] uppercase tracking-[0.22em] text-gold mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#4ade80] animate-pulse" />
          Available for freelance worldwide
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(3.5rem,12vw,9rem)] font-light leading-[0.85] tracking-tight mb-6"
        >
          Mohsin<br /><span className="italic text-gold font-serif">Raza</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-serif italic text-2xl md:text-3xl text-zinc-400 font-light mb-8 tracking-wide"
        >
          Graphic Designer & Visual Storyteller
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl mx-auto text-zinc-400 text-sm md:text-lg leading-relaxed mb-12 font-light"
        >
          Crafting bold logos, brand identities & digital visuals that speak before words do. 
          1.5 years · 50+ projects · clients worldwide.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-5"
        >
          <a href="#work" className="bg-gradient-to-br from-gold to-[#9a7030] text-deep text-xs font-bold uppercase tracking-widest px-10 py-5 rounded-full shadow-[0_4px_24px_rgba(201,169,110,0.35)] hover:shadow-[0_10px_36px_rgba(201,169,110,0.5)] hover:-translate-y-1.5 transition-all duration-300">
            View My Work
          </a>
          <a href="#contact" className="glass text-white text-xs font-medium uppercase tracking-widest px-10 py-5 rounded-full hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-300">
            Get In Touch
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-zinc-500">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gold to-transparent animate-bounce" />
      </motion.div>
    </section>
  );
}
