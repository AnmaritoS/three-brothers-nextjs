import React from "react";
import Carousel from "./Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const carouselArray1 = [
    {
      src: "/topview.jpg",
      alt: "Whole view of a cafe and restaurants collection in Cairo, Egypt",
    },
    {
      src: "/blackbear1.jpeg",
      alt: "Blackbear American Burger entrance design in Cairo, Egypt",
    },
    {
      src: "/blackbear2.jpeg",
      alt: "Blackbear American Burger entrance design in Cairo, Egypt",
    },
  ];

  const carouselArray2 = [
    { src: "/tabak.jpg", alt: "Interior design of Tabak cafe in Cairo, Egypt" },
    {
      src: "/cafemilano.jpg",
      alt: "Interior design of Cafe Milano in Cairo, Egypt",
    },
    {
      src: "/cafemilano2.jpg",
      alt: "Interior design of Cafe Milano in Cairo, Egypt",
    },
  ];

  const carouselArray3 = [
    {
      src: "/shawermer1.jpeg",
      alt: "Shawermer entrance design in Cairo, Egypt",
    },
    {
      src: "/nilegate1.jpeg",
      alt: "Nile Gate entrance design in Cairo, Egypt",
    },
    {
      src: "/nilegate3.jpeg",
      alt: "Nile Gate entrance design in Cairo, Egypt",
    },
  ];
  return (
    <section id="projects" className="text-gray-600 body-font">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-6xl text-4xl font-medium title-font mb-4 text-gray-900">
              اعمال متنوعة
            </h1>
          </div>
          <div className="flex flex-wrap justify-center items-center sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="xl:w-[445.35px] xl:h-[255.99px] lg:w-[452px] lg:h-[256px] md:w-[348px] md:h-[256px] sm:w-[440px] sm:h-[256px] w-[350px] h-[203px] mb-10 mx-auto">
              <Carousel images={carouselArray1} />
            </div>
            <div className="xl:w-[445.35px] xl:h-[255.99px] lg:w-[452px] lg:h-[256px] md:w-[348px] md:h-[256px] sm:w-[440px] sm:h-[256px] w-[350px] h-[203px] mb-10 mx-auto">
              <Carousel images={carouselArray2} />
            </div>
            <div className="xl:w-[445.35px] xl:h-[255.99px] lg:w-[452px] lg:h-[256px] md:w-[348px] md:h-[256px] sm:w-[440px] sm:h-[256px] w-[350px] h-[203px] mb-10 mx-auto">
              <Carousel images={carouselArray3} />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Projects;
