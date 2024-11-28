import Link from "next/link";

interface SubCategory {
    name: string;
    href: string;
}

interface Category {
    name: string;
    href: string;
    subCategories?: SubCategory[];
}

const categories: Category[] = [
    { name: "Chất Thông Cống, WC", href: "/chat-thong-cong-wc" },
    { name: "Khử Mùi", href: "/khu-mui" },
    {
        name: "Chất Tẩy Rửa",
        href: "/chat-tay-rua",
        subCategories: [
            { name: "Nước Tẩy Trắng", href: "/nuoc-tay-trang" },
            { name: "Chất Rửa Máy", href: "/chat-rua-may" },
            { name: "Nước Lau Bếp", href: "/nuoc-lau-bep" },
            { name: "Nước Rửa Kiếng", href: "/nuoc-rua-kieng" },
            { name: "Nước Tẩy Gạch, Men, Sứ", href: "/nuoc-tay-gach-men-su" },
            { name: "Nước Lau Sàn", href: "/nuoc-lau-san" },
            { name: "Nước Tẩy Nhôm", href: "/nuoc-tay-nhom" },
        ],
    },
    { name: "Nước Giặt, Ủi Quần Áo", href: "/nuoc-giat-ui-quan-ao" },
    { name: "Dầu Làm Bóng", href: "/dau-lam-bong" },
    { name: "Nước Rửa Chén", href: "/nuoc-rua-chen" },
    { name: "Sản Phẩm Cho Oto", href: "/san-pham-cho-oto" },
    { name: "Men Vi Sinh", href: "/men-vi-sinh" },
    {
        name: "Nước Rửa Tay Diệt Khuẩn",
        href: "/nuoc-rua-tay-diet-khuan",
        subCategories: [
            { name: "Dung Dịch", href: "/dung-dich" },
            { name: "Gel", href: "/gel" }
        ]
    },
    { name: "Nước Xịt Phòng", href: "/nuoc-xit-phong" }
];

const Listing: React.FC = () => {
    return (
        <div>
            <p className="bg-background text-white text-2xl text-center rounded-t-lg p-3">Danh mục sản phẩm</p>
            <ul className="menu menu-lg bg-base-200">
                {categories.map((category, index) => (
                    <li key={index}>
                        {category.subCategories && category.subCategories.length > 0 ? (
                            <details>
                                <summary>
                                    <Link href={`san-pham/${category.href}`}>
                                        {category.name}
                                    </Link>
                                </summary>
                                <ul>
                                    {category.subCategories.map((subCategory, subIndex) => (
                                        <li key={subIndex}>
                                            <Link href={`san-pham/${subCategory.href}`}>
                                                {subCategory.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        ) : (
                            <Link href={`san-pham/${category.href}`}>
                                {category.name}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Listing;
