import React from "react";
import {BsArrowRight} from 'react-icons/bs'
import Book from '../assets/book.png'

const Hero = () => {
   const animationStyle = {
     animation: "bounce 2.5s infinite", // 'bounce' is the animation name defined in CSS
   };
   const colors = {
    animation:""
   }
  return (
    <div id="hero" className=" flex-grow flex pt-[12vh] md:pt-[14vh] ">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        <div className="col-span-3 md:col-span-2 min-h-[86vh] md:min-h-[50vh] bg-[#f0e2ee] w-full flex flex-col justify-center pb-12">
          <div className="gap-1  w-full mx-auto flex md:inline flex-col text-center md:text-start md:pl-24 items-center">
            <p className="flex text-5xl">THE LATE BLOOMER</p>
            <p className="font-satisfy text-xl font-bold ">A Memoir</p>
            <p className="mt-3" style={animationStyle}>
              coming soon
            </p>
            {/* <h1 class="gradient-text">Buchi Gadgets</h1> */}

            {/* coming soon button */}
            {/* <div className="mt-5 flex items-center">
              <button className="border border-slate-800 px-4 h-10 hover:bg-slate-900 hover:text-white">
                Presave
              </button>
              <button className="border border-slate-800 flex items-center justify-center w-14 h-10 bg-slate-900 hover:text-white">
                <BsArrowRight className="text-white hover:ml-2 font-extrabold  hover:text-[#f0e2ee] h-full flex text-xl bg-pink" />
              </button>
            </div> */}
            {/* <p className="underline mt-2 cursor-pointer hover:text-slate-600">or get the e-copy</p> */}
          </div>
        </div>
        <div className="bg-slate-900 w-full flex flex-col justify-center py-20 ">
          <img
            src={Book}
            className=" md:h-3/4 w-auto md:absolute md:-ml-[15%] rounded-md"
            alt=""
          />
          {/* <p>THE LATE BLOOMER</p> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;