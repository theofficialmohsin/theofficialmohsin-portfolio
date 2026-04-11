import { ReactNode } from 'react';
import { motion } from 'motion/react';

const SKILLS = [
  { name: 'Adobe Illustrator', level: 'Expert', icon: '🎨' },
  { name: 'Adobe Photoshop', level: 'Expert', icon: '🖼' },
  { name: 'Logo & Brand Design', level: 'Expert', icon: '📐' },
  { name: 'Social Media Design', level: 'Advanced', icon: '📱' },
  { name: 'Print & Poster Design', level: 'Advanced', icon: '🖨' },
  { name: 'Typography', level: 'Advanced', icon: '✍️' },
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

export default function Skills() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <SectionLabel>My Toolkit</SectionLabel>
      <SectionTitle em="craft">Tools of the</SectionTitle>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SKILLS.map((skill, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-gold/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-xl">
              {skill.icon}
            </div>
            <div>
              <div className="text-sm font-medium">{skill.name}</div>
              <div className="text-[10px] text-gold uppercase tracking-wider mt-0.5">{skill.level}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
