import React, { useEffect, useState } from "react";
import SingleBlogPost from "../Pages/single-blog-Post";
import {baseapi} from "../Constant"


const SinglePost = () => {
  const [postData, setPostData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${baseapi}/post/all-posts`);
      const fullresponse = response.json();
      console.log("full response::::::::::::")
      console.log(fullresponse)
      console.log("full response::::::::::::")
      return fullresponse;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData()
      .then((miles) => {
        console.log("the posts => ", miles);
        setPostData(miles.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div>
        <h4 className="font-bold mb-5">Latest Posts</h4>
        <h2>This must be the  blog section!!!!</h2>
        <h1>And this is the {baseapi}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {postData.slice(0, 9).map((post) => (
            <SingleBlogPost key={post.id} cohort2post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
