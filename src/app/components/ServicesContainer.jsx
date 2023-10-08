import React from "react";

function ServicesContainer({ image, text }) {
  return (
    <div className="p-4 md:w-full w-2/3 ">
      <div className="border-2 border-black px-4 py-6 h-full flex flex-col justify-center items-center rounded-2xl bg-white bg-opacity-60">
        <img className="w-16 h-16 mb-3 inline-block" src={image} alt="" />
        <h2 className="title-font font-semibold text-2xl ">{text}</h2>
      </div>
    </div>
  );
}

export default ServicesContainer;
