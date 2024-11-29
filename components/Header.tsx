import { FaEnvelope, FaPhoneAlt, FaFax } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Header: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between px-4 py-6 md:py-12 items-center overflow-hidden space-y-4 md:space-y-0">
            <h1 className="text-center md:text-left font-georgia text-background font-semibold text-2xl sm:text-3xl md:text-4xl">
                CÔNG TY TNHH HÓA MỸ PHẨM SINH PHÁT
            </h1>
            <div className="flex space-x-4">
                <div
                    className="border border-black rounded-full w-fit p-2 tooltip tooltip-bottom"
                    data-tip="312/13 I28 Lê Thị Riêng, Kp.5, P. Thới An, Q.12, TP.Hồ Chí Minh"
                >
                    <HiOutlineLocationMarker size={24} className="sm:size-30" />
                </div>
                <div
                    className="border border-black rounded-full w-fit p-2 tooltip tooltip-bottom"
                    data-tip="hoapham.sifa999@yahoo.com.vn"
                >
                    <FaEnvelope size={24} className="sm:size-30" />
                </div>
                <div
                    className="border border-black rounded-full w-fit p-2 tooltip tooltip-bottom"
                    data-tip="028.62769672"
                >
                    <FaPhoneAlt size={24} className="sm:size-30" />
                </div>
                <div
                    className="border border-black rounded-full w-fit p-2 tooltip tooltip-bottom"
                    data-tip="6259 3014"
                >
                    <FaFax size={24} className="sm:size-30" />
                </div>
            </div>
        </div>
    );
};

export default Header;
