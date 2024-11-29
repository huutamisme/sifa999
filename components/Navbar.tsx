"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/types';

const navItem: NavItem[] = [
    { name: "Trang chủ", href: "/" },
    { name: "Giới thiệu", href: "/gioi-thieu" },
    { name: "Sản phẩm", href: "/san-pham" },
    { name: "Nhà phân phối", href: "/nha-phan-phoi" },
    { name: "Tuyển dụng", href: "/tuyen-dung" },
    { name: "Liên hệ", href: "/lien-he" },
];

const Navbar: React.FC = () => {
    const pathName = usePathname();

    return (
        <nav className="flex justify-center w-full bg-background">
            <div className="container px-6 py-4 flex justify-between items-center text-white">
                {/* Desktop menu */}
                <ul className="font-semibold hidden lg:flex w-full justify-center space-x-6">
                    {navItem.map((item, index) => (
                        <li key={index} className="flex items-center">
                            <div className="flex items-center justify-center w-full">
                                <Link
                                    href={item.href}
                                    passHref
                                    className={`py-2 px-4 hover:underline w-full text-md md:text-lg lg:text-xl xl:text-2xl text-center ${pathName === item.href ? 'underline' : ''}`}
                                >
                                    {item.name}
                                </Link>
                            </div>
                            {index < navItem.length - 1 && <span className="text-2xl mx-2">/</span>}
                        </li>
                    ))}
                </ul>

                {/* Mobile menu */}
                <ul className="lg:hidden flex flex-col space-y-4 w-full p-4">
                    {navItem.map((item, index) => (
                        <li key={index} className="flex justify-center">
                            <Link
                                href={item.href}
                                passHref
                                className={`py-2 px-4 hover:underline text-md sm:text-lg md:text-xl text-center ${pathName === item.href ? 'underline' : ''}`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
