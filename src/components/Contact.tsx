import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Phone, CheckCircle2, Mail, ExternalLink, Instagram, Facebook, Smartphone, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

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

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionLabel>Let's Connect</SectionLabel>
      <SectionTitle em="great?">Ready to create</SectionTitle>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="text-zinc-400 leading-relaxed">
            Whether you have a project in mind or just want to say hi — I'm always open to a conversation. 
            Reach out directly or find me on any platform.
          </p>
          
          <div className="space-y-4">
            {[
              { label: 'WhatsApp', val: '+92 325 4834280', href: 'https://wa.me/923254834280', icon: <Phone size={18} /> },
              { label: 'Fiverr', val: 'realmohsin_3', href: 'https://www.fiverr.com/realmohsin_3', icon: <CheckCircle2 size={18} /> },
              { label: 'Email', val: 'talkmohsin.pk@gmail.com', href: 'mailto:talkmohsin.pk@gmail.com', icon: <Mail size={18} /> },
            ].map((link, i) => (
              <a 
                key={i}
                href={link.href}
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-2xl glass hover:border-gold/30 hover:translate-x-2 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-zinc-500">{link.label}</div>
                  <div className="text-sm">{link.val}</div>
                </div>
                <ExternalLink size={14} className="ml-auto text-zinc-600 group-hover:text-gold transition-colors" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { plat: 'Instagram', href: 'https://www.instagram.com/theofficialmohsin', icon: <Instagram size={24} />, color: 'hover:border-pink-500/30' },
            { plat: 'Facebook', href: 'https://www.facebook.com/theofficialmohsin', icon: <Facebook size={24} />, color: 'hover:border-blue-500/30' },
            { plat: 'TikTok', href: 'https://www.tiktok.com/@theofficialmohsin', icon: <Smartphone size={24} />, color: 'hover:border-white/30' },
          ].map((soc, i) => (
            <a 
              key={i}
              href={soc.href}
              target="_blank"
              className={cn(
                "group relative flex flex-col items-center justify-center p-10 rounded-[2rem] glass transition-all duration-500",
                soc.color
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500 text-zinc-400 group-hover:text-gold">
                {soc.icon}
              </div>
              <div className="text-center">
                <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-2 group-hover:text-gold transition-colors">Connect on</div>
                <div className="text-2xl font-display tracking-tight">{soc.plat}</div>
              </div>
              <div className="mt-8 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <ArrowRight size={14} className="text-gold" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
