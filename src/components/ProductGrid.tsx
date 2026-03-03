import { ChevronDown, Filter, ArrowUpDown, Plus } from 'lucide-react';
import ProductCard from './ProductCard';
import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';

const FILTERS = ["All Categories", "Vegetables", "Fruits", "Dairy", "Spices & Home-made", "Healthy Foods", "Price", "Review", "Local Origin", "Offers", "Organic"];
const SORT_OPTIONS = [
  { label: "Default", value: "default" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Rating: High to Low", value: "rating-desc" }
];

interface ProductGridProps {
  onAddToCart: (product: any) => void;
  onBuyNow: (product: any) => void;
  onAddToWishlist: (product: any) => void;
  onProductClick: (product: any) => void;
  wishlist: any[];
  searchQuery?: string;
  initialFilter?: string;
  user?: any;
  onSellClick?: () => void;
}

export default function ProductGrid({ onAddToCart, onBuyNow, onAddToWishlist, onProductClick, wishlist, searchQuery = '', initialFilter, user, onSellClick }: ProductGridProps) {
  const [activeFilter, setActiveFilter] = useState(initialFilter || "All Categories");
  const [sortBy, setSortBy] = useState("default");
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Reset filter when search query changes to ensure results are visible
  React.useEffect(() => {
    if (searchQuery.trim()) {
      setActiveFilter("All Categories");
    }
  }, [searchQuery]);

  const processedProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // 1. Search Filter - Search in name and category
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      const query = trimmedQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.category.toLowerCase().includes(query)
      );
    }

    // 2. Category Filter - Only apply if not searching or if explicitly selected
    if (activeFilter !== "All Categories") {
      switch (activeFilter) {
      case "Vegetables":
        result = result.filter(p => p.category === "Vegetables");
        break;
      case "Fruits":
        result = result.filter(p => p.category === "Fruits");
        break;
      case "Dairy":
        result = result.filter(p => p.category === "Dairy");
        break;
      case "Spices & Home-made":
        result = result.filter(p => p.category === "Spices & Home-made");
        break;
      case "Healthy Foods":
        result = result.filter(p => p.category === "Healthy Foods");
        break;
      case "Price":
        result = result.filter(p => p.price < 2000); // Under 2000 as requested
        break;
      case "Review":
        result = result.filter(p => p.rating >= 4.0); // Adjusted since initial is 0
        break;
      case "Local Origin":
        result = result.filter(p => p.name.toLowerCase().includes("local") || p.name.toLowerCase().includes("kanchanpur"));
        break;
      case "Offers":
        result = result.filter(p => p.badge);
        break;
      case "Organic":
        result = result.filter(p => p.name.toLowerCase().includes("organic") || p.badge === "Organic");
        break;
      default:
        break;
      }
    }

    // 3. Sorting
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating-desc":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [searchQuery, activeFilter, sortBy]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-800">
            {searchQuery ? `Search results for "${searchQuery}"` : "Fresh from Kanchanpur"}
          </h2>
          {activeFilter !== "All Categories" && (
            <p className="text-xs text-slate-400 font-medium">
              Filtering by: <span className="text-primary font-bold">{activeFilter}</span>
              {activeFilter === "Price" && " (Under Rs. 2000)"}
              {activeFilter === "Review" && " (4.8+ Stars)"}
            </p>
          )}
        </div>
        
        <div className="flex flex-wrap items-center gap-2">
          {user?.role === 'seller' && onSellClick && (
            <button 
              onClick={onSellClick}
              className="bg-accent text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-accent/90 transition-all flex items-center gap-2 shadow-md shadow-accent/10 mr-2"
            >
              <Plus size={14} />
              List Product
            </button>
          )}
          <div className="flex items-center gap-2 mr-2 text-slate-400">
            <Filter size={14} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Filter</span>
          </div>
          {FILTERS.map((filter) => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all flex items-center gap-1
                ${filter === activeFilter 
                  ? "bg-primary text-white border-primary shadow-md shadow-primary/20" 
                  : "bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary"}`}
            >
              {filter}
            </button>
          ))}
          
          <div className="h-8 w-[1px] bg-slate-200 mx-2 hidden md:block" />
          
          <div className="relative">
            <button 
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-white text-slate-600 border border-slate-200 flex items-center gap-2 hover:border-primary hover:text-primary transition-all"
            >
              <ArrowUpDown size={14} />
              Sort by: {SORT_OPTIONS.find(o => o.value === sortBy)?.label}
              <ChevronDown size={14} className={`transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
            </button>

            {isSortOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in duration-200">
                {SORT_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value);
                      setIsSortOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors hover:bg-slate-50
                      ${sortBy === option.value ? "text-primary bg-primary/5" : "text-slate-600"}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {processedProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {processedProducts.map((product) => (
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
      ) : (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-100">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Filter size={24} className="text-slate-300" />
          </div>
          <h3 className="font-bold text-slate-900">No products found</h3>
          <p className="text-slate-400 text-sm mt-1">Try adjusting your filters or search query.</p>
          <button 
            onClick={() => {
              setActiveFilter("All Categories");
              setSortBy("default");
            }} 
            className="mt-6 bg-primary text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-primary/90 transition-all"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </section>
  );
}
