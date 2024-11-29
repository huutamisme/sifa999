import { Metadata } from "next";
import { metadataConfig } from "@/app/metadata";

export async function generateMetadata({ params }: { params: { typeSlug: string } }): Promise<Metadata> {
    const { typeSlug } = params;

    // Sử dụng metadataConfig để tạo metadata
    const metadataFn = metadataConfig["/san-pham/[typeSlug]"];
    return metadataFn(typeSlug);
}

export default function TypeSlugLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
