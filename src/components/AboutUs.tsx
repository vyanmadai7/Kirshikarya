import { Users, Heart, Sprout, ShieldCheck, MapPin, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
        >
          <Sprout size={16} />
          <span>Our Story</span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl font-bold text-slate-900 mb-6 leading-tight"
        >
          Connecting Kanchanpur's <br /> <span className="text-primary">Farms to Your Kitchen</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          Krishikarya was born from a simple vision: to empower local farmers in Kanchanpur, Nepal, by providing them a direct digital marketplace to sell their fresh, organic produce directly to consumers.
        </motion.p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
        {[
          { label: "Local Farmers", value: "500+", icon: <Users className="text-primary" /> },
          { label: "Daily Deliveries", value: "1200+", icon: <ShieldCheck className="text-primary" /> },
          { label: "Fresh Products", value: "250+", icon: <Sprout className="text-primary" /> },
          { label: "Happy Families", value: "5000+", icon: <Heart className="text-primary" /> },
        ].map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center group hover:shadow-xl transition-all"
          >
            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              {stat.icon}
            </div>
            <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
            <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[40px] p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <h3 className="text-3xl font-bold mb-6 relative z-10">Our Mission</h3>
          <p className="text-white/80 leading-relaxed text-lg relative z-10">
            To revolutionize the agricultural supply chain in Sudurpashchim Province by eliminating middlemen and ensuring that farmers get the fair price they deserve while customers get the freshest produce possible.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[40px] p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <h3 className="text-3xl font-bold mb-6 relative z-10">Our Vision</h3>
          <p className="text-white/80 leading-relaxed text-lg relative z-10">
            To become the most trusted digital bridge between rural agricultural excellence and urban dietary needs, fostering a sustainable ecosystem where local farming thrives and healthy living is accessible to all.
          </p>
        </motion.div>
      </div>

      {/* Values Section */}
      <div className="space-y-12">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Krishikarya?</h3>
          <p className="text-slate-500">The values that drive us every single day.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "100% Local",
              desc: "Every item on our platform is sourced directly from the farms of Kanchanpur and surrounding areas.",
              icon: <MapPin size={24} />
            },
            {
              title: "Fair Trade",
              desc: "We ensure that our farmers receive up to 40% more profit than traditional wholesale markets.",
              icon: <Globe size={24} />
            },
            {
              title: "Quality Guaranteed",
              desc: "Our quality control team inspects every harvest to ensure only the best reaches your table.",
              icon: <ShieldCheck size={24} />
            }
          ].map((value, index) => (
            <div key={index} className="flex gap-6 p-6 rounded-3xl hover:bg-slate-50 transition-colors">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                {value.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h4>
                <p className="text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team/Community Section */}
      <div className="mt-24 bg-slate-50 rounded-[40px] p-12 md:p-20 text-center">
        <h3 className="text-3xl font-bold text-slate-900 mb-8">Join Our Growing Community</h3>
        <p className="text-slate-600 max-w-2xl mx-auto mb-12 text-lg">
          Whether you are a farmer looking to expand your reach or a customer seeking the best for your family, there's a place for you at Krishikarya.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-white px-10 py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
            Shop Fresh Now
          </button>
          <button className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
            Register as a Seller
          </button>
        </div>
      </div>
    </div>
  );
}
