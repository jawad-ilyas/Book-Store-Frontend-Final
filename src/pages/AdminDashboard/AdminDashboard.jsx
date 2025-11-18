import React from "react";
import MetricCard from "../../components/MetricCard";
import AnalyticsChart from "../../components/AnalyticsChart";
import { UserIcon, ShoppingCartIcon, CurrencyDollarIcon, BookOpenIcon } from "@heroicons/react/24/outline";

const AdminDashboard = () => {
  const metrics = [
    { title: "Total Users", value: 1200, icon: <UserIcon className="w-10 h-10" /> },
    { title: "Orders", value: 450, icon: <ShoppingCartIcon className="w-10 h-10" /> },
    { title: "Income", value: "$12,300", icon: <CurrencyDollarIcon className="w-10 h-10" /> },
    { title: "Books", value: 320, icon: <BookOpenIcon className="w-10 h-10" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500 px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">Admin Dashboard</h1>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {metrics.map((metric, idx) => (
          <MetricCard key={idx} {...metric} />
        ))}
      </div>

      {/* Analytics Chart */}
      <AnalyticsChart />
    </div>
  );
};

export default AdminDashboard;
