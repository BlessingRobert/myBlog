import React from "react";
import SinglePost from "../Components/singlePost.jsx";
import Advertisement from "../Components/advertisement.jsx";
import Hero from "../Components/hero.jsx";
import Content from "../Components/content.jsx";
import Secondheader from "../Components/secondheader.jsx";

const Blog = () => {

  return (
    <div className="mx-auto px-56">
      <div className="flex justify-center">
      <Secondheader className="flex justify-center mb-2"/>
      </div>
      <Hero />
     <Content />
      <SinglePost />
      <div className="flex justify-center">
      <Advertisement />
      </div>
    </div>
  );
};

export default Blog;
