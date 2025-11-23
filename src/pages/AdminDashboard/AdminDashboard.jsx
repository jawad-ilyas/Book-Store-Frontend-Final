import React from "react";
import AdminLayout from "../../components/AdminLayout";
import MetricCard from "../../components/MetricCard";
import AnalyticsChart from "../../components/AnalyticsChart";
import {
  UserIcon,
  ShoppingCartIcon,
  CurrencyDollarIcon,
  BookOpenIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useGetAdminAnalyticsQuery } from "../../redux/admin/adminApi";

const AdminDashboard = () => {
  const { data } = useGetAdminAnalyticsQuery();
  const analytics = data?.analytics;
  const chartData = analytics?.monthlySalesHistory || [];

  const metrics = [
    {
      title: "Total Users",
      value: analytics?.totalUsers ?? 0,
      icon: <UserIcon className="w-10 h-10" />,
      link: "/admin/users",
    },
    {
      title: "Total Orders",
      value: analytics?.totalOrders ?? 0,
      icon: <ShoppingCartIcon className="w-10 h-10" />,
      link: "/admin/orders",
    },
    {
      title: "Total Income",
      value: `$${analytics?.totalIncome?.toFixed(2) ?? "0.00"}`,
      icon: <CurrencyDollarIcon className="w-10 h-10" />,
      link: "/admin/earnings",
    },
    {
      title: "Monthly Sales",
      value: `$${analytics?.monthlySales?.toFixed(2) ?? "0.00"}`,
      icon: <CurrencyDollarIcon className="w-10 h-10" />,
      link: "/admin/sales/monthly",
    },
    {
      title: "Daily Sales",
      value: `$${analytics?.dailySales?.toFixed(2) ?? "0.00"}`,
      icon: <CurrencyDollarIcon className="w-10 h-10" />,
      link: "/admin/sales/daily",
    },
    {
      title: "Books (Top Selling)",
      value: analytics?.bestSellingBooks?.length ?? 0,
      icon: <BookOpenIcon className="w-10 h-10" />,
      link: "/admin/books",
    },
  ];

  return (
    <AdminLayout>
      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {metrics.map((metric, idx) => (
          <Link key={idx} to={metric.link}>
            <MetricCard {...metric} />
          </Link>
        ))}
      </div>

      {/* Chart */}
      <AnalyticsChart chartData={chartData} />
    </AdminLayout>
  );
};

export default AdminDashboard;
