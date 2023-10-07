import React from "react";
import TeamMember from "./TeamMember";

function Team() {
  return (
    <section className="bg-[#F35927]">
      <div className="container px-5 py-24 mx-auto ">
        <div className=" flex flex-col text-center  mb-20">
          <h1 className="sm:text-6xl text-4xl font-medium title-font mb-4 text-gray-900">
            فريقنا
          </h1>
        </div>
        <div className="flex justify-center items-center -m-4">
          <div className="p-4 lg:w-1/5 md:w-1/2">
            <TeamMember
              gender={"male"}
              name={"م.حسن صالح"}
              position={"رئيس مجلس الإدارة"}
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center -m-4">
          <div className="p-4 lg:w-1/5 md:w-1/2">
            <TeamMember
              gender={"female"}
              name={"م.شيماء عبد الغني"}
              position={"مدير عام"}
            />
          </div>
          <div className="p-4 lg:w-1/5 md:w-1/2">
            <TeamMember
              gender={"male"}
              name={"أ.احمد صبري"}
              position={"مدير إداري"}
            />
          </div>
          <div className="p-4 lg:w-1/5 md:w-1/2">
            <TeamMember
              gender={"male"}
              name={"أ.احمد مصطفى"}
              position={"مدير إداري"}
            />
          </div>
          <div className="p-4 lg:w-1/5 md:w-1/2">
            <TeamMember
              gender={"male"}
              name={"م.محمد ابراهيم"}
              position={"المهندس استشاري"}
            />
          </div>
          <div className="p-4 lg:w-1/5 md:w-1/2">
            <TeamMember
              gender={"male"}
              name={"م.عمرو الزهيري"}
              position={"التصميمات و الجرافيكس"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
