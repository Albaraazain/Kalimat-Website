import React from "react";
import Logo from "../Resources/images/Logo.svg";
import chromeICON from "../Resources/images/Rectanglechrome.svg";

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  // Always render the menu, but control visibility and animation with CSS
  return (
    <div dir="rtl"
      className={`navbar-menu relative z-50 text-white ${
        isMenuOpen ? "" : "hidden"
      }`}
    >
      <div
        className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
        onClick={toggleMenu}
      />
      <nav
        className={`fixed top-0 right-0 bottom-0 flex flex-col w-full md:w-5/6 max-w-sm py-8 px-8 bg-green-200 border-r overflow-y-auto transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center mb-8 relative">
          <a className=" text-2xl font-bold leading-none" href="#">
            <img className="h-6" src={Logo} alt="Logo" width="auto" />
          </a>
          <button
            onClick={toggleMenu}
            className="navbar-close absolute top-0 left-0"
          >
            <svg
              className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="py-10">
          <li className="mb-1">
            <a
              className="block p-4 text-lg font-bold hover:bg-green-300 rounded transition duration-200"
              href="#"
            >
              اسعار
            </a>
          </li>
          <li className="mb-1">
            <a
              className="block p-4 text-lg font-bold hover:bg-green-300 rounded transition duration-200"
              href="#"
            >
              مميزات
            </a>
          </li>
          <li className="mb-1">
            <a
              className="block p-4 text-lg font-bold hover:bg-green-300 rounded transition duration-200"
              href="#"
            >
              شرح
            </a>
          </li>
        </ul>
        <div className="xl:flex items-center">
          <button className="bg-custom-dark-blue hover:bg-custom-dark-blue text-white font-bold py-2 px-2 rounded-full inline-flex items-center">
            <span className="flex-shrink-0 h-10 w-10 relative">
              <img
                className="rounded-full border border-white shadow-sm w-full h-auto"
                src={chromeICON}
                alt="Logo"
              />
            </span>
            <span className="text-[20px] px-4 -mt-2">سجل الدخول</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
