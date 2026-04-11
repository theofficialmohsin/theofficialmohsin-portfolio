import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Palette, Award, ImageIcon, Smartphone } from 'lucide-react';

const SERVICES = [
  { 
    title: 'Logo Design', 
    desc: 'Timeless, versatile logos crafted to make your brand instantly recognisable across every medium.',
    tags: ['Wordmark', 'Monogram', 'Icon Mark'],
    icon: <Palette className="text-gold" size={24} />
  },
  { 
    title: 'Brand Identity', 
    desc: 'Complete identity systems — colour palettes, typography, guidelines — that ensure you always look cohesive.',
    tags: ['Brand Kit', 'Style Guide', 'Assets'],
    icon: <Award className="text-gold" size={24} />
  },
  { 
    title: 'Poster & Flyer', 
    desc: 'Eye-catching print and digital posters that stop the scroll and command attention at events and launches.',
    tags: ['Event Poster', 'Flyer', 'Banner'],
    icon: <ImageIcon className="text-gold" size={24} />
  },
  { 
    title: 'Social Media', 
    desc: 'Scroll-stopping graphics for Instagram, Facebook, TikTok — posts, stories, reels thumbnails, and covers.',
    tags: ['Posts', 'Stories', 'Thumbnails'],
    icon: <Smartphone className="text-gold" size={24} />
  },
];

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="w-7 h-[1px] bg-gold" />
    <span className="text-[10px] uppercase tracking-[0.26em] text-gold font-medium">{children}</span>
  </div>
);

const SectionTitle = ({ children, em }: { children: ReactNode, em?: string }) => (
  <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-12">
    {children} {em && <em className="italic text-gold not-italic">{em}</em>}
  </h2>
);

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionLabel>What I Offer</SectionLabel>
      <SectionTitle em="results">Services built for</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass p-8 rounded-3xl hover:border-gold/30 transition-colors group"
          >
            <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="font-serif text-xl mb-3">{service.title}</h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-6">{service.desc}</p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map(tag => (
                <span key={tag} className="text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-gold/5 border border-gold/20 text-gold/70">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
