"use client";
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/types';

const navItem: NavItem[] = [
    { name: "Trang chủ", href: "/" },
    { name: "Giới thiệu", href: "/about" },
    { name: "Sản phẩm", href: "/products" },
    { name: "Nhà phân phối", href: "/distributor" },
    { name: "Tuyển dụng", href: "/recruitment" },
    { name: "Liên hệ", href: "/contact" },
]


const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathName = usePathname();

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="flex justify-center w-full bg-background">
            <div className="container px-6 py-4 flex justify-between items-center text-white">
                {/* Desktop menu */}
                <ul className="font-semibold hidden lg:flex w-full justify-center">
                    {navItem.map((item, index) => (
                        <div key={index} className='flex '>
                            <li className='flex items-center justify-center w-full'>
                                <Link
                                    href={item.href}
                                    passHref
                                    className={`py-2 px-4 hover:underline w-full text-md xl:text-2xl text-center ${pathName === item.href ? 'underline' : ''}`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                            {index < navItem.length - 1 && <span className="flex items-center mx-2 text-2xl">/</span>}
                        </div>
                    ))}
                </ul>

                {/* Hamburger button */}
                <div className="lg:hidden">
                    <button
                        className="btn btn-ghost"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-16 left-0 w-full bg-base-100 shadow-lg z-50 text-background">
                    <ul className="space-y-2 font-semibold flex flex-col p-4 text-customBlue">
                        {navItem.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    passHref
                                    className={`py-2 px-4 hover:underline text-2xl ${pathName === item.href ? 'underline' : ''}`}
                                    onClick={handleLinkClick}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
export default Navbar;
