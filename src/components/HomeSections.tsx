import React from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../data/products';
import { ChevronRight } from 'lucide-react';

interface HomeSectionsProps {
  onAddToCart: (product: any) => void;
  onBuyNow: (product: any) => void;
  onAddToWishlist: (product: any) => void;
  onProductClick: (product: any) => void;
  wishlist: any[];
  onViewAll?: (category: string) => void;
}

const SECTIONS = [
  { title: "Fresh Vegetables", category: "Vegetables" },
  { title: "Sweet Fruits", category: "Fruits" },
  { title: "Pure Dairy Products", category: "Dairy" },
  { title: "Spices & Home-made", category: "Spices & Home-made" }
];

export default function HomeSections({ 
  onAddToCart, 
  onBuyNow, 
  onAddToWishlist, 
  onProductClick, 
  wishlist,
  onViewAll
}: HomeSectionsProps) {
  return (
    <div className="space-y-20 py-12">
      {SECTIONS.map((section, idx) => {
        const sectionProducts = PRODUCTS.filter(p => p.category === section.category).slice(0, 15);
        
        if (sectionProducts.length === 0) return null;

        return (
          <section key={section.category} className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-primary font-black text-4xl opacity-10">0{idx + 1}</span>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
                    {section.title}
                  </h2>
                </div>
                <p className="text-slate-400 text-sm font-medium max-w-md">
                  Hand-picked premium {section.category.toLowerCase()} sourced directly from our local farms in Kanchanpur.
                </p>
              </div>
              <button 
                onClick={() => onViewAll?.(section.category)}
                className="bg-white border border-slate-200 text-slate-900 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all group shadow-sm"
              >
                Explore All
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8">
              {sectionProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  {...product} 
                  onAddToCart={onAddToCart}
                  onBuyNow={onBuyNow}
                  onAddToWishlist={onAddToWishlist}
                  onProductClick={onProductClick}
                  isWishlisted={wishlist.some(item => item.id === product.id)}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
