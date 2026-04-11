import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, User, Bot, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '@/lib/utils';

const SYSTEM_PROMPT = `You are Mohsin Raza, a professional graphic designer. Speak in first person, be warm, concise, and confident.

FACTS:
- Name: Mohsin Raza
- Profession: Graphic Designer
- Specialties: Logo design, brand identity, posters/flyers, social media graphics, business cards, print design
- Tools: Adobe Illustrator, Adobe Photoshop, Canva Pro
- Experience: 1.5 years, 50+ projects, 25+ clients
- Style: Clean, bold, modern — flexible to any client brief
- WhatsApp: +92 325 4834280
- Instagram: @theofficialmohsin
- Facebook: @theofficialmohsin
- TikTok: @theofficialmohsin
- Fiverr: realmohsin_3
- Pricing: Competitive & flexible. Logo from affordable rates. Full branding available. DM on WhatsApp for a custom quote.
- Turnaround: Logo 1-3 days, social media 24hrs, branding 3-7 days
- Process: Brief → Concept → Digital Drafts → Revisions → Final delivery (AI/PNG/PDF)
- Available: Worldwide for freelance

RULES: Keep replies to 2-4 sentences unless a list genuinely helps. Always first person. When asked to contact/hire, give WhatsApp link AND Fiverr link. Don't break character.`;

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hey! 👋 I'm Mohsin Raza. Graphic designer specialising in logos, branding & social media. Ask me anything about my work, process or how to hire me!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (text?: string) => {
    const messageContent = text || input.trim();
    if (!messageContent || isLoading) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: messageContent }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: newMessages.map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }]
        })),
        config: {
          systemInstruction: SYSTEM_PROMPT,
        }
      });

      const reply = response.text || "I'm sorry, I couldn't process that. Feel free to reach me on WhatsApp: +92 325 4834280";
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Something went wrong. Please reach me directly on WhatsApp: +92 325 4834280" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = [
    "What do you design?",
    "How to hire you?",
    "Pricing?",
    "Turnaround time?",
  ];

  return (
    <>
      {/* FAB */}
      <div className="fixed bottom-8 right-8 z-[5000] flex flex-col items-end gap-3">
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20 }}
              className="glass px-4 py-2 rounded-2xl rounded-br-none border-gold/30 shadow-xl pointer-events-none"
            >
              <p className="text-[11px] text-gold font-medium whitespace-nowrap flex items-center gap-2">
                <Sparkles size={12} />
                Chat with my AI assistant!
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          className={cn(
            "w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors",
            isOpen ? "bg-zinc-800" : "bg-gradient-to-br from-gold to-[#8a6020]"
          )}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-deep animate-pulse" />
          {isOpen ? <X className="text-white" size={24} /> : <MessageSquare className="text-deep" size={24} />}
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-8 z-[4999] w-[380px] max-w-[calc(100vw-2rem)] h-[580px] max-h-[calc(100vh-8rem)] glass rounded-3xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 border-b border-white/10 flex items-center gap-3 bg-white/5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2a1060] to-[#0b2855] border border-gold/30 flex items-center justify-center text-gold font-serif">
                MR
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">Mohsin Raza</div>
                <div className="text-[10px] text-zinc-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Online · replies instantly
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-[10px] text-gold uppercase tracking-wider">
                AI Assistant
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin scrollbar-thumb-gold/20">
              {messages.map((msg, i) => (
                <div key={i} className={cn("flex gap-2.5 items-end", msg.role === 'user' ? "flex-row-reverse" : "")}>
                  <div className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0",
                    msg.role === 'assistant' ? "bg-gradient-to-br from-[#2a1060] to-[#0b2855] border border-gold/30 text-gold" : "bg-white/10 border border-white/10 text-zinc-400"
                  )}>
                    {msg.role === 'assistant' ? 'MR' : <User size={14} />}
                  </div>
                  <div className={cn(
                    "max-w-[80%] p-3 text-xs leading-relaxed rounded-2xl border",
                    msg.role === 'assistant' 
                      ? "bg-white/5 border-white/10 rounded-bl-sm" 
                      : "bg-gold/10 border-gold/30 text-right rounded-br-sm"
                  )}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2.5 items-end">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#2a1060] to-[#0b2855] border border-gold/30 flex items-center justify-center text-gold text-[10px] font-bold">
                    MR
                  </div>
                  <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-bl-sm flex gap-1">
                    <motion.div className="w-1.5 h-1.5 bg-gold rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                    <motion.div className="w-1.5 h-1.5 bg-gold rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                    <motion.div className="w-1.5 h-1.5 bg-gold rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions */}
            <div className="px-5 pb-3 flex flex-wrap gap-2">
              {suggestions.map((sug, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(sug)}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-zinc-400 hover:bg-gold/10 hover:border-gold/30 hover:text-gold transition-all"
                >
                  {sug}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-white/5 border-t border-white/10">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 focus-within:border-gold/30 transition-colors"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder:text-zinc-500"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-[#8a6020] flex items-center justify-center text-deep disabled:opacity-50 transition-transform active:scale-95"
                >
                  <Send size={14} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
