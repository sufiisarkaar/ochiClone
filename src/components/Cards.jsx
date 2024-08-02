import React from "react";

function Cards() {
  return (
    <div  className="w-full h-screen bg-[#CDEA68] flex items-center px-32 gap-5">
      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card relative rounded-xl w-full h-full bg-[#004D4E] flex justify-center items-center">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className="absolute px-5 py-1 left-10 bottom-10 border-2 border-[#CDEA68] text-[#CDEA68] rounded-full p-2"> &copy; 2019-2022</button>
        </div>
      </div>

      <div className="cardcontainer w-1/2 h-[50vh] flex gap-5">
        <div className="card relative rounded-xl w-1/2 h-full bg-[#333c3c]  flex justify-center items-center">
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className="absolute px-5 py-1 left-10 bottom-10 border-2 border-[#CDEA68] text-[#CDEA68] rounded-full p-2"> &copy; 2019-2022</button>
        </div>
        <div className="card relative rounded-xl w-1/2 h-full bg-[#333c3c]  flex justify-center items-center">
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className="absolute px-5 py-1 left-10 bottom-10 border-2 border-[#CDEA68] text-[#CDEA68] rounded-full p-2"> &copy; 2019-2022</button>
        </div>
      </div>
    </div>
  ); 
}

export default Cards;
