"use client";

import Link from "next/link";
import { useState } from "react";
import { Category } from "@/types";
import { convertToSlug } from "@/app/lib/Convertor";

const categories: Category[] = [
    { name: "Chất Thông Cống, WC" },
    { name: "Khử Mùi" },
    {
        name: "Chất Tẩy Rửa",
        subCategories: [
            { name: "Nước Tẩy Trắng" },
            { name: "Chất Rửa Máy" },
            { name: "Nước Lau Bếp" },
            { name: "Nước Rửa Kiếng" },
            { name: "Nước Tẩy Gạch, Men, Sứ" },
            { name: "Nước Lau Sàn" },
            { name: "Nước Tẩy Nhôm" },
        ],
    },
    { name: "Nước Giặt, Ủi Quần Áo" },
    { name: "Dầu Làm Bóng" },
    { name: "Nước Rửa Chén" },
    { name: "Sản Phẩm Cho Oto" },
    { name: "Men Vi Sinh" },
    {
        name: "Nước Rửa Tay Diệt Khuẩn",
        subCategories: [
            { name: "Dung Dịch" },
            { name: "Gel" }
        ]
    },
    { name: "Nước Xịt Phòng" }
];

const Listing: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-background text-white">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 lg:hidden">
                <p className="text-2xl font-semibold">Danh mục sản phẩm</p>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white focus:outline-none"
                    aria-label="Toggle menu"
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

            {/* Hamburger menu for small screens */}
            {isMenuOpen && (
                <ul className="menu menu-lg bg-base-200 lg:hidden p-4 space-y-2">
                    {categories.map((category, index) => (
                        <li key={index} className="text-black">
                            {category.subCategories && category.subCategories.length > 0 ? (
                                <details>
                                    <summary>
                                        <Link href={`/san-pham/${convertToSlug(category.name)}`}>
                                            {category.name}
                                        </Link>
                                    </summary>
                                    <ul>
                                        {category.subCategories.map((subCategory, subIndex) => (
                                            <li key={subIndex}>
                                                <Link href={`/san-pham/${convertToSlug(subCategory.name)}`}>
                                                    {subCategory.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            ) : (
                                <Link href={`/san-pham/${convertToSlug(category.name)}`}>
                                    {category.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            )}

            {/* Desktop menu */}
            <div className="hidden lg:block">
                <p className="bg-background text-white text-2xl text-center p-3">
                    Danh mục sản phẩm
                </p>
                <ul className="menu menu-lg bg-base-200 text-black">
                    {categories.map((category, index) => (
                        <li key={index}>
                            {category.subCategories && category.subCategories.length > 0 ? (
                                <details>
                                    <summary>
                                        <Link href={`/san-pham/${convertToSlug(category.name)}`}>
                                            {category.name}
                                        </Link>
                                    </summary>
                                    <ul>
                                        {category.subCategories.map((subCategory, subIndex) => (
                                            <li key={subIndex}>
                                                <Link href={`/san-pham/${convertToSlug(subCategory.name)}`}>
                                                    {subCategory.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            ) : (
                                <Link href={`/san-pham/${convertToSlug(category.name)}`}>
                                    {category.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Listing;
