import { Metadata } from "next";
import { Product } from "@/types";
import { Products } from "../../ProductData";
import { convertToSlug } from "@/app/lib/Convertor";


type Props = {
    params: Promise<{ productSlug: string }>
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const productSlug = (await params).productSlug;

    const dataSource: Product[] = Products as Product[];
    // Tìm sản phẩm cụ thể
    const selectedProduct: Product | undefined = dataSource.find(
        (product) => convertToSlug(product.name) === productSlug
    );
    return {
        title: `${selectedProduct?.name || "Sản phẩm không tồn tại"}`,
        description: `Thông tin chi tiết về sản phẩm ${selectedProduct?.name || "không tồn tại"}.`,
    };
}

export default function ProductSlugLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
