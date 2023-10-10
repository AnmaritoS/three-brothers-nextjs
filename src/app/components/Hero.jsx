import React from "react";
import HeroContainer from "./HeroContainer";
function Hero() {
  return (
    <section
      id="hero"
      className="w-[75vw] py-16 flex justify-center items-center font-semibold"
    >
      <div className="flex justify-between flex-col items-center text-center space-y-5 px-10">
        <img
          className="md:w-[20vw] w-[50vw]"
          src="/3broslogo-text.png"
          alt=""
        />

        <div className="flex sm:flex-wrap flex-col md:flex-row md:flex-nowrap -m-4 text-center">
          <HeroContainer
            title={"وصف الفريق"}
            description={
              "يجمع الفريق مدرين التشغيل ومدربين وفريق العمل الخاص بالتشغيل والذي يعمل باعلي مستوي مع فريق متميز من مهندسي الديكور المتخصصين في هذا المجال"
            }
            svg={
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
            }
          />
          <HeroContainer
            title={"الخدمه"}
            description={
              "نستخدم افضل الاسس العلميه الممكنه وبايدي عاملة مدربة ومتميزة وبافضل الخامات, نقدم افضل الخدمات في هذا المجال ايمانا منا بحركة التطور السريع الموجودة بالسوق المصري حالي"
            }
            svg={
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
            }
          />
          <HeroContainer
            title={"سبب الانشاء"}
            description={
              "تأسسنا في عام ٢٠٢٠ و تم إنشاء هذه الشركه بعد التوسع الخيالي الذي شهده السوق المصري في هذا المجال مما الهم فريق العمل بالعديد من االفكار والتطلعات لتقديمها في هذا المجال"
            }
            svg={
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
            }
          />
        </div>
        <p className="leading-relaxed text-2xl font-semibold bg-[#F35927] p-4 rounded-2xl border border-black">
          المعادي كورنيش المعادي - أبراج عثمان الدور ٢٢
        </p>
        <p className="mb-4 leading-relaxed text-2xl font-semibold bg-white p-4 rounded-2xl border border-black">
          01201273732
          <span className="lg:visible md:invisible sm:visible"> - </span>
          01067765621
        </p>

        <div className="flex justify-center ">
          <a
            className="hover:scale-110 duration-500"
            href="https://www.facebook.com/3brothersegyp"
            target="_blank"
          >
            <img className="w-[70px]" src="/facebook.svg" alt="" />
          </a>
          <a
            className="hover:scale-110 duration-500"
            href="https://api.whatsapp.com/send?phone=201067765621"
            target="_blank"
          >
            <img className="w-[70px]" src="/whatsapp.svg" alt="" />
          </a>
          <a
            className="hover:scale-110 duration-500"
            href="https://www.google.com/maps/place/Abrag+Othman,+Maadi,+Cairo+Governorate,+Egypt/data=!4m2!3m1!1s0x145847ec730f01ad:0xb2032d34cfd16206?sa=X&ved=2ahUKEwjh6NvQiOOBAxXQl4kEHe5sBdIQ8gF6BAgMEAA&ved=2ahUKEwjh6NvQiOOBAxXQl4kEHe5sBdIQ8gF6BAgUEAI"
            target="_blank"
          >
            <img className="w-[70px]" src="/google-maps.svg" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
