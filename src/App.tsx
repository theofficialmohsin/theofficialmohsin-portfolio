import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import CustomCursor from './components/CustomCursor';
import Background from './components/Background';
import AIChat from './components/AIChat';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <Background />
      <AIChat />

      {/* --- Navigation --- */}
      <nav className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-[200] transition-all duration-500",
        scrolled ? "top-4" : "top-6"
      )}>
        <div className="glass px-6 py-3 rounded-full flex items-center gap-8 shadow-2xl">
          <div className="font-serif text-lg font-bold text-gold tracking-wider">MR</div>
          <div className="hidden md:flex items-center gap-6">
            {['About', 'Work', 'Services', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <a 
            href="https://wa.me/923254834280" 
            target="_blank"
            className="bg-gradient-to-br from-gold to-[#9a7030] text-deep text-[10px] font-bold uppercase tracking-widest px-5 py-2 rounded-full hover:shadow-[0_4px_18px_rgba(201,169,110,0.4)] hover:-translate-y-0.5 transition-all"
          >
            Hire Me
          </a>
        </div>
      </nav>

      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
