"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from "react";

const nav = [
    { href: '/', label: 'HOME' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/products', label: 'PRODUCTS' },
];

export default function Navigation() {
    const pathname = usePathname();
    const [isOpen, setOpen] = useState(false);

    const handleLinkClick = () => {
        setOpen(false); 
    };

    return (
        <>
            {/* Toggle Button for Opening Sidebar */}
            <button className="block lg:hidden" onClick={() => setOpen(!isOpen)}>
                <svg
                    className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>

            {/* Sidebar Navigation */}
            <nav className={`lg:flex lg:justify-center lg:items-center lg:w-full gap-x-6 transform transition ${isOpen ? 'flex flex-col px-8 py-12 z-50 gap-y-6 fixed inset-0 bg-white h-screen right-0 translate-x-0' : 'hidden max-md:translate-x-full'}`}>
                
                {/* Close Button */}
                <button className="absolute top-4 right-4 lg:hidden" onClick={() => setOpen(false)}>
                    <svg
                        className="fill-current h-6 w-6 text-gray-800"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>

                {/* Navigation Links */}
                {nav.map(({ href, label }) => (
                    <Link key={href} href={href} onClick={handleLinkClick} className={`py-2 text-lg ${pathname === href ? 'text-black font-semibold' : 'text-gray-800'}`}>
                        {label}
                    </Link>
                ))}
            </nav>
            
            {/* Overlay Background */}
            <div className={` ${isOpen ? 'fixed inset-0 z-30 bg-black bg-opacity-50' : 'hidden'} `} onClick={() => setOpen(false)}></div>
        </>
    );
}
