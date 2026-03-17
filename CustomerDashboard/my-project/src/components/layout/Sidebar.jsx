import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutGrid, ShoppingCart, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-screen flex flex-col border-r border-gray-100">
      <div className="p-6 mb-4">
        <h1 className="text-[#54bd95] text-2xl font-bold tracking-tight italic">Halleyx</h1>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
              isActive ? 'bg-[#54bd95] text-white shadow-lg shadow-green-100' : 'text-gray-500 hover:bg-gray-50'
            }`
          }
        >
          <LayoutGrid size={20} /> Dashboard
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
              isActive ? 'bg-[#54bd95] text-white' : 'text-gray-500 hover:bg-gray-50'
            }`
          }
        >
          <ShoppingCart size={20} /> Customer Orders
        </NavLink>
      </nav>

      <div className="p-4 border-t border-gray-50 space-y-1">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-gray-600 transition-colors text-sm">
          <Settings size={18} /> Settings
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 text-[#ff6b6b] hover:bg-red-50 rounded-xl transition-colors text-sm font-medium">
          <LogOut size={18} /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;