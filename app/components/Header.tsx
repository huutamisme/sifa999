import { FaEnvelope, FaPhoneAlt, FaFax } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
const Header: React.FC = () => {
    return (
        <header className='flex flex-row justify-between p-4 items-center'>
            <h1 className='font-georgia text-background font-semibold text-4xl'>CÔNG TY TNHH HÓA MỸ PHẨM SINH PHÁT</h1>
            <div className='flex space-x-4'>
                <div className='border border-black rounded-full w-fit p-2 tooltip tooltip-bottom'
                    data-tip='312/13 I28 Lê Thị Riêng, Kp.5, P. Thới An, Q.12, TP.Hồ Chí Minh'>
                    <HiOutlineLocationMarker size={30} />
                </div>
                <div className='border border-black rounded-full w-fit p-2 tooltip tooltip-bottom'
                    data-tip='hoapham.sifa999@yahoo.com.vn'>
                    <FaEnvelope size={30} />
                </div>
                <div className='border border-black rounded-full w-fit p-2 tooltip tooltip-bottom'
                    data-tip='028.62769672'>
                    <FaPhoneAlt size={30} />
                </div>
                <div className='border border-black rounded-full w-fit p-2 tooltip tooltip-bottom'
                    data-tip='6259 3014'>
                    <FaFax size={30} />
                </div>
            </div>

        </header>
    );
}
export default Header;