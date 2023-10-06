import React from "react";

function AboutUs() {
  return (
    <section id="about-us" className="text-gray-600 body-font">
      <img className="w-screen" src="/wave21.png" alt="" />

      <div className="container px-5 pb-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-6xl text-4xl font-medium title-font mb-4 text-gray-900">
            من نحن
          </h1>
          <p
            className="lg:w-1/2 w-full text-3xl leading-relaxed text-gray-500"
            dir="rtl"
          >
            Three Brothers شركه تعمل في مجال المطاعم و الكافيهات
          </p>
        </div>
        <div className="flex sm:flex-wrap flex-col md:flex-row md:flex-nowrap -m-4 text-center">
          <div className="xl:w-1/2 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#FBD0C2] text-orange1 mb-4">
                <svg
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h2 className="text-2xl text-gray-900 font-bold title-font mb-2">
                وصف الفريق
              </h2>
              <p className="leading-relaxed text-2xl">
                يجمع الفريق مدرين التشغيل ومدربين وفريق العمل الخاص بالتشغيل
                والذي يعمل باعلي مستوي مع فريق متميز من مهندسي الديكور المتخصصين
                في هذا المجال
              </p>
            </div>
          </div>

          <div className="xl:w-1/2 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#FBD0C2] text-orange1 mb-4">
                <svg
                  className="h-10 w-10"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="7" cy="17" r="2" />
                  <circle cx="17" cy="17" r="2" />
                  <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                  <line x1="3" y1="9" x2="7" y2="9" />
                </svg>
              </div>
              <h2 className="text-2xl text-gray-900 font-bold title-font mb-2">
                الخدمه
              </h2>
              <p className="leading-relaxed text-2xl">
                نستخدم افضل الاسس العلميه الممكنه وبايدي عاملة مدربة ومتميزة
                وبافضل الخامات, نقدم افضل الخدمات في هذا المجال ايمانا منا بحركة
                التطور السريع الموجودة بالسوق المصري حالي
              </p>
            </div>
          </div>

          <div className="xl:w-1/2 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#FBD0C2] text-orange1 mb-4">
                <svg
                  className="h-10 w-10"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M7 12l5 5l10 -10" />
                  <path d="M2 12l5 5m5 -5l5 -5" />
                </svg>
              </div>
              <h2 className="text-2xl text-gray-900 font-bold title-font mb-2">
                سبب الانشاء
              </h2>
              <p className="leading-relaxed text-2xl">
                تأسسنا في عام ٢٠٢٠ و تم إنشاء هذه الشركه بعد التوسع الخيالي الذي
                شهده السوق المصري في هذا المجال مما الهم فريق العمل بالعديد من
                االفكار والتطلعات لتقديمها في هذا المجال
              </p>
            </div>
          </div>
        </div>
        <button className="flex mx-auto mt-16 text-white bg-orange1 border-0 py-2 px-8 focus:outline-none hover:bg-orange2 rounded text-lg">
          Contact Us
        </button>
      </div>
    </section>
  );
}

export default AboutUs;
