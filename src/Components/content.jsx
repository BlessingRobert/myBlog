import React from "react";
import Images from "../assets/Images.png";

const Content = () => {
  return (
    <div>
      <div className="content items-center justify-items-center absolute p-6 bottom-7 ml-2 left-[60] text-white ">
        <h2 className="bg-blue-500 rounded w-fit p-1.5 text-white">
          Technology
        </h2>
        <div className="impact font-bold">
          <h1 className="font-[600] text-[29px] leading-10">
            The impact of Technology on the <br /> Workplace: How Technology is
            Changing
          </h1>
        </div>
        <div>
          <div className="one-line flex space-x-4 items-center">
            <img src={Images} alt="" />
            <p>Jason Francisco</p>
            <p>August 20, 2022</p>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Content;
