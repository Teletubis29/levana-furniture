import Image from "next/image";

export default function AboutComponent() {
  return (
    <div className="container py-16">
      <div className="flex flex-col items-center justify-between pb-4 lg:flex-row">
        <a
          className="py-4 text-center text-3xl font-extrabold leading-tight text-gray-800 lg:text-5xl lg:text-left"
          href=""
        >
          We ship our products worldwide <br />
          To bring our quality and style to homes across the globe.
        </a>
      </div>

      <div className="grid lg:grid-cols-2 place-items-center ">
        <div>
          <Image
            src="/image/aboutfront.png"
            width={900}
            height={500}
            alt=""
            className="max-md:hidden"
          />
        </div>

        <div className="items-center">
          <p className="pb-4 lg:text-left lg:px-6 text-center px-4">
            Since 1996 , Levana Living is a trusted name in premium, compact
            furniture solutions that bring elegance and functionality to any
            space. Known for high-quality craftsmanship, we specialize in custom
            designs that make the most of durable materials like teak wood,
            rattan, and steel, offering long-lasting beauty for both indoor and
            outdoor environments. Our teak furniture combines natural charm with
            resilience, ideal for withstanding diverse climates. Whether you &apos; re
            looking for compact, versatile furniture pieces for small spaces or
            larger statement pieces, Levana Living can meet your needs.
          </p>
          {/* <div className="flex px-12 pt-4 gap-x-4 ">
            <Image
              src="/image/awards.png"
              width={100}
              height={80}
              alt=""
              className=" h-[100px]"
            />
            <Image
              src="/image/awards1.png"
              width={100}
              height={80}
              alt=""
              className=" h-[100px]"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
