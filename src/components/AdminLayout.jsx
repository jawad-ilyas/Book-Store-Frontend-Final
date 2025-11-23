import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Bars3Icon } from "@heroicons/react/24/outline";

const AdminLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">

      {/* Sidebar */}
      <Sidebar isOpen={open} onClose={setOpen} />

      {/* Main Content */}
      <div className="flex-1 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">

        {/* Top Bar */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center gap-4">

          {/* Hamburger (mobile only) */}
          <button 
            onClick={() => setOpen(!open)} 
            className=" p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <Bars3Icon className="w-7 h-7 text-gray-700 dark:text-gray-200" />
          </button>

          {/* <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Admin Dashboard
          </h1> */}

        </div>

        {/* Content */}
        <div className="p-6">
          {children}
        </div>

      </div>

    </div>
  );
};

export default AdminLayout;
