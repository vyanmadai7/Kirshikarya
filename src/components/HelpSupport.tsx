import { HelpCircle, Search, MessageCircle, PhoneCall, FileText, ChevronRight, BookOpen, Shield, CreditCard, Truck } from 'lucide-react';
import { useState } from 'react';

const FAQS = [
  {
    question: "How do I place an order on Krishikarya?",
    answer: "You can browse our products, add them to your cart, and proceed to checkout. You'll need to create an account or login to complete your purchase."
  },
  {
    question: "What are the delivery charges in Kanchanpur?",
    answer: "We offer free delivery on orders above Rs. 2000. For orders below that, a nominal delivery fee of Rs. 50 is charged within Mahendranagar."
  },
  {
    question: "Can I return fresh produce if I'm not satisfied?",
    answer: "Yes, we have a 'No Questions Asked' return policy for fresh vegetables and fruits at the time of delivery if they don't meet your quality expectations."
  },
  {
    question: "Do you source products directly from farmers?",
    answer: "Absolutely. Krishikarya works directly with local farmers in Kanchanpur to ensure they get fair prices and you get the freshest produce."
  }
];

const GUIDES = [
  { title: "Getting Started", icon: <BookOpen size={20} />, description: "Learn the basics of shopping and selling." },
  { title: "Payment Methods", icon: <CreditCard size={20} />, description: "How to pay using eSewa, Khalti, or Cash." },
  { title: "Delivery Policy", icon: <Truck size={20} />, description: "Coverage areas and timing in Kanchanpur." },
  { title: "Account Safety", icon: <Shield size={20} />, description: "Keeping your data and transactions secure." },
];

export default function HelpSupport() {
  const [showGuide, setShowGuide] = useState(false);

  if (showGuide) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <button 
          onClick={() => setShowGuide(false)}
          className="text-primary font-bold mb-8 flex items-center gap-2 hover:gap-3 transition-all"
        >
          <ChevronRight size={20} className="rotate-180" /> Back to Help Center
        </button>
        <h2 className="text-4xl font-bold text-slate-900 mb-8">User Guide</h2>
        <div className="space-y-12">
          <section>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">1. How to Shop</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Shopping at Krishikarya is simple. Browse our categories, select the fresh vegetables or fruits you need, and add them to your cart. Once you're ready, proceed to checkout. You'll need to provide your delivery address in Kanchanpur.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" 
              alt="Shopping Guide" 
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
              referrerPolicy="no-referrer"
            />
          </section>
          <section>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">2. Selling Your Produce</h3>
            <p className="text-slate-600 leading-relaxed">
              If you are a farmer in Kanchanpur, you can register as a seller. Use an email containing 'seller' to access the seller dashboard. You can list your harvest, set prices, and manage orders directly from your phone.
            </p>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">How can we help you?</h2>
        <div className="max-w-2xl mx-auto relative mt-8">
          <input 
            type="text" 
            placeholder="Search for help articles, FAQs..." 
            className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-14 pr-6 text-sm shadow-sm focus:ring-2 focus:ring-primary/20 outline-none"
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <a 
          href="https://m.me/krishikarya.nepal" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
        >
          <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <MessageCircle size={24} />
          </div>
          <h3 className="font-bold text-slate-900 mb-2">Live Chat</h3>
          <p className="text-slate-500 text-sm mb-4">Chat with our support team on Facebook Messenger for quick assistance.</p>
          <span className="text-blue-500 font-bold text-sm flex items-center gap-1">Open Messenger <ChevronRight size={16} /></span>
        </a>

        <a 
          href="tel:+9779800000000"
          className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
        >
          <div className="w-12 h-12 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <PhoneCall size={24} />
          </div>
          <h3 className="font-bold text-slate-900 mb-2">Call Support</h3>
          <p className="text-slate-500 text-sm mb-4">Available from 7 AM to 8 PM for all your queries. +977-9800000000</p>
          <span className="text-green-500 font-bold text-sm flex items-center gap-1">Call Now <ChevronRight size={16} /></span>
        </a>

        <button 
          onClick={() => setShowGuide(true)}
          className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group text-left"
        >
          <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <FileText size={24} />
          </div>
          <h3 className="font-bold text-slate-900 mb-2">User Guide</h3>
          <p className="text-slate-500 text-sm mb-4">Learn how to use Krishikarya features and manage your account.</p>
          <span className="text-purple-500 font-bold text-sm flex items-center gap-1">Read Guide <ChevronRight size={16} /></span>
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="text-primary" size={28} />
            <h3 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h3>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:border-primary/20 transition-colors">
                <h4 className="font-bold text-slate-900 mb-2">{faq.question}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-xl font-bold text-slate-900">Quick Guides</h3>
          <div className="space-y-4">
            {GUIDES.map((guide, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-sm transition-all cursor-pointer">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                  {guide.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">{guide.title}</h4>
                  <p className="text-xs text-slate-500">{guide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
