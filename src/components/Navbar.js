import React, { useState } from "react";
import Logo from "../Resources/images/Logo.svg";
import MobileMenu from "./MobileMenu";
import accountIcon from "../Resources/images/account-icon.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="relative">
      <div className="absolute inset-0 md:h-2/3 bg-custom-color-1"></div>
      <nav className="flex justify-between items-center py-6 px-10 bg-green-200 relative">
        {/* Mobile Menu Button, visible on screens smaller than 'md' */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          style={{ color: "black" }}
        >
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Mobile menu"
          >
            <path d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" />
          </svg>
        </button>

        {/* Desktop Elements, hidden on screens smaller than 'xl' */}
        <button className="hidden md:flex items-center">
          <div class="flex justify-center items-center bg-blue-800 rounded-full p-2 pl-4 gap-2">
            <div class="text-white text-2xl leading-none mt-[-9px] font-bold">
              حساب شخصي
            </div>
            <div class="bg-white rounded-full p-1 w-8 h-8 flex justify-center items-center">
              <img className=" size-5" src={accountIcon} alt="Icon"></img>
            </div>
          </div>
        </button>

        <ul className="hidden md:flex justify-center items-center text-white">
          <li className="mr-14 2md:mr-20">
            <a className="text-2xl hover:text-custom-dark-blue" href="#">
              اسعار
            </a>
          </li>
          <li className="mr-14 2md:mr-20">
            <a className="text-2xl hover:text-custom-dark-blue" href="#">
              مميزات
            </a>
          </li>
          <li>
            <a className="text-2xl hover:text-custom-dark-blue" href="#">
              شرح
            </a>
          </li>
        </ul>

        <a href="#">
          <img className="w-[150px] h-auto" src={Logo} alt="Logo" />
        </a>
      </nav>

      {isMenuOpen && (
        <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      )}
    </div>
  );
}

export default Navbar;
