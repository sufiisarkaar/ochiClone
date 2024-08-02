import { motion } from "framer-motion";
import { Power4 } from "gsap";
import React, { useState } from "react";

function Featured() {

  const [isHovering, setHovering] = useState(false);
  const [isHovering2nd, setHovering2nd] = useState(false);

  return (
    <div data-scroll data-scroll-section  data-scroll-speed=".2" className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20 ">
        <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight">
          Featured projects
        </h1>
      </div>
      {/* font-['Founders_Grotesk_X_Condensed'] */}
      <div className="px-20">
        <div className="cards flex gap-10 w-full mt-10">
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className=" cardcontainer w-1/2 h-[75vh] relative"
          >
            <h1 className="absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] text-8xl leading-none tracking-tighter">
              {" FYDE".split("").map((item, index) => (
                <motion.span initial={{ y: "100%" }} 
                animate={ isHovering ? ({y:"0"}) : ({y:"100%"})}
                transition = { {ease:[0.22,1,0.36,1], delay:index*.06} }
                className="inline-block ">
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl  overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div
            onMouseEnter={() => setHovering2nd(true)}
            onMouseLeave={() => setHovering2nd(false)}
          className="cardcontainer relative w-1/2 h-[75vh] ">
            <h1 className="absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] text-8xl leading-none tracking-tighter">
              {" VISE".split("").map((item, index) => (
                <motion.span initial={{ y: "100%" }} 
                animate={ isHovering2nd ? ({y:"0"}) : ({y:"100%"})}
                transition = { {ease:[0.22,1,0.36,1], delay:index*.06} }
                className="inline-block ">
                  {item}
                </motion.span> 
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl  overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
