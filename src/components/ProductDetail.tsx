import React, { useState, useEffect } from 'react';
import { Star, ShoppingCart, Heart, ArrowLeft, ShieldCheck, Truck, RotateCcw, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import ProductCard from './ProductCard';

interface ProductDetailProps {
  product: any;
  allProducts: any[];
  onBack: () => void;
  onAddToCart: (product: any) => void;
  onBuyNow: (product: any) => void;
  onAddToWishlist: (product: any) => void;
  onProductClick: (product: any) => void;
  isWishlisted: boolean;
}

export default function ProductDetail({
  product,
  allProducts,
  onBack,
  onAddToCart,
  onBuyNow,
  onAddToWishlist,
  onProductClick,
  isWishlisted
}: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.image);

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(product.image);
    setQuantity(1);
  }, [product]);

  const relatedProducts = allProducts
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const isLowStock = product.stock < 10;

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* Editorial Header */}
      <div className="bg-slate-50 border-b border-slate-100 mb-12">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors group"
          >
            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all">
              <ArrowLeft size={14} />
            </div>
            <span className="text-xs font-black uppercase tracking-widest">Back to Collection</span>
          </button>
          
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            <span>Catalogue</span>
            <ChevronRight size={10} />
            <span>{product.category}</span>
            <ChevronRight size={10} />
            <span className="text-slate-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Immersive Image Gallery */}
          <div className="lg:col-span-7 space-y-8">
            <div className="aspect-[4/5] bg-slate-50 rounded-[40px] overflow-hidden relative group">
              <motion.img 
                key={activeImage}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src={activeImage} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-8 left-8">
                <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                  Premium Quality
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {[product.image, product.image, product.image, product.image].map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all p-1 bg-slate-50 ${activeImage === img ? 'border-primary' : 'border-transparent hover:border-slate-200'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover rounded-xl" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Editorial Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-8 bg-primary" />
                  <span className="text-primary font-black text-xs uppercase tracking-[0.3em]">
                    {product.category}
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
                  {product.name}
                </h1>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        size={14} 
                        className={`${star <= product.rating ? "fill-orange-400 text-orange-400" : "text-slate-200"}`} 
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {product.reviews} Verified Reviews
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="text-5xl font-black text-slate-900">Rs. {product.price}</span>
                  <span className="text-xl text-slate-300 line-through font-bold">Rs. {Math.round(product.price * 1.2)}</span>
                </div>
                <p className="text-slate-400 text-sm font-medium">
                  Unit: <span className="text-slate-900 font-bold">{product.weight}</span> • 
                  Origin: <span className="text-slate-900 font-bold">Kanchanpur, Nepal</span>
                </p>
              </div>

              <div className="h-px bg-slate-100" />

              <div className="space-y-6">
                <p className="text-slate-500 leading-relaxed text-lg italic font-serif">
                  "Freshly harvested from the fertile plains of Kanchanpur, this {product.name.toLowerCase()} represents the pinnacle of local organic farming. We ensure a direct-from-farm experience that preserves every bit of nutritional value and flavor."
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <ShieldCheck size={18} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Certified Organic</span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium">No synthetic pesticides or fertilizers used.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <Truck size={18} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Express Delivery</span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium">Same day delivery available in Kanchanpur.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-6">
                  <div className="flex items-center border border-slate-200 rounded-2xl p-2 bg-slate-50">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-black text-slate-900">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => onAddToCart({ ...product, quantity })}
                    className="flex-grow bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-primary transition-all shadow-2xl shadow-slate-900/20 active:scale-95 flex items-center justify-center gap-3"
                  >
                    <ShoppingCart size={18} />
                    Add to Collection
                  </button>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => onBuyNow({ ...product, quantity })}
                    className="flex-grow bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20 active:scale-95"
                  >
                    Buy Now
                  </button>
                  <button 
                    onClick={() => onAddToWishlist(product)}
                    className={`p-5 border rounded-2xl transition-all ${isWishlisted ? 'border-red-100 bg-red-50 text-red-500' : 'border-slate-200 text-slate-400 hover:text-red-500 hover:border-red-100 hover:bg-red-50'}`}
                  >
                    <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Details Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-slate-100 pt-20">
          <div className="space-y-4">
            <span className="text-primary font-black text-4xl opacity-10">01</span>
            <h3 className="text-xl font-black uppercase tracking-tight">Sustainable Farming</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Our farmers use traditional methods combined with modern sustainable practices to ensure the soil remains fertile for generations to come.
            </p>
          </div>
          <div className="space-y-4">
            <span className="text-primary font-black text-4xl opacity-10">02</span>
            <h3 className="text-xl font-black uppercase tracking-tight">Direct Sourcing</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              By eliminating middlemen, we ensure that our farmers get fair prices and you get the freshest produce at the best possible value.
            </p>
          </div>
          <div className="space-y-4">
            <span className="text-primary font-black text-4xl opacity-10">03</span>
            <h3 className="text-xl font-black uppercase tracking-tight">Quality Control</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Every single item is hand-inspected before being packed, ensuring that only the best quality produce reaches your kitchen.
            </p>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight">You May Also Like</h2>
            <div className="h-[2px] flex-grow mx-8 bg-slate-100" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {relatedProducts.map(p => (
              <ProductCard 
                key={p.id}
                {...p}
                onAddToCart={onAddToCart}
                onBuyNow={onBuyNow}
                onAddToWishlist={onAddToWishlist}
                onProductClick={onProductClick}
                isWishlisted={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
