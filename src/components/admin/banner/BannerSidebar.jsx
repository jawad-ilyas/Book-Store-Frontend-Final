import React from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const BannerSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Add Banner", icon: <FiPlus />, path: "/dashboard/banner/add" },
    { name: "Manage Banners", icon: <FiTrash2 />, path: "/dashboard/banner/manage" },
  ];

  return (
    <aside className="hidden sm:flex sm:flex-col bg-gray-800 text-gray-400 w-20 space-y-4 py-6 items-center">
      {menuItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`flex flex-col items-center justify-center w-12 h-12 rounded-lg transition hover:bg-gray-700 hover:text-white
            ${location.pathname === item.path ? "bg-gray-700 text-white" : ""}
          `}
        >
          {item.icon}
          <span className="text-xs mt-1">{item.name.split(" ")[0]}</span>
        </Link>
      ))}
    </aside>
  );
};

export default BannerSidebar;
