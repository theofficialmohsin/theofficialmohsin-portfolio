import { motion } from 'motion/react';

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-deep" />
      
      {/* Base Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_12%_18%,#190a38_0%,transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_88%_82%,#091835_0%,transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_45%_at_52%_52%,#110818_0%,#080810_100%)]" />

      {/* Animated Orbs */}
      <motion.div
        className="absolute w-[580px] h-[580px] bg-[#270e62] -top-[140px] -left-[100px] opacity-[0.38] rounded-full blur-[100px]"
        animate={{
          x: [0, 32, -22, 0],
          y: [0, -28, 20, 0],
          scale: [1, 1.05, 0.96, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[460px] h-[460px] bg-[#0a1f50] -bottom-[100px] -right-[70px] opacity-[0.36] rounded-full blur-[100px]"
        animate={{
          x: [0, -20, 30, 0],
          y: [0, 25, -15, 0],
          scale: [1, 1.03, 0.98, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: -7 }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] bg-[#62200a] top-[38%] left-[42%] opacity-[0.20] rounded-full blur-[100px]"
        animate={{
          x: [0, 15, -10, 0],
          y: [0, -10, 15, 0],
          scale: [1, 1.08, 0.94, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: -13 }}
      />

      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.036] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)' /%3E%3C/svg%3E")` }} 
      />
    </div>
  );
}
