"use client";
import { useState } from "react";
import logo from "../../public/logo-fix.png";
import Image from "next/image";

export default function createBlog() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-3xl ">
        <div className="flex justify-center items-center">
          <Image src={logo} alt="logo" className="w-28 scale-150 py-1" />
        </div>
        <h1 className="text-3xl font-semibold text-gray-700 mb-6 text-center">
          Create New Blog
        </h1>

        <form className="space-y-4 mb-32">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-gray-700 font-medium">
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter article title"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

             {/* Image Upload */}
             <div>
            <label htmlFor="image" className="block text-gray-700 font-medium">
              Upload Image
            </label>
            <input
              id="image"
              type="file"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Content */}
          <div>
            <label
              htmlFor="content"
              className="block text-gray-700 font-medium"
            >
              Content
            </label>
            <textarea
              id="content"
              rows="25"
              placeholder="Enter article content"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-gray-950 text-white rounded hover:bg-gray-800  focus:outline-none focus:ring-2 focus:ring-gray-950"
              >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
