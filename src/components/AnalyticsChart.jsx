import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const sampleData = [
  { month: "Jan", sales: 1200 },
  { month: "Feb", sales: 2100 },
  { month: "Mar", sales: 1800 },
  { month: "Apr", sales: 2500 },
  { month: "May", sales: 2000 },
  { month: "Jun", sales: 2700 },
];

const AnalyticsChart = () => {
  return (
    <div className="bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-neu rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Sales Analytics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={sampleData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="month" stroke="#374151" />
          <YAxis stroke="#374151" />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#14b8a6" strokeWidth={3} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;
