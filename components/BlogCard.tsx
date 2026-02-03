"use client";

import { useState } from "react";

interface BlogPost {
  title: string;
  excerpt: string;
  fullText: string;
  img: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col">
      <img
        src={post.img}
        alt={post.title}
        className="h-96 w-full object-cover"
      />
      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-medium mb-4 text-gray-900">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>

        {/* Read More Button */}
        <span
          className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm cursor-pointer w-max"
          onClick={() => setOpen(!open)}
        >
          {open ? "Show Less ↑" : "Read More →"}
        </span>

        {/* Expandable Scrollable Text */}
        {open && (
          <div className="mt-4 max-h-40 overflow-y-auto text-gray-700 text-sm border-t border-gray-200 pt-4 transition-all duration-300 ease-in-out">
            {post.fullText}
          </div>
        )}
      </div>
    </div>
  );
}