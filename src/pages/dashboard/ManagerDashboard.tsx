import React from "react";

const ManagerDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow p-4 flex flex-col items-center">
          <span className="text-lg font-semibold">Total Rooms</span>
          <span className="text-2xl font-bold">42</span>
        </div>
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow p-4 flex flex-col items-center">
          <span className="text-lg font-semibold">Occupied %</span>
          <span className="text-2xl font-bold">85%</span>
        </div>
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow p-4 flex flex-col items-center">
          <span className="text-lg font-semibold">Total Income</span>
          <span className="text-2xl font-bold">RM 12,000</span>
        </div>
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow p-4 flex flex-col items-center">
          <span className="text-lg font-semibold">Expenses</span>
          <span className="text-2xl font-bold">RM 3,000</span>
        </div>
      </div>
      <div className="bg-white dark:bg-neutral-800 rounded-xl shadow p-4 h-64 flex items-center justify-center">
        {/* Chart placeholder */}
        <span className="text-gray-400">[Monthly Rent Collection Chart]</span>
      </div>
    </div>
  );
};

export default ManagerDashboard; 