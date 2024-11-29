import { Metadata } from "next";
import { metadataConfig } from "@/app/metadata";

export async function generateMetadata({ params }: { params: { productSlug: string; typeSlug: string } }): Promise<Metadata> {
    const { productSlug, typeSlug } = params;

    // Lấy hàm metadata từ config
    const metadataFn = metadataConfig["/san-pham/[typeSlug]/[productSlug]"];
    if (typeof metadataFn === "function") {
        return metadataFn(productSlug, typeSlug);
    }

    return {
        title: "Thông tin sản phẩm",
        description: "Thông tin chi tiết về sản phẩm.",
    };
}

export default function ProductSlugLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
