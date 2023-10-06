import React from "react";

function Services() {
  return (
    <section id="services" class="text-gray-600 body-font">
      <div class="container px-5 pb-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1
            class="sm:text-6xl text-4xl font-medium title-font mb-4 text-gray-900"
            dir="rtl"
          >
            خدماتنا
          </h1>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-orange1 inline-flex"></div>
          </div>
        </div>
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-black px-4 py-6 h-full flex flex-col justify-center items-center  rounded-3xl">
              <img
                class="w-16 h-16 mb-3 inline-block"
                src="/paint-brush.png"
                alt=""
              />
              <h2 class="title-font font-medium text-2xl text-gray-900">
                ديكورات وتوريد معدات
              </h2>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-black px-4 py-6 h-full flex flex-col justify-center items-center rounded-3xl">
              <img
                class="w-16 h-16 mb-3 inline-block"
                src="/furniture.png"
                alt=""
              />
              <h2 class="title-font font-medium text-2xl text-gray-900">
                توريد فورنتشار
              </h2>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-black px-4 py-6 h-full flex flex-col justify-center items-center  rounded-3xl">
              <img
                class="w-16 h-16 mb-3 inline-block"
                src="/branding.png"
                alt=""
              />
              <h2 class="title-font font-medium text-2xl text-gray-900">
                انشاء براندات وعلامات تجاريه
              </h2>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-black px-4 py-6 h-full flex flex-col justify-center items-center  rounded-3xl">
              <img
                class="w-16 h-16 mb-3 inline-block"
                src="/coffee-table.png"
                alt=""
              />
              <h2 class="title-font font-medium text-2xl text-gray-900">
                انشاء واقامة كافيهات ومطاعم
              </h2>
            </div>
          </div>
        </div>
        <button class="flex mx-auto mt-16 text-white bg-orange1 border-0 py-2 px-8 focus:outline-none hover:bg-orange2 rounded text-lg">
          Contact Us
        </button>
      </div>
    </section>
  );
}

export default Services;
