import React, { useState } from 'react';
import { IMAGES } from '../constants';
import { Product, CartItem } from '../types';

const mockProducts: Product[] = [
  { id: '1', name: 'Classic Chronograph', sku: 'ACC-W-001', price: 199.99, stock: 12, category: 'Accessories', status: 'In Stock', image: IMAGES.product_watch },
  { id: '2', name: 'UltraSlim Laptop 14"', sku: 'ELE-L-015', price: 1250.00, stock: 5, category: 'Electronics', status: 'In Stock', image: IMAGES.product_laptop },
  { id: '3', name: 'Basic Cotton Tee', sku: 'APP-T-034', price: 24.50, stock: 40, category: 'Apparel', status: 'In Stock', image: IMAGES.product_tshirt },
  { id: '4', name: 'Smartwatch Series 8', sku: 'ELE-W-002', price: 499.00, stock: 8, category: 'Electronics', status: 'In Stock', image: IMAGES.product_smartwatch8 },
  { id: '5', name: 'Running Shoes', sku: 'APP-S-101', price: 120.00, stock: 2, category: 'Apparel', status: 'Low Stock', image: IMAGES.product_shoe },
  { id: '6', name: 'Noise Cancel Headphones', sku: 'ELE-A-005', price: 299.00, stock: 15, category: 'Electronics', status: 'In Stock', image: IMAGES.product_headphones },
];

const POS: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All Categories');

  const filteredProducts = mockProducts.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All Categories' || p.category === category;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* Product Selection Area */}
      <div className="flex-1 flex flex-col p-6 overflow-hidden">
        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6 shrink-0">
          <div className="relative w-full lg:w-1/3">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">category</span>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark focus:ring-primary focus:border-primary"
            >
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Apparel</option>
              <option>Accessories</option>
            </select>
          </div>
          <div className="relative w-full lg:flex-1">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
            <input 
              type="text" 
              placeholder="Search by product name or SKU..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark focus:ring-primary focus:border-primary"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1 overflow-y-auto pr-2">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden flex flex-col group hover:shadow-lg transition-shadow duration-200">
                <div 
                  className="aspect-square w-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
                <div className="p-3 flex-1 flex flex-col">
                  <h4 className="font-semibold text-sm truncate">{product.name}</h4>
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">{product.sku}</p>
                  <p className="font-bold text-base mt-auto pt-2 text-primary">${product.price.toFixed(2)}</p>
                </div>
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full py-2.5 bg-primary/10 hover:bg-primary text-primary hover:text-white transition-colors duration-200 text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      <div className="w-96 bg-surface-light dark:bg-surface-dark border-l border-border-light dark:border-border-dark flex flex-col shadow-xl z-20">
        <div className="p-5 border-b border-border-light dark:border-border-dark">
          <h3 className="text-lg font-bold">Current Sale</h3>
        </div>
        
        {/* Customer Search */}
        <div className="p-4 border-b border-border-light dark:border-border-dark">
           <div className="relative">
             <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">person</span>
             <input type="text" placeholder="Search or Add Customer" className="w-full pl-10 pr-4 py-2 rounded-lg bg-background-light dark:bg-background-dark border-none text-sm focus:ring-1 focus:ring-primary" />
           </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-text-secondary-light dark:text-text-secondary-dark opacity-50">
               <span className="material-symbols-outlined text-4xl mb-2">remove_shopping_cart</span>
               <p>Cart is empty</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex items-center gap-3 bg-background-light dark:bg-background-dark p-2 rounded-lg">
                <div className="w-12 h-12 rounded bg-cover bg-center shrink-0" style={{ backgroundImage: `url('${item.image}')` }} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{item.name}</p>
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <p className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  <div className="flex items-center gap-2 bg-surface-light dark:bg-surface-dark rounded-full px-1 py-0.5 border border-border-light dark:border-border-dark">
                    <button onClick={() => updateQuantity(item.id, -1)} className="size-5 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-xs">-</button>
                    <span className="text-xs font-medium w-3 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="size-5 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-xs">+</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Totals & Payment */}
        <div className="p-5 border-t border-border-light dark:border-border-dark bg-background-light/50 dark:bg-background-dark/50">
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between text-text-secondary-light dark:text-text-secondary-dark">
              <span>Subtotal</span>
              <span className="text-text-primary-light dark:text-text-primary-dark font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-text-secondary-light dark:text-text-secondary-dark">
              <span>Tax (5%)</span>
              <span className="text-text-primary-light dark:text-text-primary-dark font-medium">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-text-secondary-light dark:text-text-secondary-dark">
              <span>Discount</span>
              <span className="text-danger font-medium">-$0.00</span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t border-dashed border-border-light dark:border-border-dark pt-3 mt-2">
              <span>Total</span>
              <span className="text-primary">${total.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase text-text-secondary-light dark:text-text-secondary-dark mb-2">Payment Method</p>
            <div className="grid grid-cols-3 gap-2">
               {['Installment', 'Card', 'Cash'].map(method => (
                 <button key={method} className={`text-center py-2 text-xs font-semibold rounded border transition-colors ${method === 'Installment' ? 'border-primary bg-primary/10 text-primary' : 'border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                   {method}
                 </button>
               ))}
            </div>
          </div>
          
          <div className="mb-4">
             <label className="block text-xs font-semibold uppercase text-text-secondary-light dark:text-text-secondary-dark mb-1">Installment Plan</label>
             <select className="w-full text-sm rounded-lg border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark focus:ring-primary focus:border-primary">
               <option>3 Months - ${(total / 3).toFixed(2)}/mo</option>
               <option>6 Months - ${(total / 6).toFixed(2)}/mo</option>
               <option>12 Months - ${(total / 12).toFixed(2)}/mo</option>
             </select>
          </div>

          <button className="w-full py-3 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-lg shadow-lg shadow-secondary/20 transition-all active:scale-[0.98]">
            Complete Sale
          </button>
        </div>
      </div>
    </div>
  );
};

export default POS;