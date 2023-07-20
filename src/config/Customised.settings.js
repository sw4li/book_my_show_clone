
const customsettings = {
    arrows: true,
    Infinite: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    InitialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                dots: false,
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
    ]
};

export default customsettings