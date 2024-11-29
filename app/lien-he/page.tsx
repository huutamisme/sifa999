import NavLayout from "@/components/NavLayout";
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import ContactForm from "./components/ContactForm";
import { metadataConfig } from "@/app/metadata";

export const metadata = metadataConfig["/lien-he"];

const Contact: React.FC = () => {
    return (
        <NavLayout>
            <h2 className="text-4xl text-background font-bold text-center">Thông tin liên hệ</h2>
            <div className="flex flex-col p-4 space-y-4 border border-2 mt-4 rounded-3xl shadow-xl">
                <h3 className="font-bold">CÔNG TY TNHH HÓA MỸ PHẨM SINH PHÁT</h3>
                <div className="flex space-x-2 items-center">
                    <HiOutlineLocationMarker size={30} />
                    <p>Địa chỉ: 312/13 I28 Lê Thị Riêng, Kp.5, P. Thới An, Q.12, TP.Hồ Chí Minh</p>
                </div>
                <div className="flex space-x-2 items-center">
                    <FaPhoneAlt size={30} />
                    <p>Điện Thoại: 028.62769672</p>
                </div>
                <div className="flex space-x-2 items-center">
                    <FaEnvelope size={30} />
                    <p>Email: hoapham.sifa999@yahoo.com.vn</p>
                </div>
            </div>
            <div className="flex flex-col p-4 space-y-4 border border-2 mt-4 rounded-3xl shadow-xl">
                <p>
                    Quý khách có thể liên hệ với chúng tôi từ website này bằng cách điền đầy đủ những thông tin vào form liên hệ bên dưới. Chúng tôi sẽ liên hệ với Quý khách trong thời gian sớm nhất. Xin chân thành cảm ơn.
                </p>
                <ContactForm />
            </div>
        </NavLayout>
    );
}
export default Contact;