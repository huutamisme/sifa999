import Link from 'next/link';

interface NavItem {
    name: string,
    href: string
}

const navItem: NavItem[] = [
    { name: "Trang chủ", href: "/" },
    { name: "Giới thiệu", href: "/about" },
    { name: "Sản phẩm", href: "/products" },
    { name: "Nhà phân phối", href: "/distributor" },
    { name: "Tuyển dụng", href: "/recruitment" },
    { name: "Liên hệ", href: "/contact" },
]
const Footer: React.FC = () => {
    return (
        <div>
            <div className="px-10 py-4 bg-gray-900 text-white text-lg md:text-3xl space-y-4">
                <ul className="font-semibold hidden lg:flex w-full justify-center">
                    {navItem.map((item, index) => (
                        <div key={index} className='flex '>
                            <li className='flex items-center justify-center w-full'>
                                <Link
                                    href={item.href}
                                    passHref
                                    className='py-2 px-4 hover:underline w-full text-md xl:text-2xl text-center'
                                >
                                    {item.name}
                                </Link>
                            </li>
                            {index < navItem.length - 1 && <span className="flex items-center mx-2 text-2xl">/</span>}
                        </div>
                    ))}
                </ul>
                <div className='flex flex-col items-center w-full space-y-4'>
                    <span className='font-bold'>CÔNG TY TNHH HÓA MỸ PHẨM SINH PHÁT</span>
                    <span className='text-2xl text-gray-400'>Địa chỉ: 312/13 I28 Lê Thị Riêng, Kp.5, P. Thới An, Q.12, TP.Hồ Chí Minh</span>
                    <span className='text-2xl text-gray-400'>Điện thoại: 028.62769672 - Fax: 6259 3014 - Email: hoapham.sifa999@yahoo.com.vn</span>
                </div>
            </div>

            <div className="bg-gray-900 text-white border-base-300 border-t px-10 py-4">
                <aside className="flex items-center">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current">
                        <path
                            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                    </svg>
                    <p className="text-lg md:text-3xl">
                        Copyright &copy; 2024, Sifa999
                    </p>
                </aside>
            </div>
        </div>
    );
}

export default Footer;