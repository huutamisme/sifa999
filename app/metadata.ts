export const productType: Record<string, string> = {
  "chat-thong-cong-wc": "Chất thông cống, WC",
  "khu-mui": "Khử mùi",
  "chat-tay-rua": "Chất Tẩy Rửa",
  "nuoc-giat-ui-quan-ao": "Nước Giặt, Ủi Quần Áo",
  "dau-lam-bong": "Dầu Làm Bóng",
  "nuoc-rua-chen": "Nước Rửa Chén",
  "san-pham-cho-oto": "Sản Phẩm Cho Oto",
  "men-vi-sinh": "Men Vi Sinh",
  "nuoc-rua-tay-diet-khuan": "Nước Rửa Tay Diệt Khuẩn",
  "nuoc-xit-phong": "Nước Xịt Phòng"
};

export const metadataConfig = {
  "/gioi-thieu": {
      title: "Giới thiệu | CÔNG TY TNHH SX HÓA MỸ PHẨM SINH PHÁT",
      description: "Chuyên sản xuất các hàng hóa mỹ phẩm, gia dụng và công nghiệp với hơn 100 mặt hàng"
  },
  "/san-pham": {
      title: "Sản phẩm | CÔNG TY TNHH SX HÓA MỸ PHẨM SINH PHÁT",
      description: "Danh sách các sản phẩm nổi bật trên website của chúng tôi.",
  },
  "/san-pham/[typeSlug]": (typeSlug: string) => {
      const vietnameseType = productType[typeSlug] || typeSlug;
      return {
          title: `${vietnameseType} | CÔNG TY TNHH SX HÓA MỸ PHẨM SINH PHÁT`,
          description: `Khám phá các sản phẩm thuộc loại ${vietnameseType}.`,
      };
  },
  "/nha-phan-phoi": {
    title: "Nhà phân phối | CÔNG TY TNHH SX HÓA MỸ PHẨM SINH PHÁT",
    description: "Các nhà phân phối"
  },
  "/tuyen-dung": {
      title: "Tuyển dụng | CÔNG TY TNHH SX HÓA MỸ PHẨM SINH PHÁT",
      description: "Thông tin tuyển dụng"
  },
  "/lien-he": {
      title: "Liên hệ | CÔNG TY TNHH SX HÓA MỸ PHẨM SINH PHÁT",
      description: "Thông tin liên hệ"
  },
};
