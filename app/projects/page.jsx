"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Projects() {
  const [showButton, setShowButton] = useState(false);

  const projects = [
    {
      id: 1,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/1.webp",
      link: "",
    },
    {
      id: 2,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/2.webp",
      link: "",
    },
    {
      id: 3,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/3.webp",
      link: "",
    },
    {
      id: 4,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/4.webp",
      link: "",
    },
    {
      id: 5,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/5.webp",
      link: "",
    },
    {
      id: 6,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/6.webp",
      link: "",
    },
    {
      id: 7,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/7.webp",
      link: "",
    },
    {
      id: 8,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/8.webp",
      link: "",
    },
    {
      id: 9,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/9.webp",
      link: "",
    },
    {
      id: 10,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/10.webp",
      link: "",
    },
    {
      id: 11,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/11.webp",
      link: "",
    },
    {
      id: 12,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/12.webp",
      link: "",
    },
    // {
    //   id: 13,
    //   name: "Drowing room for family time",
    //   description:
    //     "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
    //   image: "/our-project/13.webp",
    //   link: "",
    // },
    {
      id: 14,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/14.webp",
      link: "",
    },
    {
      id: 15,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/15.webp",
      link: "",
    },
    {
      id: 17,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/17.webp",
      link: "",
    },
    {
      id: 18,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/18.webp",
      link: "",
    },
    {
      id: 19,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/19.webp",
      link: "",
    },
    {
      id: 20,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/20.webp",
      link: "",
    },
    {
      id: 21,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/21.webp",
      link: "",
    },
    {
      id: 22,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/22.webp",
      link: "",
    },
    {
      id: 23,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/23.webp",
      link: "",
    },
    {
      id: 24,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/24.webp",
      link: "",
    },
    {
      id: 25,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/25.webp",
      link: "",
    },
    {
      id: 26,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/26.webp",
      link: "",
    },
    {
      id: 27,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/27.webp",
      link: "",
    },
    {
      id: 28,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/28.webp",
      link: "",
    },
    {
      id: 29,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/40.webp",
      link: "",
    },
    {
      id: 30,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/30.webp",
      link: "",
    },
    {
      id: 31,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/31.webp",
      link: "",
    },
    {
      id: 32,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/32.webp",
      link: "",
    },
    {
      id: 33,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/39.webp",
      link: "",
    },
    {
      id: 34,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/34.webp",
      link: "",
    },
    {
      id: 36,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/36.webp",
      link: "",
    },
    {
      id: 37,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/33.webp",
      link: "",
    },
    // {
    //   id: 38,
    //   name: "Drowing room for family time",
    //   description:
    //     "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
    //   image: "/our-project/38.webp",
    //   link: "",
    // },
    {
      id: 39,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/37.webp",
      link: "",
    },
    {
      id: 40,
      name: "Drowing room for family time",
      description:
        "Bedroom with a clean and comfortable design for your family. Charming with a modern design.",
      image: "/our-project/29.webp",
      link: "",
    },
  ];

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
    <div className="">
      <div className="bg-[url('/our-project/12.png')] bg-center bg-cover ">
        <h1 className="container py-64 text-5xl sm:text-5xl md:text-6xl font-semibold tracking-widest text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)] relative -top-10">
          OUR PROJECTS
        </h1>
      </div>
      <div className="container grid grid-cols-2 gap-8 py-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Container Image dengan efek zoom saat hover */}
            <div className="transform transition-transform duration-500 group-hover:scale-105">
              <Image
                src={project.image}
                width={480}
                height={380}
                alt=""
                className="w-full "
              />
            </div>

            {/* Overlay yang muncul dari bawah dengan efek fade */}
            <div className="absolute bottom-0 flex-col items-center justify-end w-full p-6 text-xl text-white bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              {/* <h1 className="text-2xl font-semibold">{project.name}</h1>
              <p className="py-4 text-sm">{project.description}</p> */}
            </div>
          </div>
        ))}
      </div>
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
    </div>
  );
}
