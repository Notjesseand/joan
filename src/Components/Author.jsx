import React from 'react'
import Profile from "../assets/profile.png";
import { scrollToSection } from "./scrollUtils";

const Author = () => {
  return (
    <div id='author' className="md:h-screen bg-[#e5f1f5]  md:flex justify-around  md:pb-0 pt-[8vh]">
      <div className=" md:w-1/2 text-white flex flex-col justify-center">
        <p className="uppercase flex justify-center md:justify-end items-end text-black text-2xl md:text-4xl mb-4">
          <span className="border-bottom flex border-b-2 border-orange-600 -rotate-2">
            About{" "}
          </span>
          {"\u00A0"}
          the author
        </p>

        <div className=" justify-center md:justify-end p-0 flex">
          {" "}
          {/* Flex container for alignment */}
          <p className="text-black w-4/5 inline-block text-center md:text-end mx-auto md:mx-0">
            The Late Bloomer is the incredible but true life story of a
            determined teenage wife and mother who went from possessing only the
            FSLC to earning a Ph.D. In this compelling book Joan Oji narrates
            how Nigerians' speculation and insinuation about her academic
            qualifications fired her ambition to study more than ever to
            validate her certificates. Her uncommon ability to combine
            child-bearing and raising 8 daughters, active working life as a
            public school teacher, and continuous self-development makes this
            memoir inspiring. <br />
            <span className=" indent-6 flex mt-1">
              The Late Bloomer celebrates the author's 50 years in marriage and
              the challenges she overcame on her journey through life. It is a
              compelling account of perseverance and success.
            </span>
          </p>
        </div>
      </div>

      <div className="h-full  md:w-1/2  text-white flex md:block">
        <img
          src={Profile}
          alt=""
          className=" h-72 md:h-full flex mx-auto md:mx-0 "
        />
      </div>
    </div>
  );
}

export default Author