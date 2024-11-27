import Image from "next/image"
import { products } from "./ProductsData";

const BestSellingProducts: React.FC = () => {
    return (
        <div className="space-y-5 px-10 py-4">
            {products.length === 0 ? (
                <h2 className="text-3xl text-center text-customBlue">Không có sản phẩm nào!</h2>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 relative">
                    {products.map((product) => (
                        <div key={product.id} className="card bg-base-200 shadow-xl flex items-center">
                            <figure>
                                <Image src={product.img} alt={`Product ${product.id + 1} image `} width={500} height={200} />
                            </figure>
                            <div className="card-body flex items-center text-black">
                                <h2 className="card-title text-center text-background">{product.name}</h2>
                                <div className="flex bg-base-100 px-10 py-2">
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