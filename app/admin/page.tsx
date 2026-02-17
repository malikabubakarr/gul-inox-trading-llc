// app/admin/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminDashboardPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  // Get password from environment (set in .env.local)
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "fallback-password"; // Use NEXT_PUBLIC_ for client-side access

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      setError("Incorrect password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-md border border-gray-200 max-w-md w-full">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
              />
            </div>
            {error && <p className="text-red-600 text-sm text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-full text-sm font-medium transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/admin/inquiries">
            <div className="bg-white rounded-3xl shadow-md border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow cursor-pointer">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Inquiries</h2>
              <p className="text-gray-600 mb-4">View and manage all inquiry submissions.</p>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-full text-sm font-medium transition-all">
                Go to Inquiries
              </button>
            </div>
          </Link>
          
          <Link href="/admin/contacts">
            <div className="bg-white rounded-3xl shadow-md border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow cursor-pointer">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contacts</h2>
              <p className="text-gray-600 mb-4">View and manage all contact form submissions.</p>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-full text-sm font-medium transition-all">
                Go to Contacts
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}