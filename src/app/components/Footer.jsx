import React from "react";

function Footer() {
  return (
    <footer className="text-gray-600  bg-[#F35927]">
      <div className="container px-10 py-12 mx-auto flex items-center justify-center md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img className="w-32" src="/3brotherslogo.png" alt=""></img>
          </a>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-6 text-center">
          <div className="lg:w-1/2 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-xl mb-3 text-center flex items-center justify-center">
              المعادي كورنيش المعادي - أبراج عثمان الدور ٢٢
            </h2>
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full px-4 flex items-center justify-center">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">
              01201273732 - 01067765621
            </h2>
            <nav className="list-none mb-10"></nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
