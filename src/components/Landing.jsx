import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                    className="w-[9vw] h-[4.5vw] rounded relative  bg-red-500 mt-4"
                  ></motion.div>
                )}
                <h1 className="flex items-center uppercase text-[6vw] h-full leading-[5.5vw] tracking-tighter text-8xl font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {" "}
            {item}{" "}
          </p>
        ))}

        <div className="start flex items-center gap-5">
          <button className="px-5 py-2 border-[1px] border-zinc-500 rounded-full font-light text-md uppercase">
            {" "}
            Start the project
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full  border-[1px] border-zinc-500">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
