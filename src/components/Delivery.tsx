import { Truck, Clock, ShieldCheck, MapPin, PackageCheck, Calendar, CreditCard } from 'lucide-react';

export default function Delivery() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          <Truck size={14} />
          <span>Fast & Reliable</span>
        </div>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Delivery Information</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Krishikarya provides the fastest grocery delivery service in Kanchanpur, ensuring your local produce reaches you fresh and on time.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-8">
          <div className="flex gap-6 group">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Clock size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">20-45 Minute Delivery</h3>
              <p className="text-slate-500 leading-relaxed">
                Our local delivery network in Mahendranagar and surrounding areas ensures that your order is processed and delivered within 45 minutes of placement.
              </p>
            </div>
          </div>

          <div className="flex gap-6 group">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Safe & Hygienic</h3>
              <p className="text-slate-500 leading-relaxed">
                We prioritize hygiene. Every item is carefully inspected and packed in eco-friendly packaging to maintain freshness and safety.
              </p>
            </div>
          </div>

          <div className="flex gap-6 group">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <MapPin size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Real-time Tracking</h3>
              <p className="text-slate-500 leading-relaxed">
                Stay updated with your order's journey. From the farm to our hub, and from our hub to your doorstep, track everything in real-time.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-primary/5 rounded-[40px] -rotate-2" />
          <img 
            src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800" 
            alt="Delivery Service" 
            className="rounded-3xl shadow-2xl relative z-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 z-20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                <Truck size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Active Riders</p>
                <p className="text-xl font-bold text-slate-900">25+ in Kanchanpur</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <Calendar className="text-primary mb-4" size={32} />
          <h4 className="font-bold text-slate-900 mb-2">Delivery Schedule</h4>
          <p className="text-slate-500 text-sm">We deliver 7 days a week from 7:00 AM to 9:00 PM. Same-day delivery for all orders.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <Truck className="text-primary mb-4" size={32} />
          <h4 className="font-bold text-slate-900 mb-2">Free Delivery</h4>
          <p className="text-slate-500 text-sm">Enjoy free delivery on all orders above Rs. 2000. Flat Rs. 50 for smaller orders.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <CreditCard className="text-primary mb-4" size={32} />
          <h4 className="font-bold text-slate-900 mb-2">Payment Options</h4>
          <p className="text-slate-500 text-sm">Cash on Delivery, eSewa, Khalti, and all major bank transfers accepted.</p>
        </div>
      </div>

      <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
        <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Delivery Coverage Areas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Mahendranagar", "Dodhara Chandani", "Belauri", "Punarbabas", "Bedkot", "Shuklaphanta", "Krishnapur", "Laljhadi"].map((area) => (
            <div key={area} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-3 hover:border-primary transition-colors cursor-default group">
              <PackageCheck size={18} className="text-slate-300 group-hover:text-primary transition-colors" />
              <span className="font-semibold text-slate-700">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
