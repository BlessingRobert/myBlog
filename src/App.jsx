import React from "react";
import Images from "../src/assets/Images.png";
import Advertisement from "./Components/advertisement";
import Hero from "./Components/hero";
import SinglePost from "./Components/singlePost";

const App = () => {

  

  return (
    <div className="mx-auto px-56">
      <Hero />

      <div className="content items-center justify-items-center absolute p-6 bottom-7 ml-2  shadow-xl bg-white rounded left-60">
        <h2 className="bg-blue-500 rounded w-fit p-1.5 text-white">
          Technology
        </h2>
        <div className="impact font-bold">
          <h2>
            The impact of Technology on <br /> the Workplace: How <br />{" "}
            Technology is Changing
          </h2>
        </div>
        <div>
          <div className="one-line flex space-x-4">
            <img src={Images} alt="" />
            <p>Jason Francisco</p>
            <p>August 20, 2022</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <Advertisement />
      </div>
      <SinglePost />
      <div className="flex justify-center">
        <Advertisement />
      </div>
    </div>
  );
};

export default App;
