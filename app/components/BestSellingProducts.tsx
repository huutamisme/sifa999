import Image from "next/image"
import { BSProducts } from "./BSProductData";

const BestSellingProducts: React.FC = () => {
    return (
        <div className="space-y-5 px-10 py-4">
            {BSProducts.length === 0 ? (
                <h2 className="text-3xl text-center text-red-500">Chưa có sản phẩm</h2>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 relative">
                    {BSProducts.map((product) => (
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
                                    <strong>Giá: {product.price.toLocaleString('vi-vn')}</strong>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default BestSellingProducts;