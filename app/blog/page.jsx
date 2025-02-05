"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const res = await fetch("http://localhost:1337/api/blogs?populate=*");
      const data = await res.json();
      setBlogs(data.data);
    }
    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="border shadow-sm p-4">
            {blog.Image?.map((img, index) => (
              <img
                key={index}
                src={`http://localhost:1337${img.formats.thumbnail.url}`} 
                alt={blog.Title}
                className="w-full h-48 object-cover mb-4"
              />
            ))}
            <h2 className="text-2xl font-semibold mb-4">{blog.Title}</h2>
            <p className="text-gray-600 mb-4 truncate">
              {blog.Content}
            </p>
            <Link
              href={`/blog-view?id=${blog.id}`}
              className="text-blue-500 hover:underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
