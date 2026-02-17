// app/admin/inquiries/page.tsx
"use client";

import { useState, useEffect } from "react";

interface IInquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  quantity: string;
  message: string;
  createdAt: string;
}

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<IInquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/inquiries");
      if (response.ok) {
        const data = await response.json();
        setInquiries(data.inquiries);
      } else {
        setError("Failed to fetch inquiries");
      }
    } catch (err) {
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Inquiries Dashboard</h1>
        {loading ? (
          <p className="text-gray-600 text-center">Loading inquiries...</p>
        ) : error ? (
          <p className="text-red-600 text-center">{error}</p>
        ) : (
          <>
            {/* Mobile: Card Layout */}
            <div className="block md:hidden space-y-4">
              {inquiries.map((inq) => (
                <div key={inq._id} className="bg-white rounded-3xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-2">
                    <p><strong>Name:</strong> {inq.name}</p>
                    <p><strong>Email:</strong> {inq.email}</p>
                    <p><strong>Phone:</strong> {inq.phone}</p>
                    <p><strong>Company:</strong> {inq.company}</p>
                    <p><strong>Quantity:</strong> {inq.quantity}</p>
                    <p><strong>Message:</strong> <span className="break-words">{inq.message}</span></p>
                    <p><strong>Date:</strong> {new Date(inq.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
              {inquiries.length === 0 && <p className="text-center py-8 text-gray-600">No inquiries yet.</p>}
            </div>

            {/* Desktop: Table Layout */}
            <div className="hidden md:block bg-white rounded-3xl shadow-md border border-gray-200 p-6 md:p-8 overflow-x-auto">
              <table className="w-full table-auto min-w-[800px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Name</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Email</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Phone</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Company</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Quantity</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Message</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries.map((inq) => (
                    <tr key={inq._id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4">{inq.name}</td>
                      <td className="py-3 px-4">{inq.email}</td>
                      <td className="py-3 px-4">{inq.phone}</td>
                      <td className="py-3 px-4">{inq.company}</td>
                      <td className="py-3 px-4">{inq.quantity}</td>
                      <td className="py-3 px-4 max-w-xs truncate" title={inq.message}>{inq.message}</td>
                      <td className="py-3 px-4">{new Date(inq.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {inquiries.length === 0 && <p className="text-center py-8 text-gray-600">No inquiries yet.</p>}
            </div>
          </>
        )}
      </div>
    </div>
  );
}