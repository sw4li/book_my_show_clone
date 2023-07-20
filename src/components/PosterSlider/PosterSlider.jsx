import React from 'react'
// slider
import Slider from 'react-slick';
// poster
import Poster from '../Poster/poster';
// carousel Settings
import settings from "../../config/Poster.settings"


const PosterSlider = (props) => {
    const sliderConfig = props.config ? props.config : settings;
  return (
    <>
        <div className='flex flex-col items-start py-2 mb-2'>
            <h3 className={`text-2xl font-bold ${props.isDark ? "text-white":"text-bmsprimary-800"} `}>{props.title}</h3>
            <p className={`text-xs sm:text-sm sm:font-medium ${props.isDark ? "text-white":"text-bmsprimary-800"}`}>{props.subtitle}</p>
        </div>
            <Slider {...sliderConfig}>
                {props.data.map((items) =>
                    <Poster {...items} isDark={props.isDark} />
                )}
            </Slider>
        </>
  )
}

export default PosterSlider
