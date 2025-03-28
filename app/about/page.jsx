import Image from "next/image";
import VidioSection from "@/components/VidioSection";
import CustomOrderSection from "@/components/CustomOrderSection";

export default function About() {
  return (
    <div>
      <div className="bg-[url('/our-project/10.png')] bg-center bg-cover ">
        <h1 className="container py-32 text-5xl sm:text-5xl md:text-6xl font-semibold tracking-widest text-center text-white  drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)] relative -top-10 lg:py-64 lg:text-left ">
          WHO ARE WE?
        </h1>
      </div>
      {/* <div className="container md:px-6 mx-auto p-4">
        <h1 className="text-3xl font-bold my-4 md:my-8 text-center">
          Our Factory
        </h1>
        <VidioSection videoId="NHJ_L82nBp4" />
      </div> */}
      <div className="container ">
        <div className="py-4 lg:py-8">
          <h2 className="p-4 text-3xl font-semibold text-center lg:p-16 lg:text-5xl">
            We have great idea for Interior & Exterior
          </h2>
          <div className="flex flex-col text-center lg:flex-row lg:text-left items-center lg:items-stretch space-y-4 lg:space-y-0 lg:space-x-8">
            <div className="overflow-hidden group">
              <Image
                src="/our-project/14.webp"
                width={400}
                height={400}
                alt="Timeless Craftsmanship"
                className="transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col justify-center lg:w-1/2">
              <p className="text-2xl font-medium">
                Timeless Craftsmanship,
                <br />
              </p>
              <p className="text-2xl font-medium">
                Craftsmanship Rooted in Tradition
              </p>
              <p className="pt-3">
                Our commitment to exquisite design and traditional <br />
                craftsmanship ensures each piece reflects Indonesia&apos;s rich
                heritage and timeless elegance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <CustomOrderSection />
      </div>
      <div className="container">
        <div className="items-center lg:flex gap-x-8">
          <div className=""></div>
          <div className=""></div>
        </div>
        <div className="bg-white rounded-2xl">
          <div className="py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
              <div>
                <Image
                  src="/our-project/34.webp"
                  width={700}
                  height={700}
                  alt=""
                  className=" overflow-hidden"
                />
                <h2 className="text-xl font-bold mb-2 text-gray-800 mt-4">
                  Craftsmanship
                </h2>
                <p className="text-gray-600 mb-4">
                  We take pride in our traditional skills to create high quality
                  furniture
                </p>
              </div>
              <div>
                <Image
                  src="/our-project/3.webp"
                  width={700}
                  height={700}
                  alt=""
                  className=" overflow-hidden"
                />
                <h2 className="text-xl font-bold mb-2 text-gray-800 mt-4">
                  Durability
                </h2>
                <p className="text-gray-600 mb-4">
                  We design and build pieces that last, uning premium teak,
                  rattan, and steel
                </p>
              </div>
              <div>
                <Image
                  src="/our-project/global.webp"
                  width={700}
                  height={700}
                  alt=""
                  className=" overflow-hidden"
                />
                <h2 className="text-xl font-bold  text-gray-800 mt-4">
                  Global Partnership
                </h2>
                <p className="text-gray-600 mb-4">
                  We seek to build strong relationships with partners and buyers
                  worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
