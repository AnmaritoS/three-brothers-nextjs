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
              className="border-2 border-gray-900 rounded-lg   w-[439px] h-[256px]"
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
