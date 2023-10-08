import React from "react";
import ServicesContainer from "./ServicesContainer";

function Services() {
  return (
    <section id="services" className="w-[70vw] text-center">
      <h1 className="sm:text-6xl text-4xl font-medium title-font text-black mb-10 ">
        <span className="bg-white bg-opacity-60 py-1 px-4 rounded-2xl border-4 border-black">
          خدماتنا
        </span>
      </h1>
      <div className="flex md:flex-row flex-col justify-center items-center">
        <ServicesContainer
          image={"/paint-brush.png"}
          text={"ديكورات وتوريد معدات"}
        />
        <ServicesContainer image={"/furniture.png"} text={"توريد فورنتشار"} />
        <ServicesContainer
          image={"/branding.png"}
          text={"انشاء براندات وعلامات تجاريه"}
        />
        <ServicesContainer
          image={"/coffee-table.png"}
          text={"انشاء واقامة كافيهات ومطاعم"}
        />
      </div>
    </section>
  );
}

export default Services;
