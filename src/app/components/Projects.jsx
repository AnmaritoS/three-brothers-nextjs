import React from "react";
import Carousel from "./Carousel";

function Projects() {
  return (
    <section id="projects" class="text-gray-600 body-font">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-6xl text-4xl font-medium title-font mb-4 text-gray-900">
              اعمال متنوعة
            </h1>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-orange1 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="p-4 md:w-1/2 xl:w-1/3 sm:mb-0 mb-6">
              {/* <div class="rounded-lg h-64 overflow-hidden">
                <div
                  id="carouselDarkVariant1"
                  class=" w-full carousel slide relative carousel-dark"
                  data-bs-ride="carousel"
                >
                  <div class="object-cover object-center rounded carousel-inner relative w-full overflow-hidden ">
                    <div class="carousel-item active relative float-left w-full ">
                      <img
                        src="/topview.jpg"
                        class="border-2 border-gray-900 rounded-lg block xl:w-[445.35px] xl:h-[255.99px] lg:w-[452px] lg:h-[256px] md:w-[348px] md:h-[256px] sm:w-[440px] sm:h-[256px] w-[439px] h-[256px]"
                        alt="Wild Landscape"
                      />
                    </div>
                    <div class="carousel-item relative float-left w-full">
                      <img
                        src="/blackbear1.jpeg"
                        class="border-2 border-gray-900 rounded-lg block xl:w-[445.35px] xl:h-[255.99px] lg:w-[452px] lg:h-[256px] md:w-[348px] md:h-[256px] sm:w-[440px] sm:h-[256px] w-[439px] h-[256px]"
                        alt="Camera"
                      />
                    </div>
                    <div class="carousel-item relative float-left w-full">
                      <img
                        src="/blackbear2.jpeg"
                        class="border-2 border-gray-900 rounded-lg block xl:w-[445.35px] xl:h-[255.99px] lg:w-[452px] lg:h-[256px] md:w-[348px] md:h-[256px] sm:w-[440px] sm:h-[256px] w-[439px] h-[256px]"
                        alt="Exotic Fruits"
                      />
                    </div>
                    <div class="carousel-item relative float-left w-full">
                      <img
                        src="/tabak.jpg"
                        class="border-2 border-gray-900 rounded-lg block xl:w-[445.35px] xl:h-[255.99px] lg:w-[452px] lg:h-[256px] md:w-[348px] md:h-[256px] sm:w-[440px] sm:h-[256px] w-[439px] h-[256px]"
                        alt="Exotic Fruits"
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselDarkVariant1"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon inline-block bg-no-repeat"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselDarkVariant1"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon inline-block bg-no-repeat"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div> */}
              <Carousel />
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5 flex justify-center">
                Black Bear
              </h2>
            </div>
            <div class="p-4 md:w-1/2 xl:w-1/3 sm:mb-0 mb-6">
              {/* <div class="rounded-lg h-64 overflow-hidden">
                <div
                  id="carouselDarkVariant2"
                  class=" w-full carousel slide relative carousel-dark"
                  data-bs-ride="carousel"
                >
                  <div class="object-cover object-center rounded carousel-inner relative w-full overflow-hidden ">
                    <div class="carousel-item active relative float-left w-full ">
                      <img
                        src="/beano's.jpg"
                        class="border-2 border-gray-900 rounded-lg block xl:w-[445.35px] xl:h-[255.99px] lg:w-[452px] lg:h-[256px] md:w-[348px] md:h-[256px] sm:w-[440px] sm:h-[256px] w-[439px] h-[256px]"
                        alt="Wild Landscape"
                      />
                    </div>
                    <div class="carousel-item relative float-left w-full">
                      <img
                        src="/shawermer1.jpeg"
                        class="border-2 border-gray-900 rounded-lg block xl:w-[445.35px] xl:h-[255.99px] lg:w-[452px] lg:h-[256px] md:w-[348px] md:h-[256px] sm:w-[440px] sm:h-[256px] w-[439px] h-[256px]"
                        alt="Camera"
                      />
                    </div>
                    <div class="carousel-item relative float-left w-full">
                      <img
                        src="/cafemilano.jpg"
                        class="border-2 border-gray-900 rounded-lg block xl:w-[445.35px] xl:h-[255.99px] lg:w-[452px] lg:h-[256px] md:w-[348px] md:h-[256px] sm:w-[440px] sm:h-[256px] w-[439px] h-[256px]"
                        alt="Camera"
                      />
                    </div>
                    <div class="carousel-item relative float-left w-full">
                      <img
                        src="/cafemilano2.jpg"
                        class="border-2 border-gray-900 rounded-lg block xl:w-[445.35px] xl:h-[255.99px] lg:w-[452px] lg:h-[256px] md:w-[348px] md:h-[256px] sm:w-[440px] sm:h-[256px] w-[439px] h-[256px]"
                        alt="Camera"
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselDarkVariant2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon inline-block bg-no-repeat"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselDarkVariant2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon inline-block bg-no-repeat"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div> */}
              <Carousel />
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5 flex justify-center">
                Shawermer BBQ
              </h2>
            </div>
            <div class="p-4 md:w-1/2 xl:w-1/3 sm:mb-0 mb-6 mx-auto">
              <Carousel />
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5 flex justify-center">
                Nile Gate
              </h2>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Projects;
