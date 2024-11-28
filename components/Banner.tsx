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
            <Slider {...settings} className="w-full max-w-4xl">
                {banners.map((banner, index) => (
                    <div key={index}>
                        <Image
                            src={banner}
                            alt={`Banner ${index + 1}`}
                            width={980}
                            height={500}
                            priority={index === 0}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );


};

export default Banner;
