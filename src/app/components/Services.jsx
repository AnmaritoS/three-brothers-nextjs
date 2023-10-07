import React from "react";
import ServicesContainer from "./ServicesContainer";

function Services() {
  return (
    <section id="services" className="w-1/2 text-center">
      <h1 className="sm:text-6xl text-4xl font-medium title-font text-black mb-10 underline decoration-4 decoration-[#F35927]">
        خدماتنا
      </h1>
      <div className="flex items-center justify-center md:space-y-0 space-y-6">
        <ServicesContainer
          image={"/paint-brush.png"}
          text={"ديكورات وتوريد معدات"}
        />
        <ServicesContainer image={"/furniture.png"} text={"توريد فورنتشار"} />
      </div>
      <div className="flex items-center justify-center md:space-y-0 space-y-6">
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
