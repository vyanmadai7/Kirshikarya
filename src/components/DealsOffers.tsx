import { Tag, Clock, ArrowRight, Percent, Gift, Sparkles, ShoppingBag } from 'lucide-react';

const OFFERS = [
  {
    id: 1,
    title: "First Order Special",
    discount: "20% OFF",
    code: "KRISHI20",
    description: "Get 20% off on your first order above Rs. 1000. Valid for new users only.",
    color: "bg-primary",
    icon: <Gift size={24} />
  },
  {
    id: 2,
    title: "Weekend Veggie Blast",
    discount: "15% OFF",
    code: "FRESH15",
    description: "Enjoy 15% off on all fresh vegetables every Saturday and Sunday.",
    color: "bg-accent",
    icon: <Sparkles size={24} />
  },
  {
    id: 3,
    title: "Bulk Purchase Deal",
    discount: "Rs. 500 OFF",
    code: "BULK500",
    description: "Get Rs. 500 flat discount on purchase of 50kg+ vegetables for events.",
    color: "bg-slate-900",
    icon: <ShoppingBag size={24} />
  }
];

export default function DealsOffers() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          <Tag size={14} />
          <span>Limited Time Offers</span>
        </div>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Exclusive Deals & Offers</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Save more on your daily essentials with Krishikarya's special discounts curated for our Kanchanpur family.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {OFFERS.map((offer) => (
          <div key={offer.id} className={`${offer.color} rounded-3xl p-8 text-white relative overflow-hidden group shadow-xl hover:-translate-y-2 transition-all duration-500`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                {offer.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest opacity-70 mb-1">{offer.title}</h3>
                <p className="text-4xl font-black">{offer.discount}</p>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                {offer.description}
              </p>
              <div className="pt-4 flex items-center justify-between">
                <div className="bg-white/20 px-4 py-2 rounded-xl border border-white/20">
                  <p className="text-[10px] font-bold uppercase opacity-70">Use Code</p>
                  <p className="font-mono font-bold">{offer.code}</p>
                </div>
                <button className="w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Tag size={200} />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="w-full md:w-1/3">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Flash Sale</h4>
              <p className="text-slate-500 text-sm mb-4">Every day at 8:00 AM</p>
              <div className="flex justify-center gap-2">
                <div className="bg-slate-900 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold">08</div>
                <div className="bg-slate-900 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold">45</div>
                <div className="bg-slate-900 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold">12</div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Don't miss out on local harvests!</h3>
            <p className="text-slate-600 leading-relaxed">
              Our flash sales feature limited-time discounts on the freshest arrivals from Kanchanpur farms. These items are often harvested the same morning and delivered to you by noon.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-700 bg-white p-3 rounded-xl border border-slate-100">
                <Percent size={16} className="text-primary" />
                <span>Up to 50% Off</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-700 bg-white p-3 rounded-xl border border-slate-100">
                <Sparkles size={16} className="text-primary" />
                <span>Local Farmers</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-700 bg-white p-3 rounded-xl border border-slate-100">
                <ShoppingBag size={16} className="text-primary" />
                <span>Limited Stock</span>
              </div>
            </div>
            <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
