import React from 'react';

const Customers: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden p-8">
       {/* Header */}
       <div className="flex justify-between items-start mb-6">
         <div>
            <h1 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark">Customer Management</h1>
            <p className="text-text-secondary-light dark:text-text-secondary-dark mt-1">View, add, and edit customer information.</p>
         </div>
         <div className="flex items-center gap-4">
            <div className="relative w-80 hidden md:block">
               <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
               <input 
                  type="text" 
                  placeholder="Search by name, ID, or phone" 
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark focus:ring-primary focus:border-primary"
               />
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors">
               <span className="material-symbols-outlined">add</span>
               Add Customer
            </button>
         </div>
       </div>

       <div className="flex gap-8 flex-1 overflow-hidden">
          {/* Filters Sidebar */}
          <div className="w-72 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl p-5 h-fit shrink-0 hidden lg:block">
             <h3 className="text-lg font-bold mb-4">Filters</h3>
             <div className="space-y-4">
                <div>
                   <label className="block text-sm font-medium mb-1.5">Installment Status</label>
                   <select className="w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-sm">
                      <option>All</option>
                      <option>Active</option>
                      <option>Overdue</option>
                   </select>
                </div>
                <div>
                   <label className="block text-sm font-medium mb-1.5">Last Purchase Date</label>
                   <input type="date" className="w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-sm" />
                </div>
                <div>
                   <label className="block text-sm font-medium mb-2">Customer Tags</label>
                   <div className="space-y-2">
                      {['VIP', 'New Customer', 'Regular'].map(tag => (
                         <label key={tag} className="flex items-center gap-2">
                            <input type="checkbox" className="rounded border-gray-400 text-primary focus:ring-primary" />
                            <span className="text-sm">{tag}</span>
                         </label>
                      ))}
                   </div>
                </div>
                <button className="w-full py-2 bg-primary/10 text-primary font-bold text-sm rounded-lg hover:bg-primary/20 mt-2">
                   Apply Filters
                </button>
             </div>
          </div>

          {/* Table */}
          <div className="flex-1 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden flex flex-col">
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                   <thead className="bg-background-light dark:bg-background-dark text-xs uppercase text-text-secondary-light dark:text-text-secondary-dark font-medium">
                      <tr>
                         <th className="px-6 py-3">Customer ID</th>
                         <th className="px-6 py-3">Full Name</th>
                         <th className="px-6 py-3">Phone Number</th>
                         <th className="px-6 py-3">Last Purchase</th>
                         <th className="px-6 py-3">Installment Status</th>
                         <th className="px-6 py-3 text-right">Actions</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-border-light dark:divide-border-dark">
                      {[
                         { id: "#C00123", name: "Jane Doe", phone: "(555) 123-4567", last: "2023-10-26", status: "Completed", color: "green" },
                         { id: "#C00124", name: "John Smith", phone: "(555) 987-6543", last: "2023-11-15", status: "Active", color: "secondary" },
                         { id: "#C00125", name: "Emily Johnson", phone: "(555) 234-5678", last: "2023-09-01", status: "Overdue", color: "danger" },
                         { id: "#C00126", name: "Michael Brown", phone: "(555) 876-5432", last: "2023-11-20", status: "Pending", color: "warning" },
                      ].map((row, i) => (
                         <tr key={i} className="hover:bg-background-light dark:hover:bg-background-dark/50">
                            <td className="px-6 py-4 text-sm font-mono text-text-secondary-light dark:text-text-secondary-dark">{row.id}</td>
                            <td className="px-6 py-4 text-sm font-medium">{row.name}</td>
                            <td className="px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">{row.phone}</td>
                            <td className="px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">{row.last}</td>
                            <td className="px-6 py-4">
                               <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${row.color}/10 text-${row.color}`}>
                                  {row.status}
                               </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                               <a href="#" className="text-primary hover:underline text-sm font-medium">View/Edit</a>
                            </td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>
             <div className="mt-auto p-4 border-t border-border-light dark:border-border-dark flex justify-between items-center">
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Showing 1 to 4 of 25 results</p>
                <div className="flex gap-2">
                   <button className="px-3 py-1.5 border border-border-light dark:border-border-dark rounded-lg text-sm hover:bg-background-light">Previous</button>
                   <button className="px-3 py-1.5 border border-border-light dark:border-border-dark rounded-lg text-sm hover:bg-background-light">Next</button>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default Customers;