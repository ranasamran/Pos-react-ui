import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IMAGES } from '../constants';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
    { name: 'POS', icon: 'point_of_sale', path: '/pos' },
    { name: 'Sales History', icon: 'receipt_long', path: '/sales' },
    { name: 'Products', icon: 'inventory_2', path: '/products' },
    { name: 'Customers', icon: 'group', path: '/customers' },
    { name: 'Installments', icon: 'credit_card', path: '/installments' },
    { name: 'Reports', icon: 'bar_chart', path: '/reports' },
  ];

  const getLinkClass = (isActive: boolean) => {
    const base = "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-200 group";
    if (isActive) {
      return `${base} bg-primary/10 text-primary dark:text-primary`;
    }
    return `${base} text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-text-primary-light dark:hover:text-text-primary-dark`;
  };

  return (
    <aside className="hidden md:flex flex-col w-64 bg-surface-light dark:bg-surface-dark border-r border-border-light dark:border-border-dark shrink-0 h-full">
      <div className="flex items-center gap-3 p-6 mb-2">
        <div 
          className="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0 border border-border-light dark:border-border-dark"
          style={{ backgroundImage: `url("${IMAGES.logo}")` }}
        />
        <div className="flex flex-col overflow-hidden">
          <h1 className="text-base font-bold text-text-primary-light dark:text-text-primary-dark truncate">MegaStore POS</h1>
          <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark truncate">Management</p>
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-1 px-4 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => getLinkClass(isActive)}
          >
            {({ isActive }) => (
              <>
                <span className={`material-symbols-outlined text-xl ${isActive ? 'filled' : ''}`}>{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-border-light dark:border-border-dark flex flex-col gap-1">
        <button className={getLinkClass(false)}>
          <span className="material-symbols-outlined text-xl">settings</span>
          <span className="text-sm font-medium">Settings</span>
        </button>
        <button className={getLinkClass(false)}>
           <span className="material-symbols-outlined text-xl">help</span>
           <span className="text-sm font-medium">Help</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;