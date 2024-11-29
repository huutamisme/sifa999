import NavLayout from "@/components/NavLayout";
import { metadataConfig } from "@/app/metadata";

export const metadata = metadataConfig["/tuyen-dung"];

const Recruitment: React.FC = () => {
    return (
        <NavLayout>
            <h2 className="text-4xl text-background font-bold text-center">Tuyển dụng</h2>
            <div className="flex flex-col p-4 space-y-4 border border-2 mt-4 rounded-3xl shadow-xl">
                <h3>Công ty TNHH Sinh Phát</h3>
                <p>Hiện mặt hàng hóa mỹ phẩm SiFa999 đã và đang được phân phối trong hệ thống siêu thị: Coopmark, Big C, Lottemark, AEON, tạp hóa, văn phòng phẩm, kênh điện nước, kênh phụ tùng ô tô - mô tô, kênh thuốc bảo vệ thực vật, kênh tiệm rửa xe ô tô - mô tô, kênh gara xe, kênh nhà hàng - khách sạn</p>
                <p>- Theo yêu cầu tiêu dùng của khách hàng càng ngày càng nhiều . Vì thế chúng tôi đang tìm nhà phân phối và nhân viên kinh doanh thị trường trên 63 tỉnh thành, cùng nhau hợp tác cùng phát triển trên tinh thần có lợi cho đôi bên.</p>
                <p>Vui lòng liên hệ: 0909.637.768 Mr. Vỹ</p>
            </div>
        </NavLayout>
    );
}
export default Recruitment;