"use client";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CatalogSwiperSection() {
  return (
    <div className="py-8 lg:py-28">
      <div className="container grid pb-8 lg:grid-cols-2">
        <div className="text-left ">
          <h1 className="py-4 text-4xl font-medium lg:text-6xl lg:py-0">
            Modern Classic
          </h1>
        </div>
        <div>
          <h2 className="pb-6 text-xl font-bold tracking-wider">
            LUXURY DECOR TO CREATE COMFORT IN OUR HOME
          </h2>
          <div className="grid grid-cols-2 text-gray-500 gap-x-8">
            <div>
              <p>
                With our passion for design and decor, we have created a
                collection of furniture and accessories that will help you
                create a comfortable and stylish home.
              </p>
            </div>
            <div>
              <p>
                We create distinctive and unique designs that are inspired by
                the latest trends in interior design and fashion.
              </p>
              <a
                href="/products"
                className="inline-flex items-center pt-4 text-lg font-bold text-black underline"
              >
                View Product Here <TbArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image
            src="/levanaProducts/86.webp"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/levanaProducts/87.webp"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/levanaProducts/68.webp"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/levanaProducts/77.webp"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/levanaProducts/67.webp"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/levanaProducts/53.webp"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Image
            src="/levanaProducts/101.webp"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/levanaProducts/112.webp"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/levanaProducts/98.webp"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
