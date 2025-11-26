import React from 'react';
import { IMAGES } from '../constants';

const Installments: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden p-8">
       {/* Header */}
       <div className="flex justify-between items-center mb-6">
          <div>
             <h1 className="text-3xl font-black text-text-primary-light dark:text-text-primary-dark">Installment Plans</h1>
             <p className="text-text-secondary-light dark:text-text-secondary-dark mt-1">Manage, track, and record payments.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-background-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-primary-light dark:text-text-primary-dark rounded-lg font-bold text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
             <span className="material-symbols-outlined">add</span>
             New Installment Plan
          </button>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1 overflow-hidden">
          {/* List Section */}
          <div className="lg:col-span-2 flex flex-col overflow-hidden">
             {/* Controls */}
             <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="relative flex-grow">
                   <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                   <input 
                     type="text" 
                     placeholder="Search by customer name..." 
                     className="w-full pl-10 pr-4 py-2.5 rounded-lg border-none bg-background-light dark:bg-surface-dark focus:ring-1 focus:ring-primary"
                   />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-1">
                   <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium flex items-center gap-2 whitespace-nowrap">
                      All <span className="bg-white/50 px-1.5 py-0.5 rounded text-xs">12</span>
                   </button>
                   <button className="px-4 py-2 bg-background-light dark:bg-surface-dark text-text-secondary-light dark:text-text-secondary-dark rounded-lg text-sm font-medium whitespace-nowrap">Active</button>
                   <button className="px-4 py-2 bg-background-light dark:bg-surface-dark text-text-secondary-light dark:text-text-secondary-dark rounded-lg text-sm font-medium whitespace-nowrap">Paid Off</button>
                </div>
             </div>
             
             {/* Table */}
             <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-y-auto flex-1">
                <table className="w-full text-left">
                   <thead className="bg-background-light dark:bg-background-dark sticky top-0 z-10 text-xs uppercase text-text-secondary-light dark:text-text-secondary-dark font-medium">
                      <tr>
                         <th className="p-4 w-12"><input type="checkbox" className="rounded border-gray-400 text-primary focus:ring-primary" /></th>
                         <th className="p-4">Customer</th>
                         <th className="p-4">Status</th>
                         <th className="p-4">Balance</th>
                         <th className="p-4">Next Due Date</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-border-light dark:divide-border-dark text-sm">
                      {[
                         { name: "Eleanor Pena", plan: "PLAN-001", status: "Active", statusColor: "primary", balance: "$600.00", total: "$1,200.00", due: "Aug 15, 2024", active: true },
                         { name: "Cody Fisher", plan: "PLAN-002", status: "Overdue", statusColor: "danger", balance: "$250.50", total: "$850.50", due: "Jul 20, 2024", active: false },
                         { name: "Brooklyn Simmons", plan: "PLAN-003", status: "Paid Off", statusColor: "success", balance: "$0.00", total: "$2,500.00", due: "N/A", active: false },
                         { name: "Cameron Williamson", plan: "PLAN-004", status: "Active", statusColor: "primary", balance: "$400.00", total: "$500.00", due: "Aug 1, 2024", active: false },
                      ].map((row, i) => (
                         <tr key={i} className={`cursor-pointer transition-colors ${row.active ? 'bg-primary/5 dark:bg-primary/10' : 'hover:bg-background-light dark:hover:bg-background-dark/50'}`}>
                            <td className="p-4"><input type="checkbox" className="rounded border-gray-400 text-primary focus:ring-primary" checked={row.active} readOnly /></td>
                            <td className="p-4">
                               <p className="font-medium text-text-primary-light dark:text-text-primary-dark">{row.name}</p>
                               <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">{row.plan}</p>
                            </td>
                            <td className="p-4">
                               <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${row.statusColor}/10 text-${row.statusColor}`}>
                                  {row.status}
                               </span>
                            </td>
                            <td className="p-4">
                               <p className="font-medium">{row.balance}</p>
                               <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">of {row.total}</p>
                            </td>
                            <td className="p-4 text-text-secondary-light dark:text-text-secondary-dark">{row.due}</td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>

          {/* Details Pane */}
          <div className="lg:col-span-1">
             <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl p-6 sticky top-0">
                <div className="flex flex-col gap-6">
                   <div className="flex items-center gap-4">
                      <img src={IMAGES.avatar_customer_1} alt="Customer" className="size-14 rounded-full object-cover" />
                      <div>
                         <h2 className="text-lg font-bold">Eleanor Pena</h2>
                         <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Plan ID: PLAN-001</p>
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-3">
                      <button className="flex items-center justify-center gap-2 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-sm">
                         <span className="material-symbols-outlined text-lg">add_card</span>
                         Record Payment
                      </button>
                      <button className="flex items-center justify-center gap-2 py-2.5 bg-background-light dark:bg-background-dark hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg font-bold text-sm">
                         <span className="material-symbols-outlined text-lg">send</span>
                         Send Reminder
                      </button>
                   </div>

                   <hr className="border-border-light dark:border-border-dark" />

                   <div>
                      <div className="flex justify-between items-baseline mb-2">
                         <span className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">Progress</span>
                         <span className="text-sm font-bold">$600 / $1,200</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                         <div className="bg-primary h-2.5 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                   </div>

                   <div>
                      <h3 className="text-base font-bold mb-3">Payment Schedule</h3>
                      <div className="space-y-3">
                         <div className="flex justify-between items-center p-3 bg-background-light dark:bg-background-dark/50 rounded-lg">
                            <div className="flex items-center gap-3">
                               <div className="size-8 rounded-full bg-success/10 flex items-center justify-center text-success">
                                  <span className="material-symbols-outlined text-lg">check</span>
                               </div>
                               <div>
                                  <p className="font-medium text-sm">$200.00</p>
                                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Paid on May 15, 2024</p>
                               </div>
                            </div>
                            <span className="text-xs font-medium text-success">Paid</span>
                         </div>
                         <div className="flex justify-between items-center p-3 bg-background-light dark:bg-background-dark/50 rounded-lg">
                            <div className="flex items-center gap-3">
                               <div className="size-8 rounded-full bg-warning/10 flex items-center justify-center text-warning">
                                  <span className="material-symbols-outlined text-lg">hourglass_top</span>
                               </div>
                               <div>
                                  <p className="font-medium text-sm">$200.00</p>
                                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Due on Aug 15, 2024</p>
                               </div>
                            </div>
                            <span className="text-xs font-medium text-warning">Upcoming</span>
                         </div>
                         <div className="flex justify-between items-center p-3 bg-background-light dark:bg-background-dark/50 rounded-lg">
                            <div className="flex items-center gap-3">
                               <div className="size-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">
                                  <span className="material-symbols-outlined text-lg">schedule</span>
                               </div>
                               <div>
                                  <p className="font-medium text-sm">$200.00</p>
                                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Due on Sep 15, 2024</p>
                               </div>
                            </div>
                            <span className="text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark">Scheduled</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default Installments;