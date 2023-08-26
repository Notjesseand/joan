import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { scrollToSection } from "./scrollUtils";

const Header = (sectionId) => {
  const [dropdown, setDropdown] = useState(false);
  const toggle = () => {
    setDropdown(!dropdown);
    console.log(dropdown)
  };
  const openDropdown = () => setDropdown(true);
  const closeDropdown = () => setDropdown(false);

  

  return (
    <div className="fixed z-30 h-[12vh] md:h-[14vh] bg-[#ececec] w-full flex items-center justify-between mb-[24vh]">
      <img
        src={Logo}
        onClick={() => {
          scrollToSection("hero");
        }}
        alt=""
        className=" h-24 md:h-28 md:px-12"
      />
      <div className="md:flex space-x-8 w-full justify-center hidden">
        <span
          onClick={() => scrollToSection("hero")}
          className="hover:border-b-[1.5px] hover:border-orange-600 text-center border-slate-900 cursor-pointer"
        >
          Home
        </span>
        <span
          onClick={() => scrollToSection("author")}
          className=" cursor-pointer hover:border-b-[1.5px] hover:border-slate-900"
        >
          Author
        </span>
        <span
          onClick={() => scrollToSection("contact")}
          className="cursor-pointer hover:border-b-[1.5px] hover:border-slate-900"
        >
          Contact
        </span>
      </div>
      <FaBars
        onClick={toggle}
        className={`text-2xl mr-7 flex md:hidden cursor-pointer ${
          dropdown ? "rotate-90" : ""
        }`}
      />
      {dropdown && (
        <div
          className={` px-3 pb-2 backdrop-blur z-20  absolute w-full h-auto top-20 block md:hidden space-y-3 transition-opacity ${
            dropdown ? "opacity-100" : "opacity-0"
          }`}
        >
          <p
            className="cursor-pointer hover:text-orange-600 mt-2 text-[currentColor]"
            onClick={() => {
              scrollToSection("hero", toggle());
            }}
          >
            Home{" "}
          </p>
          <p
            className="cursor-pointer hover:text-orange-600"
            onClick={() => {
              scrollToSection("author", toggle());
            }}
          >
            Author
          </p>
          <p
            className="cursor-pointer hover:text-orange-600"
            onClick={() => {
              scrollToSection("contact", toggle());
            }}
          >
            Contact
          </p>
          <p className="cursor-pointer hover:text-orange-600">Reviews</p>
          {/* <p className="cursor-pointer hover:text-orange-600">Contacts</p> */}
        </div>
      )}
    </div>
  );
};

export default Header;
