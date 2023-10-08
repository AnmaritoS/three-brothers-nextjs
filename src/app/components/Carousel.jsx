import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel({ images }) {
  if (!images || images.length === 0) {
    return null; // or display a message or placeholder
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  var carouselSettings = {
    infinite: true,
    speed: 300,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider {...carouselSettings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              className="border-2 xl:w-[445.35px] xl:h-[255.99px] lg:w-[452px] lg:h-[256px] md:w-[348px] md:h-[256px] sm:w-[440px] sm:h-[256px] w-[350px] h-[203px] border-gray-900 rounded-lg "
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </Slider>
    </>
  );
}

export default Carousel;
