import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, User, LogIn, ShoppingBag, Heart, Trash2, Plus } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import HomeSections from './components/HomeSections';
import Contact from './components/Contact';
import Delivery from './components/Delivery';
import WhatsNew from './components/WhatsNew';
import HelpSupport from './components/HelpSupport';
import DealsOffers from './components/DealsOffers';
import AboutUs from './components/AboutUs';
import Orders from './components/Orders';
import ProductDetail from './components/ProductDetail';
import Logo from './components/Logo';
import { PRODUCTS } from './data/products';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<any[]>([]);
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSellModalOpen, setIsSellModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  // Auth Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');

  // Sell Form State
  const [sellForm, setSellForm] = useState({
    name: '',
    price: '',
    category: 'Vegetables',
    weight: '',
    image: ''
  });

  const handleSellSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to the backend
    alert(`Product "${sellForm.name}" listed successfully! Our team will verify it shortly.`);
    setIsSellModalOpen(false);
    setSellForm({ name: '', price: '', category: 'Vegetables', weight: '', image: '' });
  };

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      if (isLogin) {
        // Mock login with role
        const role = email.includes('seller') ? 'seller' : 'customer';
        setUser({ name: email.split('@')[0], email, role });
        setIsLoginModalOpen(false);
        setLoginError('');
        setEmail('');
        setPassword('');
      } else {
        // Mock signup
        if (name) {
          const role = email.includes('seller') ? 'seller' : 'customer';
          setUser({ name, email, role });
          setIsLoginModalOpen(false);
          setLoginError('');
          setEmail('');
          setPassword('');
          setName('');
        } else {
          setLoginError('Please enter your name');
        }
      }
    } else {
      setLoginError('Please enter both email and password');
    }
  };

  const handleAddToCart = (product: any) => {
    if (!user) {
      setIsLoginModalOpen(true);
      return;
    }
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // Optional: Show toast or open cart
    setIsCartOpen(true);
  };

  const handleBuyNow = (product: any) => {
    if (!user) {
      setIsLoginModalOpen(true);
      return;
    }
    handleAddToCart(product);
    setIsCartOpen(true);
    // In a real app, you might redirect to checkout here
  };

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setActiveTab('product-detail');
  };

  const handleAddToWishlist = (product: any) => {
    if (!user) {
      setIsLoginModalOpen(true);
      return;
    }
    setWishlist(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const removeFromWishlist = (id: number) => {
    setWishlist(prev => prev.filter(item => item.id !== id));
  };

  const renderContent = () => {
    if (activeTab === 'product-detail' && selectedProduct) {
      return (
        <ProductDetail 
          product={selectedProduct}
          allProducts={PRODUCTS}
          onBack={() => {
            setSelectedProduct(null);
            setActiveTab('home');
          }}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
          onAddToWishlist={handleAddToWishlist}
          onProductClick={handleProductClick}
          isWishlisted={wishlist.some(item => item.id === selectedProduct.id)}
        />
      );
    }

    switch (activeTab) {
      case 'home':
        return (
          <>
            {!searchQuery && <Hero onLearnMore={() => setActiveTab('help')} />}
            {searchQuery.trim() ? (
              <ProductGrid 
                onAddToCart={handleAddToCart} 
                onBuyNow={handleBuyNow}
                onAddToWishlist={handleAddToWishlist}
                onProductClick={handleProductClick}
                wishlist={wishlist}
                searchQuery={searchQuery.trim()}
                user={user}
                onSellClick={() => setIsSellModalOpen(true)}
              />
            ) : (
              <HomeSections 
                onAddToCart={handleAddToCart} 
                onBuyNow={handleBuyNow}
                onAddToWishlist={handleAddToWishlist}
                onProductClick={handleProductClick}
                wishlist={wishlist}
                onViewAll={(category) => {
                  setSelectedCategory(category);
                  setActiveTab('shop');
                }}
              />
            )}
          </>
        );
      case 'shop':
        return (
          <ProductGrid 
            onAddToCart={handleAddToCart} 
            onBuyNow={handleBuyNow}
            onAddToWishlist={handleAddToWishlist}
            onProductClick={handleProductClick}
            wishlist={wishlist}
            initialFilter={selectedCategory}
            user={user}
            onSellClick={() => setIsSellModalOpen(true)}
          />
        );
      case 'whats-new': return <WhatsNew />;
      case 'delivery': return <Delivery />;
      case 'deals': return <DealsOffers />;
      case 'about': return <AboutUs />;
      case 'help': return <HelpSupport />;
      case 'contact': return <Contact />;
      case 'orders': return <Orders />;
      default: return <Hero onLearnMore={() => setActiveTab('help')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        wishlistCount={wishlist.length}
        user={user}
        onLoginClick={() => setIsLoginModalOpen(true)}
        onLogout={() => setUser(null)}
        onTabChange={setActiveTab}
        onWishlistClick={() => setIsWishlistOpen(true)}
        onCartClick={() => setIsCartOpen(true)}
        onSellClick={() => setIsSellModalOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={(query) => {
          setSearchQuery(query);
          if (query && activeTab !== 'home') {
            setActiveTab('home');
          }
        }}
      />
      
      <main className="flex-grow bg-surface pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Logo className="w-12 h-12" />
              <span className="text-2xl font-bold tracking-tight text-primary">Krishikarya</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering local farmers of Kanchanpur, Nepal. Bringing the freshest harvest directly from our fields to your kitchen.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><button onClick={() => setActiveTab('about')} className="hover:text-primary transition-colors">About Krishikarya</button></li>
              <li><button onClick={() => setActiveTab('contact')} className="hover:text-primary transition-colors">Contact Us</button></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Farmers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Support</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><button onClick={() => setActiveTab('help')} className="hover:text-primary transition-colors">Help Center</button></li>
              <li><button onClick={() => setActiveTab('delivery')} className="hover:text-primary transition-colors">Delivery Areas</button></li>
              <li><a href="#" className="hover:text-primary transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Contact Info</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex gap-3">
                <span className="font-bold text-slate-900">Address:</span>
                <span>Mahendranagar, Kanchanpur, Nepal</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-slate-900">Phone:</span>
                <span>+977-98XXXXXXXX</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-slate-900">Email:</span>
                <span>info@krishikarya.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
          <p>© 2026 Krishikarya Nepal. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Terms of Service</a>
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Cookie Settings</a>
          </div>
        </div>
      </footer>

      {/* Sell Modal */}
      <AnimatePresence>
        {isSellModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSellModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
            >
              <button 
                onClick={() => setIsSellModalOpen(false)}
                className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 transition-colors"
              >
                <X size={18} />
              </button>
              <div className="p-8 md:p-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">List Your Produce</h3>
                  <p className="text-slate-500 text-sm mt-2">
                    Fill in the details to list your fresh harvest on Krishikarya.
                  </p>
                </div>

                <form onSubmit={handleSellSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase">Product Name</label>
                    <input 
                      type="text" 
                      required
                      value={sellForm.name}
                      onChange={(e) => setSellForm({...sellForm, name: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none" 
                      placeholder="e.g. Fresh Red Apples" 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase">Price (Rs.)</label>
                      <input 
                        type="number" 
                        required
                        value={sellForm.price}
                        onChange={(e) => setSellForm({...sellForm, price: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none" 
                        placeholder="100" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase">Category</label>
                      <select 
                        value={sellForm.category}
                        onChange={(e) => setSellForm({...sellForm, category: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none appearance-none"
                      >
                        <option>Vegetables</option>
                        <option>Fruits</option>
                        <option>Dairy</option>
                        <option>Spices & Home-made</option>
                        <option>Healthy Foods</option>
                        <option>Leafy Veges</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase">Weight/Unit</label>
                    <input 
                      type="text" 
                      required
                      value={sellForm.weight}
                      onChange={(e) => setSellForm({...sellForm, weight: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none" 
                      placeholder="e.g. 1kg or 1 dozen" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase">Image URL (Optional)</label>
                    <input 
                      type="url" 
                      value={sellForm.image}
                      onChange={(e) => setSellForm({...sellForm, image: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none" 
                      placeholder="https://example.com/image.jpg" 
                    />
                  </div>
                  <button className="w-full bg-accent text-white py-4 rounded-xl font-bold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 active:scale-95">
                    List Product Now
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Login Modal */}
      <AnimatePresence>
        {isLoginModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLoginModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
            >
              <button 
                onClick={() => setIsLoginModalOpen(false)}
                className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 transition-colors"
              >
                <X size={18} />
              </button>
              <div className="p-8 md:p-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {isLogin ? <LogIn size={32} /> : <User size={32} />}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{isLogin ? 'Welcome Back' : 'Create Account'}</h3>
                  <p className="text-slate-500 text-sm mt-2">
                    {isLogin ? 'Login to Krishikarya to start selling or shopping' : 'Join Krishikarya to support local farmers'}
                  </p>
                  <div className="mt-4 flex justify-center gap-2">
                    <span className="text-[10px] bg-slate-100 px-2 py-1 rounded-md text-slate-500 font-bold uppercase">Tip: Use 'seller' in email to login as seller</span>
                  </div>
                </div>

                <form onSubmit={handleAuth} className="space-y-4">
                  {!isLogin && (
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase">Full Name</label>
                      <div className="relative">
                        <input 
                          type="text" 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 pl-11 text-sm focus:ring-2 focus:ring-primary/20 outline-none" 
                          placeholder="John Doe" 
                        />
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                      </div>
                    </div>
                  )}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase">Email Address</label>
                    <div className="relative">
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 pl-11 text-sm focus:ring-2 focus:ring-primary/20 outline-none" 
                        placeholder="your@email.com" 
                      />
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase">Password</label>
                    <div className="relative">
                      <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 pl-11 text-sm focus:ring-2 focus:ring-primary/20 outline-none" 
                        placeholder="••••••••" 
                      />
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    </div>
                  </div>
                  {loginError && <p className="text-red-500 text-xs font-medium">{loginError}</p>}
                  <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-95">
                    {isLogin ? 'Login Now' : 'Sign Up Now'}
                  </button>
                </form>

                <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                  <p className="text-sm text-slate-500">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button 
                      onClick={() => { setIsLogin(!isLogin); setLoginError(''); }}
                      className="ml-2 text-primary font-bold hover:underline"
                    >
                      {isLogin ? 'Sign Up' : 'Login'}
                    </button>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Cart Drawer Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-[200]">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="text-primary" size={24} />
                  <h3 className="text-xl font-bold text-slate-900">Your Cart</h3>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                      <ShoppingBag size={40} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Your cart is empty</h4>
                      <p className="text-sm text-slate-400">Add some fresh produce from Kanchanpur!</p>
                    </div>
                    <button 
                      onClick={() => { setIsCartOpen(false); setActiveTab('home'); }}
                      className="bg-primary text-white px-8 py-3 rounded-xl font-bold"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-20 bg-slate-50 rounded-xl flex-shrink-0 p-2">
                        <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-slate-900 text-sm line-clamp-1">{item.name}</h4>
                        <p className="text-xs text-slate-400 mb-2">{item.weight} • Qty: {item.quantity}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-primary">Rs. {item.price * item.quantity}</span>
                          <button onClick={() => removeFromCart(item.id)} className="text-slate-300 hover:text-red-500 transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-slate-100 space-y-4">
                  <div className="flex items-center justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">Rs. {cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)}</span>
                  </div>
                  <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 active:scale-95">
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Wishlist Drawer Overlay */}
      <AnimatePresence>
        {isWishlistOpen && (
          <div className="fixed inset-0 z-[200]">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsWishlistOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Heart className="text-red-500" size={24} />
                  <h3 className="text-xl font-bold text-slate-900">Your Wishlist</h3>
                </div>
                <button onClick={() => setIsWishlistOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6 space-y-6">
                {wishlist.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                      <Heart size={40} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Your wishlist is empty</h4>
                      <p className="text-sm text-slate-400">Save items you love for later!</p>
                    </div>
                  </div>
                ) : (
                  wishlist.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-20 bg-slate-50 rounded-xl flex-shrink-0 p-2">
                        <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-slate-900 text-sm line-clamp-1">{item.name}</h4>
                        <p className="text-xs text-slate-400 mb-2">{item.weight}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-primary">Rs. {item.price}</span>
                          <div className="flex gap-2">
                            <button 
                              onClick={() => { handleAddToCart(item); removeFromWishlist(item.id); }}
                              className="text-primary hover:text-primary/80"
                            >
                              <Plus size={18} />
                            </button>
                            <button onClick={() => removeFromWishlist(item.id)} className="text-slate-300 hover:text-red-500 transition-colors">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
