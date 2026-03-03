import React from 'react';
import { motion } from 'motion/react';
import { Package, Calendar, ChevronRight, CheckCircle2, Clock, Truck, AlertCircle } from 'lucide-react';

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  total: number;
  status: 'Delivered' | 'Processing' | 'Shipped' | 'Cancelled';
  deliveryEstimate?: string;
}

const MOCK_ORDERS: Order[] = [
  {
    id: "ORD-2026-8842",
    date: "Feb 28, 2026",
    total: 1250,
    status: "Delivered",
    items: [
      { id: 1, name: "Fresh Red Tomatoes (Local Harvest)", price: 60, quantity: 2, image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=400" },
      { id: 5, name: "Buffalo Ghee (Pure Local)", price: 950, quantity: 1, image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&q=80&w=400" },
      { id: 3, name: "Fresh Organic Spinach", price: 40, quantity: 3, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  {
    id: "ORD-2026-9120",
    date: "Mar 01, 2026",
    total: 480,
    status: "Shipped",
    deliveryEstimate: "Tomorrow, Mar 03",
    items: [
      { id: 2, name: "Fresh Organic Green Peas", price: 120, quantity: 4, image: "https://images.unsplash.com/photo-1515471204579-2811e1c98c24?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  {
    id: "ORD-2026-7731",
    date: "Feb 15, 2026",
    total: 2100,
    status: "Delivered",
    items: [
      { id: 6, name: "Organic Wild Honey", price: 1200, quantity: 1, image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=400" },
      { id: 8, name: "Local Curd (Dahi)", price: 150, quantity: 6, image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=80&w=400" }
    ]
  }
];

export default function Orders() {
  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'Delivered': return <CheckCircle2 className="text-emerald-500" size={18} />;
      case 'Processing': return <Clock className="text-amber-500" size={18} />;
      case 'Shipped': return <Truck className="text-blue-500" size={18} />;
      case 'Cancelled': return <AlertCircle className="text-red-500" size={18} />;
    }
  };

  const getStatusStyles = (status: Order['status']) => {
    switch (status) {
      case 'Delivered': return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case 'Processing': return 'bg-amber-50 text-amber-700 border-amber-100';
      case 'Shipped': return 'bg-blue-50 text-blue-700 border-blue-100';
      case 'Cancelled': return 'bg-red-50 text-red-700 border-red-100';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
          <Package size={24} />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Your Orders</h1>
          <p className="text-slate-500">Track and manage your recent purchases from Krishikarya</p>
        </div>
      </div>

      <div className="space-y-6">
        {MOCK_ORDERS.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Order Header */}
            <div className="p-6 border-b border-slate-50 bg-slate-50/30 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Order Placed</p>
                  <p className="text-sm font-bold text-slate-700">{order.date}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Total</p>
                  <p className="text-sm font-bold text-slate-700">Rs. {order.total}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Order ID</p>
                  <p className="text-sm font-medium text-slate-500">#{order.id}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="text-xs font-bold text-primary hover:underline">View Invoice</button>
                <div className="h-4 w-[1px] bg-slate-200" />
                <button className="text-xs font-bold text-primary hover:underline">Order Details</button>
              </div>
            </div>

            {/* Order Content */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className="flex-grow space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    {getStatusIcon(order.status)}
                    <span className={`text-sm font-bold px-3 py-1 rounded-full border ${getStatusStyles(order.status)}`}>
                      {order.status}
                    </span>
                    {order.deliveryEstimate && (
                      <span className="text-sm text-slate-500 ml-2">
                        Estimated delivery: <span className="font-bold text-slate-700">{order.deliveryEstimate}</span>
                      </span>
                    )}
                  </div>

                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex gap-4 group cursor-pointer">
                        <div className="w-16 h-16 bg-slate-50 rounded-xl p-2 flex-shrink-0 border border-slate-100 group-hover:border-primary/20 transition-colors">
                          <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-primary transition-colors">{item.name}</h4>
                          <p className="text-xs text-slate-400 mt-1">Quantity: {item.quantity} • Rs. {item.price} each</p>
                          <div className="mt-2 flex gap-3">
                            <button className="text-[10px] font-bold text-primary bg-primary/5 px-2 py-1 rounded-md hover:bg-primary/10 transition-colors">Buy it again</button>
                            <button className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md hover:bg-slate-200 transition-colors">View item</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:w-48 flex flex-col gap-3">
                  <button className="w-full py-2.5 bg-primary text-white rounded-xl text-xs font-bold shadow-sm hover:bg-primary/90 transition-all">
                    Track Package
                  </button>
                  <button className="w-full py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-50 transition-all">
                    Return Items
                  </button>
                  <button className="w-full py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-50 transition-all">
                    Write a Review
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State (Hidden for now since we have mock data) */}
      {MOCK_ORDERS.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
            <Package size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900">No orders yet</h3>
          <p className="text-slate-500 mt-2">When you buy fresh produce, your orders will appear here.</p>
          <button className="mt-8 bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary/20">
            Start Shopping
          </button>
        </div>
      )}
    </div>
  );
}
