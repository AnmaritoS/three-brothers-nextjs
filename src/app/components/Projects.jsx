import React from "react";
import Carousel from "./Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const carouselArray1 = [
    { src: "/topview.jpg", alt: "Image 1" },
    { src: "/blackbear1.jpeg", alt: "Image 2" },
    { src: "/blackbear2.jpeg", alt: "Image 3" },
  ];

  const carouselArray2 = [
    { src: "/tabak.jpg", alt: "Image 1" },
    { src: "/cafemilano.jpg", alt: "Image 2" },
    { src: "/cafemilano2.jpg", alt: "Image 3" },
  ];

  const carouselArray3 = [
    { src: "/shawermer1.jpeg", alt: "Image 1" },
    { src: "/nilegate1.jpeg", alt: "Image 2" },
    { src: "/nilegate3.jpeg", alt: "Image 3" },
  ];
  return (
    <section id="projects" className="text-gray-600 body-font">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-6xl text-4xl font-medium title-font mb-4 text-gray-900">
              اعمال متنوعة
            </h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-orange1 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="w-[439px] mb-10 mx-auto">
              <Carousel images={carouselArray1} />
            </div>
            <div className="w-[439px] mb-10 mx-auto">
              <Carousel images={carouselArray2} />
            </div>
            <div className="w-[439px] mb-10 mx-auto">
              <Carousel images={carouselArray3} />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Projects;
