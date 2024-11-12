"use client";
import { TbDownload } from "react-icons/tb";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import { useState } from "react";


export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images1 = [
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
  ];

  const images2 = [
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
  ];

  const images3 = [
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
  ];

  const images4 = [
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
  ];

  const images5 = [
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
  ];

  const images6 = [
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
  ];

  const images7 = [
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
  ];

  const images8 = [
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
  ];

  const images9 = [
    { src: "/levanaProducts/81.webp", alt: "" },
    { src: "/levanaProducts/82.webp", alt: "" },
    { src: "/levanaProducts/83.webp", alt: "" },
    { src: "/levanaProducts/84.webp", alt: "" },
    { src: "/levanaProducts/85.webp", alt: "" },
    { src: "/levanaProducts/86.webp", alt: "" },
    { src: "/levanaProducts/87.webp", alt: "" },
    { src: "/levanaProducts/88.webp", alt: "" },
    { src: "/levanaProducts/89.webp", alt: "" },
  ];

  const images10 = [
    { src: "/levanaProducts/91.webp", alt: "" },
    { src: "/levanaProducts/92.webp", alt: "" },
    { src: "/levanaProducts/93.webp", alt: "" },
    { src: "/levanaProducts/94.webp", alt: "" },
    { src: "/levanaProducts/95.webp", alt: "" },
    { src: "/levanaProducts/96.webp", alt: "" },
    { src: "/levanaProducts/97.webp", alt: "" },
    { src: "/levanaProducts/98.webp", alt: "" },
    { src: "/levanaProducts/99.webp", alt: "" },
  ];

  const images11 = [
    { src: "/levanaProducts/101.webp", alt: "" },
    { src: "/levanaProducts/102.webp", alt: "" },
    { src: "/levanaProducts/103.webp", alt: "" },
    { src: "/levanaProducts/104.webp", alt: "" },
    { src: "/levanaProducts/105.webp", alt: "" },
    { src: "/levanaProducts/106.webp", alt: "" },
    { src: "/levanaProducts/107.webp", alt: "" },
    { src: "/levanaProducts/100.webp", alt: "" },
    { src: "/levanaProducts/90.webp", alt: "" },
  ];

  const images12 = [
    { src: "/levanaProducts/111.webp", alt: "" },
    { src: "/levanaProducts/112.webp", alt: "" },
    { src: "/levanaProducts/113.webp", alt: "" },
    { src: "/levanaProducts/114.webp", alt: "" },
    { src: "/levanaProducts/115.webp", alt: "" },
    { src: "/levanaProducts/108.webp", alt: "" },
    { src: "/levanaProducts/109.webp", alt: "" },
    { src: "/levanaProducts/110.webp", alt: "" },
  ];

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <div className="container pt-4">
        <a
          href="/download/All-Products-Levana.pdf"
          className="inline-flex items-center justify-center w-full pt-4 text-lg font-bold text-black underline text-center sm:text-left"
        >
          Download All Products <TbArrowUpRight />
        </a>
      </div>

      <div className="container pb-10 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex flex-col gap-4">
          {images1.map((image, index) => (
            <div key={index}>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={image.src}
                alt={image.alt}
                width={700}
                height={700}
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {images2.map((image, index) => (
            <div key={index}>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={image.src}
                alt={image.alt}
                width={700}
                height={700}
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {images3.map((image, index) => (
            <div key={index}>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={image.src}
                alt={image.alt}
                width={700}
                height={700}
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {images4.map((image, index) => (
            <div key={index}>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={image.src}
                alt={image.alt}
                width={700}
                height={700}
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {images5.map((image, index) => (
            <div key={index}>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={image.src}
                alt={image.alt}
                width={700}
                height={700}
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {images6.map((image, index) => (
            <div key={index}>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={image.src}
                alt={image.alt}
                width={700}
                height={700}
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {images7.map((image, index) => (
            <div key={index}>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={image.src}
                alt={image.alt}
                width={700}
                height={700}
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {images8.map((image, index) => (
            <div key={index}>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={image.src}
                alt={image.alt}
                width={700}
                height={700}
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {images9.map((image, index) => (
            <div key={index}>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={image.src}
                alt={image.alt}
                width={700}
                height={700}
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {images10.map((image, index) => (
            <div key={index}>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={image.src}
                alt={image.alt}
                width={700}
                height={700}
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {images11.map((image, index) => (
            <div key={index}>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={image.src}
                alt={image.alt}
                width={700}
                height={700}
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {images12.map((image, index) => (
            <div key={index}>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={image.src}
                alt={image.alt}
                width={700}
                height={700}
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </div>

        {/* <div class="flex flex-col gap-4">
                  <div>
                      <Image class="h-auto max-w-full rounded-lg" src="/image/badroom.jpg" alt="" />
                  </div>
                  <div>
                      <Image class="h-auto max-w-full rounded-lg" src="/image/gallery2.jpg" alt="" />
                  </div>
                  <div>
                      <Image class="h-auto max-w-full rounded-lg" src="/image/gallery.jpg" alt="" />
                  </div>
              </div> */}
        {/* <div class="flex flex-col gap-4">
        <div>
          <Image
            class="h-auto max-w-full rounded-lg"
            src="/image/swiper1.jpg"
            alt=""
          />
        </div>
        <div>
          <Image
            class="h-auto max-w-full rounded-lg"
            src="/image/gallery11.jpg"
            alt=""
          />
        </div>
        <div>
          <Image
            class="h-auto max-w-full rounded-lg"
            src="/image/living.jpg"
            alt=""
          />
        </div>
      </div> */}
        {/* <div class="flex flex-col gap-4">
                <div>
                    <Image class="h-auto max-w-full rounded-lg" src="/image/gallery14.jpg" alt="" />
                </div>
                <div>
                    <Image class="h-auto max-w-full rounded-lg" src="/image/gallery15.jpg" alt="" />
                </div>
                <div>
                    <Image class="h-auto max-w-full rounded-lg" src="/image/gallery12.jpg" alt="" />
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <div>
                    <Image class="h-auto max-w-full rounded-lg" src="/image/gallery7.jpg" alt="" />
                </div>
                <div>
                    <Image class="h-auto max-w-full rounded-lg" src="/image/gallery11.jpg" alt="" />
                </div>
                <div>
                    <Image class="h-auto max-w-full rounded-lg" src="/image/gallery3.jpg" alt="" />
                </div>
            </div> */}
      </div>

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
              className="absolute top-2 right-2 text-black text-3xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      <div className="mb-16 mt-6 flex justify-center">
        <a
          className="inline-flex items-center gap-1 px-6 py-4 text-sm text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
          href="/download/All-Products-Levana.pdf"
        >
          Download All Poducts <TbDownload className="text-xl" />
        </a>
      </div>
    </>
  );
}
