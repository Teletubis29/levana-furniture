"use client";
import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function CatalogueSection() {
    const items = [
        {
            id: "01",
            catagory: "CHAIR",
            title: "Elegant Wooden Lounge Chair",
            image: "/image/chairs.jpg",
            description: "Experience a blend of style and relaxation with this elegant wooden lounge chair. Crafted with premium materials, it adds a touch of luxury and comfort to your living space, perfect for unwinding at the end of the day.",
        },
        {
            id: "02",
            catagory: "TABLE",
            title: "Elegant and Versatile for Every Need",
            image: "/image/tables.jpg",
            description: "A selection of tables designed to meet all your needs, from comfortable dining tables to functional work desks. Each table combines modern aesthetics with top durability.",
        },
        {
            id: "03",
            catagory: "DINING SET",
            title: "Timeless Dining Sets for Every Space",
            image: "/image/living.jpg",
            description: "Elevate your dining space with our versatile dining sets, crafted for comfort, style, and durability. Perfect for intimate dinners or larger gatherings, each set brings warmth and timeless appeal to your home.",
        },
        {
            id: "04",
            catagory: "SOFA",
            title: "Elegant and Comfortable Sofas for Every Space",
            image: "/image/sofas.jpg",
            description: "Discover our range of sofas, designed for ultimate comfort and style. Each piece is crafted with high-quality materials to provide a cozy and inviting atmosphere in your living room, adding both beauty and durability to your space.",
        },
    ]

    return (
        <div className="grid gap-8 divide-gray-300 lg:divide-x lg:gap-0 lg:grid-cols-4 md:grid-cols-2">
            {items.map((item) => (
                <div key={item.id} className="relative overflow-hidden group">
                    <div>
                        <Image src={item.image} width={380} height={100} alt="" className="w-full " />
                    </div>
                    <div className="absolute top-0 p-8 m-12 bg-white bg-opacity-60 backdrop-blur">
                        <div className="flex justify-between pb-4 ">
                            <p className="text-sm">{item.catagory}</p>
                            <span className="text-sm ">{item.id}</span>
                        </div>
                        <a className="block text-xl font-semibold" href="">{item.title}</a>
                        <p className="py-4 text-gray-500">{item.description}</p>
                        {/* <a className="inline-flex items-center font-medium" href="">See Details <TbArrowNarrowRight className="ml-2 text-xl " /></a> */}
                    </div>

                    <div className="inset-0 flex-col items-center justify-end hidden gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 md:flex md:absolute group-hover:translate-y-full md:border-b-0 bg-zinc-100">
                        <p className="tracking-wider -rotate-90 ">{item.catagory} </p>
                        <span className="">
                            {item.id}
                        </span>

                    </div>
                </div>
            ))}
        </div>
    )
}