"use client";

import { Products } from "../ProductData";
import { useParams } from "next/navigation";
import NavLayout from "@/components/NavLayout";
import { Product } from "@/types";
import Image from "next/image";

const TypeProduct: React.FC = () => {
    const { typeSlug } = useParams();

    const dataSource: Product[] = Products as Product[];

    const filteredProducts: Product[] = dataSource.filter(
        (product) => product.type === typeSlug
    );

    return (
        <NavLayout>
            <div className="space-y-5 mt-4">
                {filteredProducts.length === 0 ? (
                    <h2 className="text-3xl text-center text-red-500">Chưa có sản phẩm</h2>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 relative">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="card bg-base-100 shadow-xl flex items-center border border-2">
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
                                        <strong>Giá: {product.price.toLocaleString('vi-vn')} VNĐ</strong>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </NavLayout>
    );
};

export default TypeProduct;
