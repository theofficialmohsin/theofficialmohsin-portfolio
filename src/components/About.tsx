import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Users, Star, Award } from 'lucide-react';

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

export default function About() {
  const stats = [
    { n: '50+', l: 'Projects Delivered', icon: <Briefcase size={20} /> },
    { n: '25+', l: 'Happy Clients', icon: <Users size={20} /> },
    { n: '1.5', l: 'Years Experience', icon: <Star size={20} /> },
    { n: '5★', l: 'Fiverr Rated', icon: <Award size={20} /> },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionLabel>Who I Am</SectionLabel>
      <SectionTitle em="speaks">Design that</SectionTitle>
      
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-zinc-400 leading-relaxed"
        >
          <p>I'm Mohsin Raza — a passionate graphic designer with a sharp eye for aesthetics and a deep love for crafting visuals that mean something. I believe great design isn't decoration, it's communication.</p>
          <p>Whether it's a minimal wordmark, a vibrant event poster, or a full brand identity, I pour thought and intention into every pixel. My clients come back not just for the craft, but for the experience.</p>
          <p>Based in Pakistan, working worldwide. Let's build something extraordinary together.</p>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-2xl group hover:border-gold/30 transition-colors"
            >
              <div className="text-gold mb-3 opacity-50 group-hover:opacity-100 transition-opacity">{stat.icon}</div>
              <div className="font-serif text-4xl text-gold mb-1">{stat.n}</div>
              <div className="text-[10px] uppercase tracking-widest text-zinc-500">{stat.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
