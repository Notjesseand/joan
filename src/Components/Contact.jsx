import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-[50vh] bg-slate-800 flex flex-col justify-between"
    >
      <div>
        <p className="font-script text-center text-2xl pt-14 font-bold text-slate-100">
          Joan Oji
        </p>
        <div className="w-full flex justify-center gap-5 mt-5 ">
          <div className="h-10 rounded-full w-10 border-[1.5px] border-slate-400 cursor-pointer text-slate-100 hover:text-slate-900 hover:bg-slate-200 flex items-center justify-center">
            <BiLogoFacebook className="text-center flex justify-center text-3xl" />
          </div>
          <div className="h-10 rounded-full w-10 border-[1.5px] border-slate-400 cursor-pointer text-slate-100 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center">
            <BsInstagram className="text-center flex justify-center text-2xl" />
          </div>
          <a
            href={`https://www.linkedin.com/in/joan-oji-934058190`}
            className="h-10 rounded-full w-10 border-[1.5px] border-slate-400 cursor-pointer text-slate-100 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center"
          >
            <FaLinkedinIn className="text-center flex justify-center text-2xl" />
          </a>
          <a
            href={`mailto:${"joanoji802@gmail.com"}`}
            className="h-10 rounded-full w-10 border-[1.5px] border-slate-400 cursor-pointer hover:text-slate-900 text-slate-100 hover:bg-slate-100 flex items-center justify-center"
          >
            <SiGmail className="text-center flex justify-center text-2xl" />
          </a>
        </div>
      </div>
      <a
        href={`https://www.linkedin.com/in/jesse-nnorom`}
        className="text-end px-7 cursor-pointer underline text-slate-300"
      >
        who designed this website?
      </a>
    </div>
  );
};

export default Contact;
