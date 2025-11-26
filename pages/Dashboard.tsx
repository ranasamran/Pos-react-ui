import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Tooltip, Cell } from 'recharts';
import { IMAGES } from '../constants';

const salesData = [
  { name: 'Mon', value: 20 },
  { name: 'Tue', value: 60 },
  { name: 'Wed', value: 40 },
  { name: 'Thu', value: 80 },
  { name: 'Fri', value: 55 },
  { name: 'Sat', value: 70 },
  { name: 'Sun', value: 30 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      {/* Header */}
      <header className="shrink-0 flex items-center justify-between px-8 py-5 border-b border-border-light dark:border-border-dark bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm sticky top-0 z-10">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark text-lg">search</span>
            <input 
              type="search" 
              placeholder="Search..." 
              className="pl-10 pr-4 py-2 rounded-lg bg-background-light dark:bg-background-dark border-none text-sm focus:ring-2 focus:ring-primary w-64"
            />
          </div>
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-text-secondary-light dark:text-text-secondary-dark relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-danger rounded-full border-2 border-surface-light dark:border-surface-dark"></span>
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-border-light dark:border-border-dark">
            <div className="text-right hidden md:block">
              <p className="text-sm font-semibold">John Doe</p>
              <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Admin</p>
            </div>
            <img src={IMAGES.avatar_admin} alt="User" className="size-10 rounded-full border border-border-light dark:border-border-dark" />
          </div>
        </div>
      </header>

      {/* Main Content Scrollable */}
      <div className="flex-1 overflow-y-auto p-8">
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Today's Revenue", value: "$1,450", change: "+5.2% vs yesterday", icon: "payments", trend: "positive" },
            { title: "Sales This Month", value: "$32,800", change: "+2.1% vs last month", icon: "trending_up", trend: "positive" },
            { title: "New Customers", value: "12", change: "+10% vs yesterday", icon: "person_add", trend: "positive" },
            { title: "Pending Installments", value: "8", change: "-3% vs yesterday", icon: "hourglass_top", trend: "negative" }
          ].map((item, idx) => (
            <div key={idx} className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">{item.title}</p>
                <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">{item.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">{item.value}</h3>
              <p className={`text-sm font-medium ${item.trend === 'positive' ? 'text-success' : 'text-danger'}`}>
                {item.change}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Sales Chart */}
            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold">Sales Overview</h3>
                <select className="bg-background-light dark:bg-background-dark border-none text-sm rounded-lg px-3 py-1.5 focus:ring-1 focus:ring-primary">
                  <option>This Week</option>
                  <option>Last Week</option>
                </select>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData} barSize={40}>
                     <Tooltip 
                        cursor={{fill: 'transparent'}}
                        contentStyle={{ backgroundColor: '#1A2836', borderColor: '#2C3A47', borderRadius: '8px', color: '#fff' }}
                     />
                     <Bar dataKey="value" radius={[20, 20, 0, 0]}>
                        {salesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.value > 60 ? '#4A90E2' : '#4A90E266'} />
                        ))}
                     </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <div className="flex justify-between px-2 mt-2">
                   {salesData.map((d) => (
                     <span key={d.name} className="text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark w-full text-center">{d.name}</span>
                   ))}
                </div>
              </div>
            </div>

            {/* Recent Table */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
              <div className="p-6 border-b border-border-light dark:border-border-dark">
                <h3 className="text-lg font-bold">Upcoming Installment Payments</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-background-light dark:bg-background-dark text-text-secondary-light dark:text-text-secondary-dark">
                    <tr>
                      <th className="px-6 py-3 font-semibold">Customer Name</th>
                      <th className="px-6 py-3 font-semibold">Due Date</th>
                      <th className="px-6 py-3 font-semibold">Amount</th>
                      <th className="px-6 py-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-light dark:divide-border-dark">
                    {[
                      { name: "Emily Carter", date: "2024-07-28", amount: "$250.00", status: "Due", color: "green" },
                      { name: "Michael Rodriguez", date: "2024-07-25", amount: "$175.50", status: "Overdue", color: "red" },
                      { name: "Jessica Chen", date: "2024-08-01", amount: "$320.00", status: "Due", color: "green" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-background-light dark:hover:bg-background-dark/50">
                        <td className="px-6 py-4 font-medium">{row.name}</td>
                        <td className="px-6 py-4 text-text-secondary-light dark:text-text-secondary-dark">{row.date}</td>
                        <td className="px-6 py-4">{row.amount}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium bg-${row.color}-100 dark:bg-${row.color}-900/30 text-${row.color}-800 dark:text-${row.color}-200`}>
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

          {/* Side Modules */}
          <div className="flex flex-col gap-8">
            {/* Quick Actions */}
            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <div className="flex flex-col gap-3">
                <button className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold text-sm transition-colors">
                  <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                  Create New Sale
                </button>
                <button className="flex items-center justify-center gap-2 w-full py-2.5 border border-primary text-primary hover:bg-primary/10 rounded-lg font-semibold text-sm transition-colors">
                  <span className="material-symbols-outlined text-lg">add_box</span>
                  Add New Product
                </button>
                <button className="flex items-center justify-center gap-2 w-full py-2.5 border border-primary text-primary hover:bg-primary/10 rounded-lg font-semibold text-sm transition-colors">
                  <span className="material-symbols-outlined text-lg">group_add</span>
                  Manage Customers
                </button>
              </div>
            </div>

            {/* Top Selling */}
            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
              <h3 className="text-lg font-bold mb-4">Top-Selling Products</h3>
              <ul className="space-y-4">
                {[
                  { name: "Smartphone X", sold: 128, rev: "$15,360", icon: "smartphone" },
                  { name: 'Laptop Pro 14"', sold: 92, rev: "$110,400", icon: "laptop_mac" },
                  { name: "Wireless Earbuds", sold: 210, rev: "$20,895", icon: "headphones" },
                ].map((p, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">{p.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{p.name}</p>
                      <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">{p.sold} units sold</p>
                    </div>
                    <p className="text-sm font-semibold">{p.rev}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;