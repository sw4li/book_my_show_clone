import React from "react";
import Slider from "react-slick";

import { NextArrow, PrevArrow } from "./Arrow.component";
// ads
import { images } from "../AdBanners/adbanner";

const HeroCarousel = () => {
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
    };

    return (
        <>
            <div>
                <Slider {...settings}>
                    {
                        images.map((item) =>
                            <div className="w-full h-48  md:h-80 overflow-hidden">
                                <img src={item} alt="image" className="w-full h-full object-cover " />
                            </div>)
                    }
                </Slider>
            </div>
        </>
    )
}
export default HeroCarousel;