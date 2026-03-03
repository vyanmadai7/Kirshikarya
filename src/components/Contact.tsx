import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Have questions about our local produce or delivery in Kanchanpur? We're here to help you. Reach out to the Krishikarya team.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-3xl border border-slate-100 text-center shadow-sm">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Phone size={24} />
          </div>
          <h3 className="font-bold text-slate-900 mb-2">Call Us</h3>
          <p className="text-slate-500 text-sm">+977-9800000000</p>
          <p className="text-slate-500 text-sm">+977-099-520000</p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-100 text-center shadow-sm">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail size={24} />
          </div>
          <h3 className="font-bold text-slate-900 mb-2">Email Us</h3>
          <p className="text-slate-500 text-sm">info@krishikarya.com</p>
          <p className="text-slate-500 text-sm">support@krishikarya.com</p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-100 text-center shadow-sm">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MapPin size={24} />
          </div>
          <h3 className="font-bold text-slate-900 mb-2">Visit Us</h3>
          <p className="text-slate-500 text-sm">Mahendranagar, Kanchanpur</p>
          <p className="text-slate-500 text-sm">Sudurpashchim Province, Nepal</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden grid md:grid-cols-2">
        <div className="p-8 md:p-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase">Full Name</label>
                <input type="text" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase">Email Address</label>
                <input type="email" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase">Subject</label>
              <input type="text" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none" placeholder="How can we help?" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase">Message</label>
              <textarea rows={4} className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none resize-none" placeholder="Your message here..."></textarea>
            </div>
            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
        <div className="bg-primary p-8 md:p-12 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-6">Connect with Krishikarya</h3>
            <p className="text-white/70 mb-8 leading-relaxed">
              Follow us on social media for daily updates on fresh arrivals, local farming stories, and exclusive offers for the Kanchanpur community.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          <div className="mt-12">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
              <p className="font-bold mb-2">Working Hours</p>
              <div className="flex justify-between text-sm text-white/70">
                <span>Mon - Sat</span>
                <span>7:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between text-sm text-white/70 mt-1">
                <span>Sunday</span>
                <span>8:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
