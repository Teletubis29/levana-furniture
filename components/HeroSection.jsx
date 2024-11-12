import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="bg-zinc-50">
      <div className="container py-8 text-center lg:py-0 lg:text-left lg:flex lg:justify-between ">
        <div className="lg:w-1/2 xl:py-14 lg:py-8">
          <p className="tracking-widest">BEST OFFER FOR BEST QUALITY</p>
          <h1 className="py-4 text-3xl font-extrabold leading-tight text-gray-800 xl:text-6xl lg:text-4xl">
            Levana Living
            <br />
          </h1>
          <p className="pb-6 text-gray-500 xl:pb-10">
            {/* Change your view with the best interior design. <br /> We provide the best interior design for your Home. <br />Make every moment beautiful with the best interior design. */}
            As a leading Indonesian exporter of premium teak, rattan, and steel
            furniture. <br />
            With 28 years of experience, Levana living combine traditional
            craftsmanship with modern design to deliver durable indoor and
            outdoor pieces.
            <br />
            <br />
            We are seeking global partners and buyers. Please explore our
            catalog for more details. Feel free to reach out for inquiries or
            collaboration opportunities.
          </p>
          <Link
            href="https://wa.me/628119695999?text=Halo%20saya%20ingin%20menghubungi%20Anda,%20Bisa%20Bantu%20saya%20LEVANA?"
            passHref
          >
            <button className="inline-flex items-center px-8 py-2 text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 ">
              Contact Us <TbArrowUpRight className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </div>

        <div className="w-1/2">
          <Image
            src="/image/kitchen.png"
            width={800}
            height={500}
            alt=""
            className="absolute right-0 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px]  hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
}
