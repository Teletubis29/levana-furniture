"use client";
import { TbDownload } from "react-icons/tb";
import { FaArrowUp } from "react-icons/fa";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(
    "All Products Levana"
  );
  const [showButton, setShowButton] = useState(false);

  const imageCategories = [
    {
      category: "All Products Levana",
      images: [
        { src: "/levanaProducts/1.webp", alt: "" },
        { src: "/levanaProducts/2.webp", alt: "" },
        { src: "/levanaProducts/3.webp", alt: "" },
        { src: "/levanaProducts/4.webp", alt: "" },
        { src: "/levanaProducts/5.webp", alt: "" },
        { src: "/levanaProducts/6.webp", alt: "" },
        { src: "/levanaProducts/7.webp", alt: "" },
        { src: "/levanaProducts/8.webp", alt: "" },
        { src: "/levanaProducts/9.webp", alt: "" },
        { src: "/levanaProducts/10.webp", alt: "" },
        { src: "/levanaProducts/11.webp", alt: "" },
        { src: "/levanaProducts/12.webp", alt: "" },
        { src: "/levanaProducts/13.webp", alt: "" },
        { src: "/levanaProducts/14.webp", alt: "" },
        { src: "/levanaProducts/15.webp", alt: "" },
        { src: "/levanaProducts/16.webp", alt: "" },
        { src: "/levanaProducts/17.webp", alt: "" },
        { src: "/levanaProducts/18.webp", alt: "" },
        { src: "/levanaProducts/19.webp", alt: "" },
        { src: "/levanaProducts/20.webp", alt: "" },
        { src: "/levanaProducts/21.webp", alt: "" },
        { src: "/levanaProducts/22.webp", alt: "" },
        { src: "/levanaProducts/23.webp", alt: "" },
        { src: "/levanaProducts/24.webp", alt: "" },
        { src: "/levanaProducts/25.webp", alt: "" },
        { src: "/levanaProducts/26.webp", alt: "" },
        { src: "/levanaProducts/27.webp", alt: "" },
        { src: "/levanaProducts/28.webp", alt: "" },
        { src: "/levanaProducts/29.webp", alt: "" },
        { src: "/levanaProducts/30.webp", alt: "" },
        { src: "/levanaProducts/31.webp", alt: "" },
        { src: "/levanaProducts/32.webp", alt: "" },
        { src: "/levanaProducts/33.webp", alt: "" },
        { src: "/levanaProducts/34.webp", alt: "" },
        { src: "/levanaProducts/35.webp", alt: "" },
        { src: "/levanaProducts/36.webp", alt: "" },
        { src: "/levanaProducts/37.webp", alt: "" },
        { src: "/levanaProducts/38.webp", alt: "" },
        { src: "/levanaProducts/39.webp", alt: "" },
        { src: "/levanaProducts/40.webp", alt: "" },
        { src: "/levanaProducts/41.webp", alt: "" },
        { src: "/levanaProducts/42.webp", alt: "" },
        { src: "/levanaProducts/43.webp", alt: "" },
        { src: "/levanaProducts/44.webp", alt: "" },
        { src: "/levanaProducts/45.webp", alt: "" },
        { src: "/levanaProducts/46.webp", alt: "" },
        { src: "/levanaProducts/47.webp", alt: "" },
        { src: "/levanaProducts/48.webp", alt: "" },
        { src: "/levanaProducts/49.webp", alt: "" },
        { src: "/levanaProducts/50.webp", alt: "" },
        { src: "/levanaProducts/51.webp", alt: "" },
        { src: "/levanaProducts/52.webp", alt: "" },
        { src: "/levanaProducts/53.webp", alt: "" },
        { src: "/levanaProducts/54.webp", alt: "" },
        { src: "/levanaProducts/55.webp", alt: "" },
        { src: "/levanaProducts/56.webp", alt: "" },
        { src: "/levanaProducts/57.webp", alt: "" },
        { src: "/levanaProducts/58.webp", alt: "" },
        { src: "/levanaProducts/59.webp", alt: "" },
        { src: "/levanaProducts/60.webp", alt: "" },
        { src: "/levanaProducts/61.webp", alt: "" },
        { src: "/levanaProducts/62.webp", alt: "" },
        { src: "/levanaProducts/63.webp", alt: "" },
        { src: "/levanaProducts/64.webp", alt: "" },
        { src: "/levanaProducts/65.webp", alt: "" },
        { src: "/levanaProducts/66.webp", alt: "" },
        { src: "/levanaProducts/67.webp", alt: "" },
        { src: "/levanaProducts/68.webp", alt: "" },
        { src: "/levanaProducts/69.webp", alt: "" },
        { src: "/levanaProducts/70.webp", alt: "" },
        { src: "/levanaProducts/71.webp", alt: "" },
        { src: "/levanaProducts/72.webp", alt: "" },
        { src: "/levanaProducts/73.webp", alt: "" },
        { src: "/levanaProducts/74.webp", alt: "" },
        { src: "/levanaProducts/75.webp", alt: "" },
        { src: "/levanaProducts/76.webp", alt: "" },
        { src: "/levanaProducts/77.webp", alt: "" },
        { src: "/levanaProducts/78.webp", alt: "" },
        { src: "/levanaProducts/79.webp", alt: "" },
        { src: "/levanaProducts/80.webp", alt: "" },
        { src: "/levanaProducts/81.webp", alt: "" },
        { src: "/levanaProducts/82.webp", alt: "" },
        { src: "/levanaProducts/83.webp", alt: "" },
        { src: "/levanaProducts/84.webp", alt: "" },
        { src: "/levanaProducts/85.webp", alt: "" },
        { src: "/levanaProducts/86.webp", alt: "" },
        { src: "/levanaProducts/87.webp", alt: "" },
        { src: "/levanaProducts/88.webp", alt: "" },
        { src: "/levanaProducts/89.webp", alt: "" },
        { src: "/levanaProducts/90.webp", alt: "" },
        { src: "/levanaProducts/91.webp", alt: "" },
        { src: "/levanaProducts/92.webp", alt: "" },
        { src: "/levanaProducts/93.webp", alt: "" },
        { src: "/levanaProducts/94.webp", alt: "" },
        { src: "/levanaProducts/95.webp", alt: "" },
        { src: "/levanaProducts/96.webp", alt: "" },
        { src: "/levanaProducts/97.webp", alt: "" },
        { src: "/levanaProducts/98.webp", alt: "" },
        { src: "/levanaProducts/99.webp", alt: "" },
        { src: "/levanaProducts/100.webp", alt: "" },
        { src: "/levanaProducts/101.webp", alt: "" },
        { src: "/levanaProducts/102.webp", alt: "" },
        { src: "/levanaProducts/103.webp", alt: "" },
        { src: "/levanaProducts/104.webp", alt: "" },
        { src: "/levanaProducts/105.webp", alt: "" },
        { src: "/levanaProducts/106.webp", alt: "" },
        { src: "/levanaProducts/107.webp", alt: "" },
        { src: "/levanaProducts/108.webp", alt: "" },
        { src: "/levanaProducts/109.webp", alt: "" },
        { src: "/levanaProducts/110.webp", alt: "" },
        { src: "/levanaProducts/111.webp", alt: "" },
        { src: "/levanaProducts/112.webp", alt: "" },
        { src: "/levanaProducts/113.webp", alt: "" },
        { src: "/levanaProducts/114.webp", alt: "" },
        { src: "/levanaProducts/115.webp", alt: "" },
        { src: "/levanaProducts/116.webp", alt: "" },
        { src: "/levanaProducts/117.webp", alt: "" },
        { src: "/levanaProducts/118.webp", alt: "" },
        { src: "/levanaProducts/119.webp", alt: "" },
        { src: "/levanaProducts/120.webp", alt: "" },
        { src: "/levanaProducts/121.webp", alt: "" },
        { src: "/levanaProducts/122.webp", alt: "" },
        { src: "/levanaProducts/123.webp", alt: "" },
        { src: "/levanaProducts/124.webp", alt: "" },
        { src: "/levanaProducts/125.webp", alt: "" },
        { src: "/levanaProducts/126.webp", alt: "" },
        { src: "/levanaProducts/127.webp", alt: "" },
        { src: "/levanaProducts/128.webp", alt: "" },
        { src: "/levanaProducts/129.webp", alt: "" },
        { src: "/levanaProducts/130.webp", alt: "" },
        { src: "/levanaProducts/131.webp", alt: "" },
        { src: "/levanaProducts/132.webp", alt: "" },
        { src: "/levanaProducts/133.webp", alt: "" },
        { src: "/levanaProducts/134.webp", alt: "" },
        { src: "/levanaProducts/135.webp", alt: "" },
        { src: "/levanaProducts/136.webp", alt: "" },
        { src: "/levanaProducts/137.webp", alt: "" },
        { src: "/levanaProducts/138.webp", alt: "" },
        { src: "/levanaProducts/139.webp", alt: "" },
        { src: "/levanaProducts/140.webp", alt: "" },
        { src: "/levanaProducts/141.webp", alt: "" },
        { src: "/levanaProducts/142.webp", alt: "" },
        { src: "/levanaProducts/143.webp", alt: "" },
        { src: "/levanaProducts/144.webp", alt: "" },
        { src: "/levanaProducts/145.webp", alt: "" },
        { src: "/levanaProducts/146.webp", alt: "" },
        { src: "/levanaProducts/147.webp", alt: "" },
        { src: "/levanaProducts/148.webp", alt: "" },
        { src: "/levanaProducts/149.webp", alt: "" },
        { src: "/levanaProducts/150.webp", alt: "" },
        { src: "/levanaProducts/151.webp", alt: "" },
        { src: "/levanaProducts/152.webp", alt: "" },
        { src: "/levanaProducts/153.webp", alt: "" },
        { src: "/levanaProducts/154.webp", alt: "" },
        { src: "/levanaProducts/155.webp", alt: "" },
        { src: "/levanaProducts/156.webp", alt: "" },
        { src: "/levanaProducts/157.webp", alt: "" },
        { src: "/levanaProducts/158.webp", alt: "" },
        { src: "/levanaProducts/159.webp", alt: "" },
        { src: "/levanaProducts/160.webp", alt: "" },
        { src: "/levanaProducts/161.webp", alt: "" },
        { src: "/levanaProducts/162.webp", alt: "" },
        { src: "/levanaProducts/163.webp", alt: "" },
        { src: "/levanaProducts/164.webp", alt: "" },
        { src: "/levanaProducts/165.webp", alt: "" },
        { src: "/levanaProducts/166.webp", alt: "" },
        { src: "/levanaProducts/167.webp", alt: "" },
        { src: "/levanaProducts/168.webp", alt: "" },
        { src: "/levanaProducts/169.webp", alt: "" },
        { src: "/levanaProducts/170.webp", alt: "" },
        { src: "/levanaProducts/171.webp", alt: "" },
        { src: "/levanaProducts/172.webp", alt: "" },
        { src: "/levanaProducts/173.webp", alt: "" },
        { src: "/levanaProducts/174.webp", alt: "" },
        { src: "/levanaProducts/175.webp", alt: "" },
        { src: "/levanaProducts/176.webp", alt: "" },
      ],
    },
    {
      category: "Chair",
      images: [
        { src: "/levanaProducts/176.webp", alt: "" },
        { src: "/levanaProducts/175.webp", alt: "" },
        { src: "/levanaProducts/174.webp", alt: "" },
        // { src: "/levanaProducts/173.webp", alt: "" },
        { src: "/levanaProducts/172.webp", alt: "" },
        { src: "/levanaProducts/171.webp", alt: "" },
        { src: "/levanaProducts/170.webp", alt: "" },
        // { src: "/levanaProducts/169.webp", alt: "" },
        // { src: "/levanaProducts/168.webp", alt: "" },
        // { src: "/levanaProducts/167.webp", alt: "" },
        { src: "/levanaProducts/166.webp", alt: "" },
        { src: "/levanaProducts/165.webp", alt: "" },
        { src: "/levanaProducts/164.webp", alt: "" },
        { src: "/levanaProducts/163.webp", alt: "" },
        { src: "/levanaProducts/162.webp", alt: "" },
        { src: "/levanaProducts/161.webp", alt: "" },
        { src: "/levanaProducts/160.webp", alt: "" },
        { src: "/levanaProducts/159.webp", alt: "" },
        { src: "/levanaProducts/158.webp", alt: "" },
        { src: "/levanaProducts/157.webp", alt: "" },
        { src: "/levanaProducts/156.webp", alt: "" },
        // { src: "/levanaProducts/155.webp", alt: "" },
        // { src: "/levanaProducts/154.webp", alt: "" },
        // { src: "/levanaProducts/153.webp", alt: "" },
        // { src: "/levanaProducts/152.webp", alt: "" },
        // { src: "/levanaProducts/151.webp", alt: "" },
        // { src: "/levanaProducts/150.webp", alt: "" },
        // { src: "/levanaProducts/149.webp", alt: "" },
        // { src: "/levanaProducts/148.webp", alt: "" },
        // { src: "/levanaProducts/147.webp", alt: "" },
        // { src: "/levanaProducts/146.webp", alt: "" },
        // { src: "/levanaProducts/145.webp", alt: "" },
        // { src: "/levanaProducts/144.webp", alt: "" },
        // { src: "/levanaProducts/143.webp", alt: "" },
        // { src: "/levanaProducts/142.webp", alt: "" },
        // { src: "/levanaProducts/141.webp", alt: "" },
        // { src: "/levanaProducts/140.webp", alt: "" },
        // { src: "/levanaProducts/139.webp", alt: "" },
        // { src: "/levanaProducts/138.webp", alt: "" },
        // { src: "/levanaProducts/137.webp", alt: "" },
        // { src: "/levanaProducts/136.webp", alt: "" },
        { src: "/levanaProducts/135.webp", alt: "" },
        // { src: "/levanaProducts/134.webp", alt: "" },
        { src: "/levanaProducts/133.webp", alt: "" },
        { src: "/levanaProducts/132.webp", alt: "" },
        { src: "/levanaProducts/131.webp", alt: "" },
        { src: "/levanaProducts/130.webp", alt: "" },
        { src: "/levanaProducts/129.webp", alt: "" },
        { src: "/levanaProducts/128.webp", alt: "" },
        { src: "/levanaProducts/127.webp", alt: "" },
        { src: "/levanaProducts/126.webp", alt: "" },
        { src: "/levanaProducts/125.webp", alt: "" },
        { src: "/levanaProducts/124.webp", alt: "" },
        { src: "/levanaProducts/123.webp", alt: "" },
        // { src: "/levanaProducts/122.webp", alt: "" },
        { src: "/levanaProducts/121.webp", alt: "" },
        { src: "/levanaProducts/120.webp", alt: "" },
        { src: "/levanaProducts/119.webp", alt: "" },
        { src: "/levanaProducts/118.webp", alt: "" },
        { src: "/levanaProducts/117.webp", alt: "" },
        { src: "/levanaProducts/116.webp", alt: "" },
        // { src: "/levanaProducts/115.webp", alt: "" },
        // { src: "/levanaProducts/114.webp", alt: "" },
        { src: "/levanaProducts/113.webp", alt: "" },
        { src: "/levanaProducts/112.webp", alt: "" },
        { src: "/levanaProducts/111.webp", alt: "" },
        { src: "/levanaProducts/110.webp", alt: "" },
        { src: "/levanaProducts/109.webp", alt: "" },
        { src: "/levanaProducts/108.webp", alt: "" },
        // { src: "/levanaProducts/107.webp", alt: "" },
        { src: "/levanaProducts/106.webp", alt: "" },
        { src: "/levanaProducts/105.webp", alt: "" },
        // { src: "/levanaProducts/104.webp", alt: "" },
        // { src: "/levanaProducts/103.webp", alt: "" },
        // { src: "/levanaProducts/102.webp", alt: "" },
        // { src: "/levanaProducts/101.webp", alt: "" },
        // { src: "/levanaProducts/100.webp", alt: "" },
        // { src: "/levanaProducts/99.webp", alt: "" },
        // { src: "/levanaProducts/98.webp", alt: "" },
        // { src: "/levanaProducts/97.webp", alt: "" },
        { src: "/levanaProducts/96.webp", alt: "" },
        { src: "/levanaProducts/95.webp", alt: "" },
        { src: "/levanaProducts/94.webp", alt: "" },
        { src: "/levanaProducts/93.webp", alt: "" },
        { src: "/levanaProducts/92.webp", alt: "" },
        // { src: "/levanaProducts/91.webp", alt: "" },
        // { src: "/levanaProducts/90.webp", alt: "" },
        // { src: "/levanaProducts/89.webp", alt: "" },
        // { src: "/levanaProducts/88.webp", alt: "" },
        { src: "/levanaProducts/87.webp", alt: "" },
        { src: "/levanaProducts/86.webp", alt: "" },
        { src: "/levanaProducts/85.webp", alt: "" },
        { src: "/levanaProducts/84.webp", alt: "" },
        { src: "/levanaProducts/83.webp", alt: "" },
        // { src: "/levanaProducts/82.webp", alt: "" },
        // { src: "/levanaProducts/81.webp", alt: "" },
        // { src: "/levanaProducts/80.webp", alt: "" },
        // { src: "/levanaProducts/79.webp", alt: "" },
        { src: "/levanaProducts/78.webp", alt: "" },
        { src: "/levanaProducts/77.webp", alt: "" },
        { src: "/levanaProducts/76.webp", alt: "" },
        { src: "/levanaProducts/75.webp", alt: "" },
        // { src: "/levanaProducts/74.webp", alt: "" },
        // { src: "/levanaProducts/73.webp", alt: "" },
        { src: "/levanaProducts/72.webp", alt: "" },
        { src: "/levanaProducts/71.webp", alt: "" },
        // { src: "/levanaProducts/70.webp", alt: "" },
        { src: "/levanaProducts/69.webp", alt: "" },
        { src: "/levanaProducts/68.webp", alt: "" },
        { src: "/levanaProducts/67.webp", alt: "" },
        { src: "/levanaProducts/66.webp", alt: "" },
        { src: "/levanaProducts/65.webp", alt: "" },
        { src: "/levanaProducts/64.webp", alt: "" },
        { src: "/levanaProducts/63.webp", alt: "" },
        { src: "/levanaProducts/62.webp", alt: "" },
        { src: "/levanaProducts/61.webp", alt: "" },
        { src: "/levanaProducts/60.webp", alt: "" },
        { src: "/levanaProducts/59.webp", alt: "" },
        { src: "/levanaProducts/58.webp", alt: "" },
        { src: "/levanaProducts/57.webp", alt: "" },
        { src: "/levanaProducts/56.webp", alt: "" },
        { src: "/levanaProducts/55.webp", alt: "" },
        // { src: "/levanaProducts/54.webp", alt: "" },
        { src: "/levanaProducts/53.webp", alt: "" },
        { src: "/levanaProducts/52.webp", alt: "" },
        { src: "/levanaProducts/51.webp", alt: "" },
        { src: "/levanaProducts/50.webp", alt: "" },
        { src: "/levanaProducts/49.webp", alt: "" },
        { src: "/levanaProducts/48.webp", alt: "" },
        { src: "/levanaProducts/47.webp", alt: "" },
        { src: "/levanaProducts/46.webp", alt: "" },
        { src: "/levanaProducts/45.webp", alt: "" },
        { src: "/levanaProducts/44.webp", alt: "" },
        { src: "/levanaProducts/43.webp", alt: "" },
        { src: "/levanaProducts/42.webp", alt: "" },
        { src: "/levanaProducts/41.webp", alt: "" },
        { src: "/levanaProducts/40.webp", alt: "" },
        { src: "/levanaProducts/39.webp", alt: "" },
        { src: "/levanaProducts/38.webp", alt: "" },
        { src: "/levanaProducts/37.webp", alt: "" },
        { src: "/levanaProducts/36.webp", alt: "" },
        { src: "/levanaProducts/35.webp", alt: "" },
        { src: "/levanaProducts/34.webp", alt: "" },
        { src: "/levanaProducts/33.webp", alt: "" },
        { src: "/levanaProducts/32.webp", alt: "" },
        { src: "/levanaProducts/31.webp", alt: "" },
        { src: "/levanaProducts/30.webp", alt: "" },
        { src: "/levanaProducts/29.webp", alt: "" },
        // { src: "/levanaProducts/28.webp", alt: "" },
        { src: "/levanaProducts/27.webp", alt: "" },
        { src: "/levanaProducts/26.webp", alt: "" },
        { src: "/levanaProducts/25.webp", alt: "" },
        { src: "/levanaProducts/24.webp", alt: "" },
        { src: "/levanaProducts/23.webp", alt: "" },
        { src: "/levanaProducts/22.webp", alt: "" },
        { src: "/levanaProducts/21.webp", alt: "" },
        // { src: "/levanaProducts/20.webp", alt: "" },
        { src: "/levanaProducts/19.webp", alt: "" },
        { src: "/levanaProducts/18.webp", alt: "" },
        { src: "/levanaProducts/17.webp", alt: "" },
        { src: "/levanaProducts/16.webp", alt: "" },
        { src: "/levanaProducts/15.webp", alt: "" },
        { src: "/levanaProducts/14.webp", alt: "" },
        { src: "/levanaProducts/13.webp", alt: "" },
        { src: "/levanaProducts/12.webp", alt: "" },
        { src: "/levanaProducts/11.webp", alt: "" },
        { src: "/levanaProducts/10.webp", alt: "" },
        { src: "/levanaProducts/9.webp", alt: "" },
        { src: "/levanaProducts/8.webp", alt: "" },
        { src: "/levanaProducts/7.webp", alt: "" },
        { src: "/levanaProducts/6.webp", alt: "" },
        { src: "/levanaProducts/5.webp", alt: "" },
        { src: "/levanaProducts/4.webp", alt: "" },
        { src: "/levanaProducts/3.webp", alt: "" },
        { src: "/levanaProducts/2.webp", alt: "" },
        { src: "/levanaProducts/1.webp", alt: "" },
      ],
    },
    {
      category: "Table",
      images: [
        { src: "/levanaProducts/70.webp", alt: "" },
        { src: "/levanaProducts/73.webp", alt: "" },
        { src: "/levanaProducts/79.webp", alt: "" },
        { src: "/levanaProducts/81.webp", alt: "" },
        { src: "/levanaProducts/152.webp", alt: "" },
        { src: "/levanaProducts/173.webp", alt: "" },
      ],
    },
    {
      category: "Dining Set",
      images: [],
    },
  ];

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const filteredImages =
    imageCategories.find((category) => category.category === selectedCategory)
      ?.images || [];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        //scroll 300px
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    //  event listener scroll
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Filter Buttons */}
      <div className="container my-4 overflow-x-auto">
        <div className="flex gap-3 px-4 py-2 w-max">
          {imageCategories.map((category) => (
            <button
              key={category.category}
              onClick={() => setSelectedCategory(category.category)}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === category.category
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-800"
              } hover:bg-gray-700 hover:text-white transition duration-200`}
            >
              {category.category}
            </button>
          ))}
        </div>
      </div>
      {/* Download  */}
      <div className="container py-4 flex justify-center items-center">
        <a
          href="/download/All-Products-Levana.pdf"
          className="inline-flex items-center text-lg font-bold text-black text-center hover:text-gray-700 transition duration-300 ease-in-out relative"
        >
          Download All Products <TbDownload className="ml-1" />
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out hover:w-full"></span>
        </a>
      </div>

      {/* Gallery */}
      <div className="container pb-10">
        {filteredImages.length === 0 ? (
          <p className="text-center text-gray-500 text-2xl">
            Oopss filters are not yet available by the Developer.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={700}
                height={700}
                onClick={() => openModal(image)}
                className="cursor-pointer rounded-lg hover:scale-105 transition-transform duration-200"
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div className="relative bg-white rounded-3xl">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1000}
              height={1000}
              className="max-h-[80vh] max-w-[80vw] rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-5 text-black text-3xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Button Up */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-800 bg-opacity-75 hover:bg-opacity-100 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Kembali ke atas"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}

      {/* Footer Download Button */}
      <div className="mb-16 mt-6 flex justify-center">
        <a
          className="inline-flex items-center gap-1 px-6 py-4 text-sm text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
          href="/download/All-Products-Levana.pdf"
        >
          Download All Products <TbDownload className="text-xl" />
        </a>
      </div>
    </>
  );
}
