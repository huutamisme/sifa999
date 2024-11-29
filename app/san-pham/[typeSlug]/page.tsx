"use client";

import { Products } from "../ProductData";
import { useParams } from "next/navigation";
import NavLayout from "@/components/NavLayout";
import { Product } from "@/types";
import ProductList from "../components/ProductList";
import { convertToSlug } from "@/app/lib/Convertor";

const TypeProduct: React.FC = () => {
    const { typeSlug } = useParams();

    const dataSource: Product[] = Products as Product[];

    const filteredProducts: Product[] = dataSource.filter(
        (product) => convertToSlug(product.type) === typeSlug
    );

    const productType: string = filteredProducts.length > 0 ? filteredProducts[0].type : typeSlug === "nuoc-rua-chen" ? "Nước rửa chén" : "Nước xịt phòng"


    return (
        <NavLayout>
            <h2 className="text-4xl text-background font-bold text-center">Sản phẩm - {productType}</h2>
            <ProductList products={filteredProducts} />
        </NavLayout>
    );
};
export default TypeProduct;
