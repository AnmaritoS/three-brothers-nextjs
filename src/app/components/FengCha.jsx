import React from "react";

function FengCha() {
  return (
    <section id="feng-cha" class="text-gray-600 body-font">
      <div class="container px-5 pt-24 mx-auto flex flex-col">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-6xl text-4xl font-medium title-font mb-4 text-gray-900">
            علامات تجارية خاصة بنا
          </h1>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-orange1 inline-flex"></div>
          </div>
        </div>
      </div>
      <div class="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-2/3 md:pr-6 flex flex-col md:items-start md:text-right items-center text-center pb-6 md:pb-0 ">
          <p dir="rtl" class="leading-relaxed text-2xl">
            (FENG CHA) إحدى العلامات التجاريه ل "Three Brothers" والتي نعمل على
            تطويرها وطرحها في السوق بشكل افضل وتقديمها لعملائنا في ثوب جديد
            تماما تحت ادارة "Three Brothers". وتعتبر "Three Brothers" الوكيل
            الوحيد في مصر والشرق الاوسط لبراند (FENG CHA) التي سوف تغزو السوق
            المصري الخاص بالكافيهات والمطاعم وهو خاص ب "boba tea" او "bubble
            tea" (الشاي الصيني).
          </p>
        </div>
        <div class="lg:max-w-[192px] lg:w-full md:w-1/3 w-5/6 mb-10 md:mb-0 md:border-l border-black md:border-t-0 border-t pl-6 pt-6 md:pt-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="/fengchalogo.png"
          />
        </div>
      </div>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap md:flex-nowrap justify-center items-center sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class="p-4 sm:mb-0 mb-6">
            <div class="rounded-lg max-h-[614px] overflow-hidden border-black border-4 shadow-2xl shadow-black">
              <img alt="content" src="/fengcha1.jpeg" />
            </div>
          </div>
          <div class="p-4 sm:mb-0 mb-6">
            <div class="rounded-lg max-h-[754px] overflow-hidden border-black border-4 shadow-2xl shadow-black">
              <img alt="content" src="/fengcha2.jpeg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FengCha;
