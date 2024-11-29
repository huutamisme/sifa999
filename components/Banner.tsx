"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./SlickBtn";
import Image from "next/image";

interface BannerProps {
    margin: number;
}

const Banner: React.FC<BannerProps> = ({ margin }) => {
    const settings = {
        dots: false,
        infinite: true,
        draggable: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow margin={margin} />,
        prevArrow: <PrevArrow margin={margin} />,
    };

    const banners: string[] = [
        "/Banner/banner1.jpg",
        "/Banner/banner2.jpg",
        "/Banner/banner3.jpg",
        "/Banner/banner4.jpg",
    ];

    return (
        <div className="flex justify-center">
            <Slider {...settings} className="w-full max-w-4xl h-auto">
                {banners.map((banner, index) => (
                    <div key={index}>
                        <Image
                            src={banner}
                            alt={`Banner ${index + 1}`}
                            width={980}  // Set width to match the container
                            height={330} // Set height to match the container's aspect ratio
                            layout="responsive"  // Ensures the image is responsive
                            priority={index === 0} // Prioritize the first image
                            sizes="(max-width: 768px) 100vw, 980px" // Serve 100% width on smaller screens, 980px on larger
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;
