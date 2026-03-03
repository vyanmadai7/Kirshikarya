import { Search, MapPin, ShoppingCart, User, ChevronDown, Heart, Menu, X, LogOut, Phone } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  user: any;
  onLoginClick: () => void;
  onLogout: () => void;
  onTabChange: (tab: string) => void;
  onWishlistClick: () => void;
  onCartClick: () => void;
  onSellClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Navbar({ 
  cartCount, 
  wishlistCount, 
  user, 
  onLoginClick, 
  onLogout, 
  onTabChange,
  onWishlistClick,
  onCartClick,
  onSellClick,
  searchQuery,
  onSearchChange
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-primary text-white py-2 px-4 text-center text-xs md:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="hidden md:inline">Krishikarya: Freshness from Kanchanpur to your home</span>
          <span className="mx-auto md:mx-0 font-bold">Get Free Delivery On Shopping Upto NPR 3000+</span>
          <div className="hidden md:flex gap-4">
            <a href="#" className="hover:underline">Track Order</a>
            <a href="tel:+9779800000000" className="hover:underline flex items-center gap-1">
              <Phone size={12} /> +977-9800000000
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-slate-100 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4 md:gap-8">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 flex-shrink-0 cursor-pointer"
            onClick={() => onTabChange('home')}
          >
            <Logo className="w-10 h-10" />
            <span className="text-xl font-bold tracking-tight text-primary">Krishikarya</span>
          </div>

          {/* Delivery Location */}
          <div className="hidden lg:flex items-center gap-2 text-slate-500 text-sm flex-shrink-0">
            <MapPin size={18} className="text-accent" />
            <div>
              <p className="text-[10px] uppercase font-bold leading-none text-slate-400">Delivery in</p>
              <p className="font-semibold text-slate-700">Kanchanpur, Nepal</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-grow max-w-2xl relative">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search local rice, vegetables, spices..." 
              className="w-full bg-slate-100 border-none rounded-full py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-3 md:gap-5">
            {user?.role === 'seller' && (
              <button 
                onClick={onSellClick}
                className="hidden lg:flex bg-accent text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-accent/90 transition-all shadow-md shadow-accent/10"
              >
                Sell Produce
              </button>
            )}

            <button 
              onClick={onWishlistClick}
              className="relative p-2 text-slate-600 hover:text-primary transition-colors"
            >
              <Heart size={22} />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button 
              onClick={onCartClick}
              className="relative p-2 bg-primary/5 rounded-full text-primary hover:bg-primary/10 transition-colors"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>

            <div className="h-6 w-[1px] bg-slate-200 hidden md:block" />

            {user ? (
              <div className="flex items-center gap-3">
                <div className="hidden md:block text-right">
                  <p className="text-xs font-bold text-slate-900">{user.name}</p>
                  <p className="text-[10px] text-primary font-bold uppercase tracking-wider">{user.role}</p>
                  <button onClick={onLogout} className="text-[10px] text-slate-400 hover:text-red-500 flex items-center gap-1 justify-end">
                    <LogOut size={10} /> Logout
                  </button>
                </div>
                <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center text-primary font-bold border border-slate-200 relative">
                  {user.name.charAt(0)}
                  {user.role === 'seller' && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-white shadow-sm" />
                  )}
                </div>
              </div>
            ) : (
              <button 
                onClick={onLoginClick}
                className="hidden md:flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
              >
                <User size={20} />
                Login
              </button>
            )}

            <button 
              className="md:hidden text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:block max-w-7xl mx-auto px-4 py-2">
          <ul className="flex items-center gap-8 text-sm font-medium text-slate-600">
            <li>
              <button 
                onClick={() => onTabChange('shop')}
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                Shop <ChevronDown size={14} />
              </button>
            </li>
            <li><button onClick={() => onTabChange('whats-new')} className="hover:text-primary transition-colors">What's new</button></li>
            <li><button onClick={() => onTabChange('delivery')} className="hover:text-primary transition-colors">Delivery</button></li>
            <li><button onClick={() => onTabChange('deals')} className="hover:text-primary transition-colors">Deals & Offers</button></li>
            <li><button onClick={() => onTabChange('about')} className="hover:text-primary transition-colors">About Us</button></li>
            <li><button onClick={() => onTabChange('help')} className="hover:text-primary transition-colors">Help & Support</button></li>
            {user && <li><button onClick={() => onTabChange('orders')} className="hover:text-primary transition-colors">Orders</button></li>}
            <li><button onClick={() => onTabChange('contact')} className="hover:text-primary transition-colors">Contact</button></li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 py-4 animate-in slide-in-from-top duration-300">
          <ul className="space-y-4 text-sm font-medium text-slate-600">
            <li><button onClick={() => { onTabChange('home'); setIsMenuOpen(false); }} className="block w-full text-left py-2">Home</button></li>
            <li><button onClick={() => { onTabChange('shop'); setIsMenuOpen(false); }} className="block w-full text-left py-2">Shop All</button></li>
            <li><button onClick={() => { onTabChange('whats-new'); setIsMenuOpen(false); }} className="block w-full text-left py-2">What's new</button></li>
            <li><button onClick={() => { onTabChange('delivery'); setIsMenuOpen(false); }} className="block w-full text-left py-2">Delivery</button></li>
            <li><button onClick={() => { onTabChange('deals'); setIsMenuOpen(false); }} className="block w-full text-left py-2">Deals & Offers</button></li>
            <li><button onClick={() => { onTabChange('about'); setIsMenuOpen(false); }} className="block w-full text-left py-2">About Us</button></li>
            <li><button onClick={() => { onTabChange('help'); setIsMenuOpen(false); }} className="block w-full text-left py-2">Help & Support</button></li>
            {user && <li><button onClick={() => { onTabChange('orders'); setIsMenuOpen(false); }} className="block w-full text-left py-2">Orders</button></li>}
            <li><button onClick={() => { onTabChange('contact'); setIsMenuOpen(false); }} className="block w-full text-left py-2">Contact</button></li>
            {!user && (
              <li><button onClick={() => { onLoginClick(); setIsMenuOpen(false); }} className="block w-full text-left py-2 text-primary font-bold">Login</button></li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
