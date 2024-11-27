import NavLayout from "../components/NavLayout";
import BestSellingProducts from "./components/BestSellingProducts";

export default function Home() {
  return (
    <NavLayout>
      <div className="flex justify-center md:justify-start items-baseline px-10 ">
        <span className="text-2xl md:text-4xl font-bold mr-4 text-background">Giới thiệu</span>
        <div className="hidden md:flex flex-grow border-t-4 border-background"></div>
      </div>
      <p className="text-xl text-black px-20 py-4">
        Công ty TNHH Sinh Phát được thành lập từ năm 2005 được gọi là Công ty TNHH MTV Sinh Phát
        chuyên phân phối các hàng hóa phẩm với 50 mặt hàng. Trụ sở chính đặt tại 23A/28D đường HT23, Kp2, P. Hiệp Thành, Quận 12
        Đến năm 2010 sản phẩm Sifa999 được công nhận là hàng Việt Nam chất lượng cao,
        năm 2012 tiếp tục được cấp chứng nhận là thương hiệu mạnh và phát triển bền vững.
      </p>
      <div className="flex justify-center md:justify-start items-baseline px-10 ">
        <span className="text-2xl md:text-4xl font-bold mr-4 text-background">Sản phẩm bán chạy</span>
        <div className="hidden md:flex flex-grow border-t-4 border-background"></div>
      </div>
      <BestSellingProducts />
    </NavLayout>
  );
}
