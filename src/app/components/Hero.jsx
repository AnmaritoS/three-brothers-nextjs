import React from "react";

function Hero() {
  return (
    <section id="hero" class="bg-heroBg pt-40">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-center mb-16 md:mb-0 items-center text-center">
          <div class="text-center">
            <p class="leading-relaxed text-2xl font-semibold">
              المعادي كورنيش المعادي - أبراج عثمان الدور ٢٢
            </p>
            <p class="mb-4 leading-relaxed text-2xl font-semibold">
              01201273732
              <span class="lg:visible md:invisible sm:visible"> - </span>
              01067765621
            </p>
            <div class="flex justify-center space-x-3">
              <a href="https://www.facebook.com/3brothersegyp" target="_blank">
                <i class="fa-brands fa-facebook fa-4x mb-4"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=201067765621"
                target="_blank"
              >
                <svg
                  class="w-[60px] mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
            </div>
            <img class="w-40 mx-auto mb-4" src="/qr-code.svg" alt="" />
            <div class="flex justify-center">
              <button class="md:hidden inline-flex text-white bg-black py-2 px-6 focus:outline-none hover:bg-gray-700 rounded-full text-lg ">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div
            id="carouselExampleControls"
            class=" w-full carousel slide relative"
            data-bs-ride="carousel"
          >
            <div class="object-cover object-center rounded carousel-inner relative w-full overflow-hidden">
              <div class="carousel-item active relative float-left w-full">
                <img
                  src="/coffee1.jpg"
                  class="block w-full"
                  alt="Wild Landscape"
                />
              </div>
              <div class="carousel-item relative float-left w-full">
                <img src="/coffee2.jpg" class="block w-full" alt="Camera" />
              </div>
              <div class="carousel-item relative float-left w-full">
                <img
                  src="/coffee3.jpg"
                  class="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleControls"
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
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <img src="/wave21.svg" alt="" />
    </section>
  );
}

export default Hero;
