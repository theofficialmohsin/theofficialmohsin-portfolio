import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  color: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // Logos
  { id: 'l1', title: 'Minimalist Monogram', category: 'logos', image: 'https://img.freepik.com/premium-vector/vector-minimal-text-logo-design_867743-339.jpg', color: 'from-[#0e0621] to-[#2e0f5e]' },
  { id: 'l2', title: 'Circular Badge', category: 'logos', image: 'https://img.freepik.com/vector-premium/circulo-logo-vector-minimalista-concepto-redondo-diseno-icono-conexion-infinito-estilo-espiral-rotacion_790567-757.jpg', color: 'from-[#060f1a] to-[#0d3060]' },
  { id: 'l3', title: 'Luxury Wordmark', category: 'logos', image: 'https://www.shutterstock.com/image-vector/click-logo-represents-ease-accessing-600nw-1841538436.jpg', color: 'from-[#140500] to-[#3d1200]' },
  { id: 'l4', title: 'Geometric Identity', category: 'logos', image: 'https://tse1.mm.bing.net/th/id/OIP.-ihHUwfZ3sltKMnyku_ABQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', color: 'from-[#001a10] to-[#004a28]' },
  // Posters
  { id: 'p1', title: 'Music Night Event', category: 'posters', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800', color: 'from-[#001215] to-[#003a42]' },
  { id: 'p2', title: 'Grand Sale Flyer', category: 'posters', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800', color: 'from-[#1a0022] to-[#4a0066]' },
  { id: 'p3', title: 'Art Exhibition', category: 'posters', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800', color: 'from-[#140500] to-[#3d1200]' },
  // Social Media
  { id: 's1', title: 'Instagram Feed Grid', category: 'social', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800', color: 'from-[#141400] to-[#3d3800]' },
  { id: 's2', title: 'TikTok Content Pack', category: 'social', image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&q=80&w=800', color: 'from-[#001a10] to-[#004a28]' },
  { id: 's3', title: 'YouTube Branding', category: 'social', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800', color: 'from-[#0e0621] to-[#2e0f5e]' },
  // Branding
  { id: 'b1', title: 'Complete Brand Kit', category: 'branding', image: 'https://images.unsplash.com/photo-1634942537034-2531766767d7?auto=format&fit=crop&q=80&w=800', color: 'from-[#1a0a00] to-[#4a2200]' },
  { id: 'b2', title: 'Corporate Identity', category: 'branding', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800', color: 'from-[#0e0621] to-[#2e0f5e]' },
  { id: 'b3', title: 'Packaging Design', category: 'branding', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800', color: 'from-[#060f1a] to-[#0d3060]' },
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

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('logos');
  const filteredPortfolio = PORTFOLIO_ITEMS.filter(item => item.category === activeTab);

  return (
    <section id="work" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionLabel>Portfolio</SectionLabel>
      <SectionTitle em="works">Selected</SectionTitle>
      
      <div className="flex flex-wrap gap-4 mb-12">
        {['logos', 'posters', 'social', 'branding'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "relative px-8 py-3 rounded-full text-[11px] uppercase tracking-[0.2em] transition-all duration-300 overflow-hidden group",
              activeTab === tab 
                ? "text-deep font-bold" 
                : "glass text-zinc-400 hover:text-white"
            )}
          >
            {activeTab === tab && (
              <motion.div 
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-br from-gold to-[#9a7030] z-0"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {filteredPortfolio.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden glass cursor-none"
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-40 group-hover:opacity-60 transition-opacity duration-500", item.color)} />
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-10 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="overflow-hidden">
                  <h3 className="font-serif text-3xl mb-2 translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {item.title}
                  </h3>
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-200">
                    {item.category}
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400">View Project</span>
                  <ArrowRight size={16} className="text-gold" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
