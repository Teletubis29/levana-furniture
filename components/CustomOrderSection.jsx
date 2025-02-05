import Link from "next/link";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";

const CustomOrderSection = () => {
  return (
    <>
      <div className="bg-zinc-50">
        <div className="container py-8 text-center lg:py-0 lg:text-left lg:flex lg:justify-between ">
          <div className="lg:w-1/2 xl:py-14 lg:py-8">
            {/* <p className="tracking-widest">BEST OFFER FOR BEST QUALITY</p> */}
            <h1 className="py-4 text-3xl font-extrabold leading-tight text-gray-800 xl:text-6xl lg:text-4xl">
              Looking for Custom Furniture?
              <br />
            </h1>
            <p className="pb-6 text-gray-500 ">
              {/* Change your view with the best interior design. <br /> We provide the best interior design for your Home. <br />Make every moment beautiful with the best interior design. */}
              Levana Living is here to help you create furniture tailored to
              your preferences and needs. With our custom order service, you can
              choose the size, material, color, and design that perfectly match
              your space and lifestyle.
              <br />
            </p>
            <p className="text-xl font-semibold text-gray-800 mb-8">
              Make Your Dream Furniture a Reality!
            </p>
            <Link href="/custom-order" passHref>
              <button
                className="relative inline-flex items-center px-8 py-2 text-white text-xl rounded-md shadow-lg bg-black focus:outline-none 
  animate-[pulse_1.5s_infinite] from-black to-red-700 bg-gradient-to-r bg-[length:100%_100%] hover:ring-2 hover:ring-gray-950 ring-offset-2"
              >
                Order Custom Now
                <TbArrowUpRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 rounded-md bg-red-900 opacity-20 blur-md"></span>
              </button>
            </Link>
          </div>

          <div className="w-1/2">
            <Image
              src="/image/custom-order4.png"
              width={800}
              height={500}
              alt=""
              className=" right-0 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px]  hidden lg:block rounded-3xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomOrderSection;
