
const settings = {
    arrows: true,
    Infinite: true,
    autoplay: false,
    speed:800,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                dots: false,
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
    ]
};

export default settings