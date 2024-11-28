import ProductList from "./components/ProductList";
import NavLayout from "@/components/NavLayout";
import { Products } from "./ProductData";

const Product: React.FC = () => {
    return (
        <NavLayout>
            <h2 className="text-4xl text-background font-bold text-center">Sản phẩm</h2>
            <ProductList products={Products} />
        </NavLayout>
    );
};
export default Product;
