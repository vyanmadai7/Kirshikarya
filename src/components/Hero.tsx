import { motion } from 'motion/react';

interface HeroProps {
  onLearnMore: () => void;
}

export default function Hero({ onLearnMore }: HeroProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="relative bg-primary rounded-3xl overflow-hidden min-h-[300px] md:min-h-[400px] flex items-center">
        {/* Background Pattern/Texture (Optional) */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#fff_1px,transparent_1px)] bg-[length:20px_20px]" />
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center px-8 md:px-16 py-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Get free delivery on <br />
              <span className="text-accent">shopping NPR 2000</span>
            </h1>
            <p className="text-white/80 text-lg max-w-md leading-relaxed">
              Get the freshest vegetables and fruits delivered right to your home. Save time, skip the lines, and enjoy the convenience of quick, efficient delivery.
            </p>
            <button 
              onClick={onLearnMore}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3.5 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
            >
              Learn More
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" 
                alt="Fresh Vegetables Basket" 
                className="w-full max-w-md rounded-2xl shadow-2xl transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl">
                <p className="text-primary font-bold text-sm">Fresh & Organic</p>
                <p className="text-accent text-xs">100% Quality</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
