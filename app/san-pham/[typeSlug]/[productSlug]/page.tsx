"use client";

import NavLayout from "@/components/NavLayout";
import { useParams } from "next/navigation";
import { Product } from "@/types";
import { Products } from "../../ProductData";
import ProductList from "../../components/ProductList";
import Image from "next/image";
import { convertToSlug } from "@/app/lib/Convertor";

const DetailProduct: React.FC = () => {
    const { typeSlug, productSlug } = useParams();

    const dataSource: Product[] = Products as Product[];

    // Lọc các sản phẩm theo `typeSlug`
    const filteredProductsByType: Product[] = dataSource.filter(
        (product) => convertToSlug(product.type) === typeSlug
    );

    // Tìm selectedProduct
    const selectedProduct: Product | undefined = filteredProductsByType.find(
        (product) => convertToSlug(product.name) === productSlug
    );

    // Tạo danh sách sản phẩm liên quan bằng cách loại bỏ `selectedProduct`
    const relatedProducts: Product[] = filteredProductsByType.filter(
        (product) => convertToSlug(product.name) !== productSlug
    );

    return (
        <NavLayout>
            <h2 className="text-4xl text-background font-bold text-center">Chi tiết sản phẩm</h2>
            {selectedProduct ? (
                <div
                    key={selectedProduct.id}
                    className="card bg-base-100 shadow-xl w-full border border-2 my-4 flex flex-col lg:flex-row items-center lg:items-start h-auto lg:h-[350px] overflow-hidden"
                >
                    {/* Hình ảnh sản phẩm */}
                    <figure className="flex-shrink-0 w-full lg:w-[200px] h-[200px] lg:h-full overflow-hidden">
                        <Image
                            src={selectedProduct.img}
                            alt="Product image"
                            width={200}
                            height={250}
                            className="object-contain w-full h-full"
                        />
                    </figure>

                    {/* Nội dung sản phẩm */}
                    <div className="flex-grow overflow-hidden p-4 lg:p-6">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 lg:mb-4">{selectedProduct.name}</h3>
                        <div className="text-sm sm:text-base lg:text-lg mb-2">
                            <strong>Mã Số:</strong> {selectedProduct.id}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm sm:text-base lg:text-lg mb-2">
                            <div>
                                <strong>Giá Bán: </strong>
                                {selectedProduct.price.toLocaleString("vi-vn")} VNĐ
                            </div>
                            <p className="text-yellow-500 font-semibold mt-2 sm:mt-0">
                                (Đối với đối tác có mã số thành viên sẽ nhận được chính sách ưu đãi riêng)
                            </p>
                        </div>
                        <div className="text-sm sm:text-base lg:text-lg mb-2">
                            <strong>Thể Tích Thực:</strong> {selectedProduct.volume}
                        </div>
                        <div className="text-sm sm:text-base lg:text-md">
                            {selectedProduct.description}
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-red-500 text-center">Không tìm thấy sản phẩm!</p>
            )}

            <h2 className="text-4xl text-background font-bold text-center">Sản phẩm cùng loại</h2>
            <ProductList products={relatedProducts} />
        </NavLayout>
    );
};
export default DetailProduct;

