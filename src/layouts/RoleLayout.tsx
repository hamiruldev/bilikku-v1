import React from "react";
import { Outlet } from "react-router-dom";

const RoleLayout: React.FC<{ user: any }> = ({ user }) => {
  // TODO: Add real nav and floating action button
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Placeholder nav */}
      <header className="h-16 flex items-center px-4 border-b border-gray-200 dark:border-neutral-800">
        <span className="font-bold text-lg">Bilikku</span>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
      {/* Placeholder floating action button */}
      {(user?.role === "manager" || user?.role === "owner") && (
        <button className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full shadow-lg p-4 hover:bg-blue-700 transition-colors">
          +
        </button>
      )}
    </div>
  );
};

export default RoleLayout; 