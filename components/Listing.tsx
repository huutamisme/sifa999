import Link from "next/link";
import { Category } from "@/types";
import { convertToSlug } from "@/app/lib/Convertor";

const categories: Category[] = [
    { name: "Chất Thông Cống, WC" },
    { name: "Khử Mùi" },
    {
        name: "Chất Tẩy Rửa",
        subCategories: [
            { name: "Nước Tẩy Trắng" },
            { name: "Chất Rửa Máy" },
            { name: "Nước Lau Bếp" },
            { name: "Nước Rửa Kiếng" },
            { name: "Nước Tẩy Gạch, Men, Sứ" },
            { name: "Nước Lau Sàn" },
            { name: "Nước Tẩy Nhôm" },
        ],
    },
    { name: "Nước Giặt, Ủi Quần Áo" },
    { name: "Dầu Làm Bóng" },
    { name: "Nước Rửa Chén" },
    { name: "Sản Phẩm Cho Oto" },
    { name: "Men Vi Sinh" },
    {
        name: "Nước Rửa Tay Diệt Khuẩn",
        subCategories: [
            { name: "Dung Dịch" },
            { name: "Gel" }
        ]
    },
    { name: "Nước Xịt Phòng" }
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
                                    <Link href={`/san-pham/${convertToSlug(category.name)}`}>
                                        {category.name}
                                    </Link>
                                </summary>
                                <ul>
                                    {category.subCategories.map((subCategory, subIndex) => (
                                        <li key={subIndex}>
                                            <Link href={`/san-pham/${convertToSlug(category.name)}`}>
                                                {subCategory.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        ) : (
                            <Link href={`/san-pham/${convertToSlug(category.name)}`}>
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
