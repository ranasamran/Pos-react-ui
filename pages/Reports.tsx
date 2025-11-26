import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, Cell } from 'recharts';

const weeklyData = [
  { name: 'Mon', value: 3000 },
  { name: 'Tue', value: 1500 },
  { name: 'Wed', value: 3200 },
  { name: 'Thu', value: 3200 },
  { name: 'Fri', value: 4800 },
  { name: 'Sat', value: 2500 },
  { name: 'Sun', value: 1800 },
];

const Reports: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-black text-text-primary-light dark:text-text-primary-dark">Reports & Analytics</h1>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors">
          <span className="material-symbols-outlined">download</span>
          Export Report
        </button>
      </div>

      {/* Tabs & Filters */}
      <div className="flex flex-col gap-4 mb-6">
         <div className="flex flex-wrap gap-2">
            {['Sales Report', 'Installment Report', 'Inventory Report', 'Customer Insights'].map((tab, i) => (
               <button key={tab} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${i === 0 ? 'bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark' : 'text-text-secondary-light dark:text-text-secondary-dark hover:bg-surface-light dark:hover:bg-surface-dark'}`}>
                  {tab}
               </button>
            ))}
         </div>
         <div className="flex gap-4 items-center border-y border-border-light dark:border-border-dark py-3">
             <button className="bg-primary/10 text-primary px-4 py-1.5 rounded-lg text-sm font-medium">This Month</button>
             <button className="text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark px-4 py-1.5 text-sm font-medium">Last 7 Days</button>
             <button className="text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark px-4 py-1.5 text-sm font-medium">Today</button>
             <button className="flex items-center gap-2 text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark px-4 py-1.5 text-sm font-medium">
                Custom Range
                <span className="material-symbols-outlined text-sm">calendar_today</span>
             </button>
         </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total Revenue", val: "$82,450", change: "+15.2%", trend: "up" },
          { label: "Total Sales", val: "4,203", change: "+8.1%", trend: "up" },
          { label: "New Customers", val: "128", change: "+12%", trend: "up" },
          { label: "Best Seller", val: "Smart Watch", change: "-1.5%", trend: "down" },
        ].map((kpi, i) => (
          <div key={i} className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl p-6 shadow-sm">
             <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium mb-2">{kpi.label}</p>
             <h3 className="text-3xl font-bold mb-1 truncate">{kpi.val}</h3>
             <div className={`flex items-center text-sm font-medium ${kpi.trend === 'up' ? 'text-success' : 'text-danger'}`}>
                <span className="material-symbols-outlined text-lg mr-1">{kpi.trend === 'up' ? 'arrow_upward' : 'arrow_downward'}</span>
                {kpi.change}
             </div>
          </div>
        ))}
      </div>

      {/* Main Chart */}
      <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl p-6 mb-8 shadow-sm">
         <div className="flex justify-between items-start mb-6">
            <div>
               <h3 className="text-lg font-bold">Monthly Sales Trend</h3>
               <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Revenue generated over the last 7 days.</p>
            </div>
            <div className="text-right">
               <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Last 7 Days</p>
               <p className="text-success font-bold">+12.5%</p>
            </div>
         </div>
         <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
               <BarChart data={weeklyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }}
                    dy={10}
                  />
                  <Tooltip 
                     cursor={{fill: 'transparent'}}
                     contentStyle={{ backgroundColor: '#1A2836', borderColor: '#2C3A47', borderRadius: '8px', color: '#fff' }}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                     {weeklyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.value === 4800 ? '#4A90E2' : '#4A90E240'} />
                     ))}
                  </Bar>
               </BarChart>
            </ResponsiveContainer>
         </div>
      </div>

      {/* Recent Transactions Table */}
      <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden">
         <div className="p-6 border-b border-border-light dark:border-border-dark">
            <h3 className="text-lg font-bold">Recent Transactions</h3>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Detailed list of sales for the selected period.</p>
         </div>
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead className="bg-background-light dark:bg-background-dark text-text-secondary-light dark:text-text-secondary-dark font-semibold text-sm">
                  <tr>
                     <th className="px-6 py-3">Transaction ID</th>
                     <th className="px-6 py-3">Customer</th>
                     <th className="px-6 py-3">Date</th>
                     <th className="px-6 py-3">Amount</th>
                     <th className="px-6 py-3">Status</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-border-light dark:divide-border-dark">
                  {[
                     { id: "#12034", customer: "John Doe", date: "2023-10-26", amt: "$250.00", status: "Paid", color: "success" },
                     { id: "#12033", customer: "Jane Smith", date: "2023-10-26", amt: "$150.00", status: "Paid", color: "success" },
                     { id: "#12032", customer: "Mike Johnson", date: "2023-10-25", amt: "$45.50", status: "Pending", color: "warning" },
                     { id: "#12031", customer: "Emily White", date: "2023-10-25", amt: "$320.00", status: "Overdue", color: "danger" },
                  ].map((row, i) => (
                     <tr key={i} className="hover:bg-background-light dark:hover:bg-background-dark/50">
                        <td className="px-6 py-4 font-medium">{row.id}</td>
                        <td className="px-6 py-4 text-text-secondary-light dark:text-text-secondary-dark">{row.customer}</td>
                        <td className="px-6 py-4 text-text-secondary-light dark:text-text-secondary-dark">{row.date}</td>
                        <td className="px-6 py-4 font-medium">{row.amt}</td>
                        <td className="px-6 py-4">
                           <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-${row.color}/10 text-${row.color}`}>
                              {row.status}
                           </span>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
};

export default Reports;