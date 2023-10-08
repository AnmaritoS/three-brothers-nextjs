import React from "react";

function HeroContainer({ svg, title, description }) {
  return (
    <div className="w-full p-4">
      <div className="border border-black p-6 rounded-lg bg-white bg-opacity-60 shadow-2xl md:w-[25vw] w-[80vw]  ">
        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#FBD0C2] text-orange1 mb-4">
          {svg}
        </div>
        <h2 className="text-2xl text-gray-900 font-bold title-font mb-2 underline underline-offset-4 dec">
          {title}
        </h2>
        <p className="leading-relaxed text-2xl">{description}</p>
      </div>
    </div>
  );
}

export default HeroContainer;
