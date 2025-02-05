"use client";
import { useRouter } from "next/navigation"; // Gunakan useRouter dari Next.js 13
import { useEffect, useState } from "react";

export default function BlogView() {
  const router = useRouter();
  const queryParams = new URLSearchParams(window.location.search); // Ambil query dari URL
  const id = queryParams.get("id"); // Ambil parameter "id" dari query string
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (id) {
      async function fetchBlog() {
        try {
          const res = await fetch(`http://localhost:1337/api/blogs/${id}`);
          if (res.ok) {
            const data = await res.json();
            setBlog(data.data);
          } else {
            console.error("Failed to fetch blog");
          }
        } catch (error) {
          console.error("Error fetching blog:", error);
        }
      }
      fetchBlog();
    }
  }, [id]);

  if (!id) {
    return <p>Please provide a valid blog ID.</p>;
  }

  if (!blog) {
    return <p>Loading blog data...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <img src="" alt="" />
      <h1 className="text-4xl font-bold mb-4">{blog.Title}</h1>
      <p className="text-gray-600 mb-8">{blog.Content}</p>
      <p className="text-sm text-gray-400">Published on: {blog.PublishedDate}</p>
    </div>
  );
}
