import { Star, Plus, Eye, X, ShoppingCart, Heart, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';

interface ProductCardProps {
  key?: React.Key;
  id: number;
  name: string;
  price: number;
  image: string;
  weight: string;
  rating: number;
  reviews: number;
  stock: number;
  badge?: string;
  badgeColor?: string;
  onAddToCart: (product: any) => void;
  onBuyNow: (product: any) => void;
  onAddToWishlist: (product: any) => void;
  onProductClick: (product: any) => void;
  isWishlisted?: boolean;
}

export default function ProductCard({ 
  id,
  name, 
  price, 
  image, 
  weight, 
  rating, 
  reviews, 
  stock,
  badge,
  badgeColor = 'bg-accent',
  onAddToCart,
  onBuyNow,
  onAddToWishlist,
  onProductClick,
  isWishlisted = false
}: ProductCardProps) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [userRating, setUserRating] = useState(rating);
  const [hoverRating, setHoverRating] = useState(0);

  const product = { id, name, price, image, weight, rating: userRating, reviews, stock };

  const handleRate = (newRating: number) => {
    setUserRating(newRating);
    // In a real app, you'd send this to a backend
  };

  const isLowStock = stock < 10;

  return (
    <>
      <motion.div 
        whileHover={{ y: -8 }}
        className="bg-white rounded-2xl overflow-hidden border border-slate-100 relative group transition-all flex flex-col h-full hover:shadow-2xl hover:shadow-primary/10"
      >
        {/* Badge */}
        {badge && (
          <div className={`absolute top-3 left-3 z-10 ${badgeColor} text-white text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-wider shadow-sm`}>
            {badge}
          </div>
        )}

        {/* Wishlist Button */}
        <button 
          onClick={() => onAddToWishlist(product)}
          className={`absolute top-3 right-3 z-10 p-2 rounded-full shadow-lg transition-all border ${isWishlisted ? 'bg-red-50 text-red-500 border-red-100' : 'bg-white/80 backdrop-blur-md text-slate-400 border-white/20 hover:text-red-500 hover:bg-white'}`}
        >
          <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
        </button>

        {/* Image Container */}
        <div 
          onClick={() => onProductClick(product)}
          className="aspect-[4/5] bg-slate-50 relative cursor-pointer overflow-hidden"
        >
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
          
          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsQuickViewOpen(true);
              }}
              className="w-full bg-white/90 backdrop-blur-md text-slate-900 py-2.5 rounded-xl font-bold text-xs shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-white flex items-center justify-center gap-2"
            >
              <Eye size={14} />
              Quick View
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-grow flex flex-col">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest opacity-70">
              {weight}
            </span>
            <div className="flex items-center gap-0.5">
              <Star size={10} className="fill-orange-400 text-orange-400" />
              <span className="text-[10px] font-bold text-slate-600">{rating}</span>
            </div>
          </div>

          <h3 
            onClick={() => onProductClick(product)}
            className="text-sm font-bold text-slate-800 line-clamp-2 mb-3 leading-tight hover:text-primary cursor-pointer transition-colors"
          >
            {name}
          </h3>
          
          <div className="mt-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Price</span>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-[10px] font-bold text-slate-500">Rs.</span>
                  <span className="text-xl font-black text-slate-900">{price}</span>
                </div>
              </div>
              
              {isLowStock && (
                <div className="flex items-center gap-1 bg-red-50 px-2 py-1 rounded-md">
                  <AlertTriangle size={10} className="text-red-500" />
                  <span className="text-[9px] font-black text-red-600 uppercase tracking-tighter">Low Stock</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-5 gap-2">
              <button 
                onClick={() => onAddToCart(product)}
                className="col-span-4 bg-slate-900 text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all active:scale-95 shadow-lg shadow-slate-900/10"
              >
                Add to Cart
              </button>
              <button 
                onClick={() => onBuyNow(product)}
                className="col-span-1 bg-primary text-white py-3 rounded-xl flex items-center justify-center hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/10"
                title="Buy Now"
              >
                <ShoppingCart size={14} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {isQuickViewOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuickViewOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[40px] shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setIsQuickViewOpen(false)}
                className="absolute top-8 right-8 z-10 p-3 bg-white/80 backdrop-blur-md rounded-full text-slate-500 hover:text-slate-900 transition-all shadow-xl border border-white/20"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 bg-slate-50 p-12 flex items-center justify-center relative">
                {badge && (
                  <div className={`absolute top-12 left-12 ${badgeColor} text-white text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-widest shadow-xl`}>
                    {badge}
                  </div>
                )}
                <img 
                  src={image} 
                  alt={name} 
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
                <div className="space-y-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-[1px] w-6 bg-primary" />
                      <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em]">
                        Local Harvest
                      </span>
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 leading-none uppercase tracking-tighter">
                      {name}
                    </h2>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            size={14} 
                            className={`${star <= userRating ? "fill-orange-400 text-orange-400" : "text-slate-200"}`} 
                          />
                        ))}
                      </div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        {reviews} Reviews
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl font-black text-slate-900">Rs. {price}</span>
                      <span className="text-lg text-slate-300 line-through font-bold">Rs. {Math.round(price * 1.2)}</span>
                    </div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                      Unit: {weight} • Origin: Kanchanpur
                    </p>
                  </div>

                  <p className="text-slate-500 leading-relaxed text-sm italic font-serif">
                    "Sourced directly from the local farmers of Kanchanpur, ensuring the freshest quality and supporting sustainable agriculture in Nepal."
                  </p>

                  <div className="flex gap-4 pt-4">
                    <button 
                      onClick={() => onAddToCart(product)}
                      className="flex-grow bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-primary transition-all shadow-2xl shadow-slate-900/20 active:scale-95 flex items-center justify-center gap-3"
                    >
                      <ShoppingCart size={16} />
                      Add to Cart
                    </button>
                    <button 
                      onClick={() => onAddToWishlist(product)}
                      className={`p-5 border rounded-2xl transition-all ${isWishlisted ? 'border-red-100 bg-red-50 text-red-500' : 'border-slate-200 text-slate-400 hover:text-red-500 hover:border-red-100 hover:bg-red-50'}`}
                    >
                      <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => onProductClick(product)}
                    className="w-full text-center text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors"
                  >
                    View Full Details
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
