import React from "react";

function Header() {
  return (
    <header className="absolute w-full">
      <div className="container mx-auto flex flex-wrap p-6 xl:px-[12rem] md:px-[7rem] flex-col md:flex-row items-center">
        <a className="flex title-font items-center mb-4 md:mb-0">
          <img className="w-32" src="/3brotherslogo.png" alt="" />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5"></a>
          <a className="mr-5"></a>
          <a className="mr-5"></a>
          <a className="mr-5"></a>
        </nav>
        <div className="flex justify-center">
          <button className="hidden md:inline-flex text-white bg-black py-2 mb-10 px-6 focus:outline-none hover:bg-gray-700 rounded-full text-lg">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
