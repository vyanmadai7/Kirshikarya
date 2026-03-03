import { Sparkles, ArrowRight, Calendar, Tag, X, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const NEWS = [
  {
    id: 1,
    title: "Fresh Harvest: Local Kanchanpur Basmati Rice is here!",
    date: "March 1, 2026",
    category: "New Arrival",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=600",
    description: "The long-awaited premium basmati rice from the local fields of Kanchanpur has arrived. Experience the authentic aroma and taste of our soil.",
    content: "Our local farmers have outdone themselves this season. The Basmati harvest is exceptional, with long grains and that signature aroma that fills the room. We've worked closely with 15 farming families in the Bedkot area to bring this directly to your kitchen. Each bag is quality-checked and packed with care to ensure you get nothing but the best."
  },
  {
    id: 2,
    title: "Organic Spices Collection: Now 100% Handmade",
    date: "February 28, 2026",
    category: "Product Update",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600",
    description: "Our new range of spices is processed using traditional methods to preserve the natural oils and intense flavors of Nepal.",
    content: "We've upgraded our processing hub! All Krishikarya spices are now stone-ground (Chakki) to ensure that the heat of industrial grinding doesn't destroy the delicate essential oils. From our Turmeric to our special Garam Masala, everything is now 100% handmade by local women's cooperatives in Kanchanpur."
  },
  {
    id: 3,
    title: "Krishikarya expands delivery to Dodhara Chandani",
    date: "February 25, 2026",
    category: "Company News",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=600",
    description: "We are proud to announce that our delivery services are now live in Dodhara Chandani. Bringing fresh groceries to more homes.",
    content: "Crossing the bridge! We've officially launched our express delivery service in Dodhara Chandani. Residents can now enjoy the same 45-minute delivery guarantee that Mahendranagar has enjoyed. We've onboarded 5 new local riders who know the area perfectly to ensure your vegetables arrive crisp and fresh."
  }
];

export default function WhatsNew() {
  const [selectedNews, setSelectedNews] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-12">
        <div>
          <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-2">
            <Sparkles size={16} />
            <span>Latest Updates</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900">What's New at Krishikarya</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {NEWS.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm group hover:shadow-xl transition-all duration-500">
            <div className="aspect-video overflow-hidden relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-primary">
                {item.category}
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4 text-slate-400 text-xs font-medium">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag size={14} />
                  <span>{item.category}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                {item.description}
              </p>
              <button 
                onClick={() => setSelectedNews(item)}
                className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
              >
                Read More <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-primary rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="relative z-10 max-w-2xl">
          <h3 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h3>
          <p className="text-white/70 mb-8">
            Get early access to fresh harvests, exclusive local deals, and agricultural tips from the experts at Krishikarya.
          </p>
          
          {subscribed ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 border border-white/20 rounded-2xl p-6 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white flex-shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white">You're subscribed!</h4>
                <p className="text-white/60 text-sm">Check your inbox for a welcome surprise from Kanchanpur.</p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                className="flex-grow bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/20 outline-none"
              />
              <button className="bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20">
                Subscribe Now
              </button>
            </form>
          )}
        </div>
      </div>

      {/* News Modal */}
      <AnimatePresence>
        {selectedNews && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNews(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <button 
                onClick={() => setSelectedNews(null)}
                className="absolute top-6 right-6 p-2 bg-white/80 backdrop-blur-md rounded-full text-slate-500 hover:bg-white transition-colors z-10"
              >
                <X size={20} />
              </button>
              <div className="overflow-y-auto">
                <div className="h-64 relative">
                  <img 
                    src={selectedNews.image} 
                    alt={selectedNews.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-8 right-8">
                    <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest mb-2">
                      <Calendar size={14} />
                      <span>{selectedNews.date}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white leading-tight">{selectedNews.title}</h3>
                  </div>
                </div>
                <div className="p-8 md:p-10 space-y-6">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest">
                    <Tag size={16} />
                    <span>{selectedNews.category}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {selectedNews.content}
                  </p>
                  <div className="pt-8 border-t border-slate-100">
                    <p className="text-slate-400 text-sm italic">
                      Published by Krishikarya Editorial Team • Kanchanpur, Nepal
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
