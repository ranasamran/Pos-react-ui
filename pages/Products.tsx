import React from 'react';
import { IMAGES } from '../constants';

const Products: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Product & Service Management</h1>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors">
          <span className="material-symbols-outlined">add</span>
          Add New Product
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
        <div className="md:col-span-6 relative">
           <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark">search</span>
           <input 
             type="text" 
             placeholder="Search by name or SKU..." 
             className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark focus:ring-primary focus:border-primary"
           />
        </div>
        <div className="md:col-span-6 flex gap-3">
           <div className="flex items-center gap-2 px-4 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark rounded-lg cursor-pointer hover:bg-background-light dark:hover:bg-background-dark">
              <span className="text-sm font-medium">Category</span>
              <span className="material-symbols-outlined text-lg">expand_more</span>
           </div>
           <div className="flex items-center gap-2 px-4 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark rounded-lg cursor-pointer hover:bg-background-light dark:hover:bg-background-dark">
              <span className="text-sm font-medium">Stock Status</span>
              <span className="material-symbols-outlined text-lg">expand_more</span>
           </div>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-semibold">
              <tr>
                <th className="p-4 w-12"><input type="checkbox" className="rounded border-gray-400 text-primary focus:ring-primary" /></th>
                <th className="p-4">Product</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4">Stock</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light dark:divide-border-dark">
               {[
                 { name: "Classic Wrist Watch", sku: "WW-1025", category: "Accessories", price: "$185.00", stock: 72, status: "In Stock", color: "green", img: IMAGES.product_watch },
                 { name: "Running Shoes", sku: "SH-3100", category: "Apparel", price: "$120.00", stock: 8, status: "Low Stock", color: "orange", img: IMAGES.product_shoe },
                 { name: "Wireless Headphones", sku: "AU-9842", category: "Electronics", price: "$89.99", stock: 0, status: "Out of Stock", color: "red", img: IMAGES.product_headphones },
                 { name: "Graphic Design Service", sku: "SRV-GD-01", category: "Services", price: "$50.00/hr", stock: "—", status: "Service", color: "blue", icon: "design_services" },
               ].map((row, i) => (
                 <tr key={i} className="hover:bg-background-light dark:hover:bg-background-dark/50 group">
                    <td className="p-4"><input type="checkbox" className="rounded border-gray-400 text-primary focus:ring-primary" /></td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        {row.img ? (
                           <img src={row.img} alt={row.name} className="size-10 rounded object-cover border border-border-light dark:border-border-dark" />
                        ) : (
                           <div className="size-10 rounded bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                             <span className="material-symbols-outlined">{row.icon}</span>
                           </div>
                        )}
                        <div>
                          <p className="font-medium">{row.name}</p>
                          <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">SKU: {row.sku}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-text-secondary-light dark:text-text-secondary-dark">{row.category}</td>
                    <td className="p-4">{row.price}</td>
                    <td className="p-4">{row.stock}</td>
                    <td className="p-4">
                       <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-${row.color}-100 dark:bg-${row.color}-900/30 text-${row.color}-800 dark:text-${row.color}-200`}>
                          <span className={`size-1.5 rounded-full bg-${row.color}-500`}></span>
                          {row.status}
                       </span>
                    </td>
                    <td className="p-4 text-right">
                       <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 hover:bg-primary/10 text-text-secondary-light dark:text-text-secondary-dark hover:text-primary rounded-lg transition-colors"><span className="material-symbols-outlined">edit</span></button>
                          <button className="p-2 hover:bg-danger/10 text-text-secondary-light dark:text-text-secondary-dark hover:text-danger rounded-lg transition-colors"><span className="material-symbols-outlined">delete</span></button>
                       </div>
                    </td>
                 </tr>
               ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="mt-auto p-4 border-t border-border-light dark:border-border-dark flex items-center justify-between">
           <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Showing <span className="font-semibold text-text-primary-light dark:text-text-primary-dark">1-4</span> of 16</span>
           <div className="flex gap-2">
              <button className="px-3 py-1.5 border border-border-light dark:border-border-dark rounded-lg text-sm font-medium hover:bg-background-light dark:hover:bg-background-dark">Previous</button>
              <button className="px-3 py-1.5 border border-border-light dark:border-border-dark rounded-lg text-sm font-medium hover:bg-background-light dark:hover:bg-background-dark">Next</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Products;