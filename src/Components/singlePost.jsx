import React, { useEffect, useState } from "react";
import SingleBlogPost from "../Pages/single-blog-Post";

const SinglePost = () => {
  const [postData, setPostData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://blog-api-ccdx.onrender.com/post/all-posts`
      );
      const fullresponse = await response.json();
      console.log("this is the code =>", fullresponse);
      return fullresponse;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    // .then((miles) => {
    //   console.log("the posts => ", miles);
    //   setPostData(miles.posts);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }, []);
  return (
    <div>
      <div>
        <h4 className="font-bold mb-5">Latest Posts</h4>
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
