import React from "react";

function Philosophy() {
  return (
    <section id="philosophy" class="text-gray-600">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1 class="sm:text-6xl text-4xl font-medium title-font text-gray-900 mb-4">
            فلسفتنا
          </h1>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-orange1 inline-flex"></div>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div class="p-4 md:w-1/3 w-full flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#FBD0C2] text-orange1 mb-5 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-pennant"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="8" y1="21" x2="12" y2="21"></line>
                <line x1="10" y1="21" x2="10" y2="3"></line>
                <path d="M10 4l9 4l-9 4"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-3xl title-font font-medium mb-3">
                مهمتنا
              </h2>
              <p class="leading-relaxed text-2xl">
                توفير اعلي الخدمات بشكل متميز وباقل تكاليف
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 w-full flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#FBD0C2] text-orange1 mb-5 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-telescope"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 21l6 -5l6 5"></path>
                <path d="M12 13v8"></path>
                <path d="M3.294 13.678l.166 .281c.52 .88 1.624 1.265 2.605 .91l14.242 -5.165a1.023 1.023 0 0 0 .565 -1.456l-2.62 -4.705a1.087 1.087 0 0 0 -1.447 -.42l-.056 .032l-12.694 7.618c-1.02 .613 -1.357 1.897 -.76 2.905z"></path>
                <path d="M14 5l3 5.5"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-3xl title-font font-medium mb-3">
                رؤيتنا
              </h2>
              <p class="leading-relaxed text-2xl">
                نسعي ان نقدم لعملائنا احدث وارقي الخدمات وتغير شكل العام
                والمفهوم العام للتصميمات الخاصة بهذا المجال في مصر
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 w-full flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#FBD0C2] text-orange1 mb-5 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-target-arrow"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="12" cy="12" r="1"></circle>
                <path d="M12 7a5 5 0 1 0 5 5"></path>
                <path d="M13.004 3.055a9 9 0 1 0 7.941 7.945"></path>
                <path d="M15 6v3h3l3 -3h-3v-3z"></path>
                <path d="M15 9l-3 3"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-3xl title-font font-medium mb-3">
                اهدافنا
              </h2>
              <p class="leading-relaxed text-2xl">
                تنشيط مجال الديكورات الخاصة بالمطاعم والكافيهات في مصر
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
