import NavLayout from "@/components/NavLayout";
import Image from "next/image";
import { distributors } from "./DistributorData";
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { metadataConfig } from "@/app/metadata";

export const metadata = metadataConfig["/nha-phan-phoi"];

const Distributor: React.FC = () => {
    return (
        <NavLayout>
            <h2 className="text-4xl text-background font-bold text-center">Nhà phân phối</h2>
            <div className="flex flex-col space-y-4 mt-4">
                {distributors.map((distributor) => (
                    <div key={distributor.id} className="card card-side bg-base-100 shadow-xl w-full border border-2">
                        <figure>
                            <Image src={distributor.img} alt="Distributor logo" width={150} height={100} />
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title mb-10">{distributor.name}</h3>
                            <div className="flex space-x-2">
                                <HiOutlineLocationMarker size={20} />
                                <p>{distributor.address}</p>
                            </div>
                            <div className="flex space-x-2">
                                <FaPhoneAlt size={20} />
                                <p>{distributor.phoneNumber}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </NavLayout>
    );
}
export default Distributor;