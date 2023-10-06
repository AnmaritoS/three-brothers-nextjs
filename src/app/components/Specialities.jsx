import React from "react";

function Specialities() {
  return (
    <section id="specialties" className="text-black bg-orange-400">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-6xl text-4xl font-medium title-font mb-2 text-black">
            بما نتميز
          </h1>
        </div>
        <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-y-0 right-0 flex items-center justify-center">
            <div className="h-full w-1 bg-[#F4784E] pointer-events-none"></div>
          </div>
          <div className="flex-grow md:pr-8 pr-6 flex sm:items-center items-end flex-col-reverse sm:flex-row">
            <div className="flex-grow text-right sm:pr-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-white mb-1 text-2xl">
                رئيس مجلسنا
              </h2>
              <p className="leading-relaxed text-2xl">
                تتميز شركتنا بان رئيس مجلس إدارتنا عضو في المنشآت السياحيه وعضو
                نقابه سياحيين
              </p>
            </div>
            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-orange1 rounded-full inline-flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-tie"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 22l4 -4l-2.5 -11l.993 -2.649a1 1 0 0 0 -.936 -1.351h-3.114a1 1 0 0 0 -.936 1.351l.993 2.649l-2.5 11l4 4z"></path>
                <path d="M10.5 7h3l5 5.5"></path>
              </svg>
            </div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-white text-orange1 relative z-10 title-font font-extrabold text-sm">
            1
          </div>
        </div>
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-y-0 right-0 flex items-center justify-center">
            <div className="h-full w-1 bg-[#F4784E] pointer-events-none"></div>
          </div>
          <div className="flex-grow md:pr-8 pr-6 flex sm:items-center items-end flex-col-reverse sm:flex-row">
            <div className="flex-grow sm:pr-6 mt-6 sm:mt-0 text-right">
              <h2 className="font-medium title-font text-white mb-1 text-2xl">
                الخبرة
              </h2>
              <p className="leading-relaxed text-2xl">
                رئيس مجلس إدارتنا والمدير الإداري للشركه يعملون في هذا المجال من
                عام ٩٨ مما اكتسب لديهم الخبرة الكافية في هذا المجال
              </p>
            </div>
            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-orange1 rounded-full inline-flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-link"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"></path>
                <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"></path>
              </svg>
            </div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-white text-orange1 relative z-10 title-font font-extrabold text-sm">
            2
          </div>
        </div>
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-y-0 right-0 flex items-center justify-center">
            <div className="h-full w-1 bg-[#F4784E] pointer-events-none"></div>
          </div>
          <div className="flex-grow md:pr-8 pr-6 flex sm:items-center items-end flex-col-reverse sm:flex-row">
            <div className="flex-grow sm:pr-6 mt-6 sm:mt-0 text-right">
              <h2 className="font-medium title-font text-white mb-1 text-2xl">
                الصحه والسلامه
              </h2>
              <p className="leading-relaxed text-2xl">
                نحن نناسب مواصفات الصحه والسلامه والمواصفات الخاصه بالمنشأت
                السياحيه
              </p>
            </div>
            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-orange1 rounded-full inline-flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-heart-plus"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M13 19l-1 1l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8.003 5.996"></path>
                <path d="M14 16h6"></path>
                <path d="M17 13v6"></path>
              </svg>
            </div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-white text-orange1 relative z-10 title-font font-extrabold text-sm">
            3
          </div>
        </div>
        <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-y-0 right-0 flex items-center justify-center">
            <div className="h-full w-1 bg-[#F4784E] pointer-events-none"></div>
          </div>
          <div className="flex-grow md:pr-8 pr-6 flex sm:items-center items-end flex-col-reverse sm:flex-row">
            <div className="flex-grow sm:pr-6 mt-6 sm:mt-0 text-right">
              <h2 className="font-medium title-font text-white mb-1 text-2xl">
                امتيازاتنا
              </h2>
              <p className="leading-relaxed text-2xl">
                وهذه الامتيازات تسهل عمليه اقامه وتشغيل وتوفير الديكورات للمشروع
                بكل دقه
              </p>
            </div>
            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-orange1 rounded-full inline-flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-stars"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M17.8 19.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"></path>
                <path d="M6.2 19.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"></path>
                <path d="M12 9.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"></path>
              </svg>
            </div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-white text-orange1 relative z-10 title-font font-extrabold text-sm">
            4
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specialities;
