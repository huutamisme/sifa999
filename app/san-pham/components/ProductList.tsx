"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types";
import Link from "next/link";

interface ProductListProps {
    products: Product[];
}

const ITEMS_PER_PAGE = 9;

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

    const paginatedProducts = products.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className="space-y-5 mt-4">
            {products.length === 0 ? (
                <h2 className="text-3xl text-center text-red-500">Chưa có sản phẩm</h2>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 relative">
                        {paginatedProducts.map((product) => (
                            <Link
                                href={`./${product.name}`}
                                key={product.id}
                                className="card bg-base-100 shadow-xl flex items-center border border-2"
                            >
                                <div className="card-body flex items-center text-black">
                                    <div className="card-title text-center flex items-center justify-center min-h-[50px]">
                                        <h2>{product.name}</h2>
                                    </div>
                                    <figure className="flex items-center justify-center h-[200px] w-full">
                                        <Image
                                            src={product.img}
                                            alt={`Product ${product.id} image`}
                                            width={250}
                                            height={150}
                                            className="object-contain h-full"
                                        />
                                    </figure>
                                    <div className="flex items-center justify-center px-10 py-2 min-h-[50px]">
                                        <strong>
                                            Giá: {product.price.toLocaleString("vi-vn")} VNĐ
                                        </strong>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {products.length >= 9 ? (
                        <div className="flex justify-center items-center space-x-3 mt-5">
                            <button
                                className={`btn text-white ${currentPage === 1 ? "btn-disabled" : "bg-background"}`}
                                onClick={() => handlePageChange(currentPage - 1)}
                            >
                                Trang trước
                            </button>
                            <span className="text-xl">
                                Trang {currentPage} / {totalPages}
                            </span>
                            <button
                                className={`btn text-white ${currentPage === totalPages ? "btn-disabled" : "bg-background"
                                    }`}
                                onClick={() => handlePageChange(currentPage + 1)}
                            >
                                Trang sau
                            </button>
                        </div>
                    ) :
                        ''
                    }
                </>
            )}
        </div>
    );
};

export default ProductList;
