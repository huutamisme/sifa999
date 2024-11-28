"use client";

import { Products } from "../ProductData";
import { useParams } from "next/navigation";
import NavLayout from "@/components/NavLayout";
import { Product } from "@/types";
import ProductList from "../components/ProductList";

const TypeProduct: React.FC = () => {
    const { typeSlug } = useParams();

    const dataSource: Product[] = Products as Product[];

    const filteredProducts: Product[] = dataSource.filter(
        (product) => product.type === typeSlug
    );

    return (
        <NavLayout>
            <ProductList products={filteredProducts} />
        </NavLayout>
    );
};
export default TypeProduct;
