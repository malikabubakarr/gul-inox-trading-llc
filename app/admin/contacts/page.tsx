// app/admin/contacts/page.tsx
"use client";

import { useState, useEffect } from "react";

interface IContact {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: string;
}

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/contact");
      if (response.ok) {
        const data = await response.json();
        setContacts(data.data); // Matches your API's response format
      } else {
        setError("Failed to fetch contacts");
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
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Contacts Dashboard</h1>
        {loading ? (
          <p className="text-gray-600 text-center">Loading contacts...</p>
        ) : error ? (
          <p className="text-red-600 text-center">{error}</p>
        ) : (
          <>
            {/* Mobile: Card Layout */}
            <div className="block md:hidden space-y-4">
              {contacts.map((contact) => (
                <div key={contact._id} className="bg-white rounded-3xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-2">
                    <p><strong>Name:</strong> {contact.name}</p>
                    <p><strong>Email:</strong> {contact.email}</p>
                    {contact.phone && <p><strong>Phone:</strong> {contact.phone}</p>}
                    <p><strong>Message:</strong> <span className="break-words">{contact.message}</span></p>
                    <p><strong>Date:</strong> {new Date(contact.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
              {contacts.length === 0 && <p className="text-center py-8 text-gray-600">No contacts yet.</p>}
            </div>

            {/* Desktop: Table Layout */}
            <div className="hidden md:block bg-white rounded-3xl shadow-md border border-gray-200 p-6 md:p-8 overflow-x-auto">
              <table className="w-full table-auto min-w-[700px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Name</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Email</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Phone</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Message</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact._id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4">{contact.name}</td>
                      <td className="py-3 px-4">{contact.email}</td>
                      <td className="py-3 px-4">{contact.phone || "N/A"}</td>
                      <td className="py-3 px-4 max-w-xs truncate" title={contact.message}>{contact.message}</td>
                      <td className="py-3 px-4">{new Date(contact.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {contacts.length === 0 && <p className="text-center py-8 text-gray-600">No contacts yet.</p>}
            </div>
          </>
        )}
      </div>
    </div>
  );
}