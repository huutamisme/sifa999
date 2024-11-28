import { Products } from "../san-pham/ProductData";
import { Product } from "@/types";
import ProductList from "../san-pham/components/ProductList";

const BestSellingProducts: React.FC = () => {

    const hotProducts: Product[] = Products.filter(
        (product) => product.badge === "hot"
    );

    return (
        <ProductList products={hotProducts} />
    );
}
export default BestSellingProducts;