import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import POS from './pages/POS';
import Products from './pages/Products';
import Customers from './pages/Customers';
import Installments from './pages/Installments';
import Reports from './pages/Reports';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-display overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pos" element={<POS />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/installments" element={<Installments />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;