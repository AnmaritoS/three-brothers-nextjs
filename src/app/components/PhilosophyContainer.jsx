import React from "react";

function PhilosophyContainer({ title, description, svg }) {
  return (
    <div className="p-4 md:w-1/3 w-full flex flex-col text-center items-center text-black bg-white bg-opacity-60 rounded-2xl border-black border ">
      <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#FBD0C2] text-orange1 mb-5 flex-shrink-0">
        {svg}
      </div>
      <div className="flex-grow">
        <h2 className="text-3xl title-font  mb-3">{title}</h2>
        <p className="leading-relaxed text-2xl">{description}</p>
      </div>
    </div>
  );
}

export default PhilosophyContainer;
