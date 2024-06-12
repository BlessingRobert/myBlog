import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { baseapi } from "../Constant/index";

const ThePost = () => {
  const params = useParams();
  const [post, setPost] = useState();
  console.log("from the post => ", params);

  console.log("the link => ", baseapi);

  // function to get the single blog post

  console.log("posts inside post data state => ", post);

  const fetchData = async () => {
    try {
      const response = await fetch(`${baseapi}/post/${params.slug}`);
      const fullresponse = response.json();
      return fullresponse;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData()
      .then((miles) => {
        console.log("the post => ", miles);
        setPost(miles.post);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex justify-center">
      <div className="drop-shadow-md rounded-md mx-56 p-3 w-[590px] ">
        <div>
          <img src={post?.post_image} alt="img" />
          <h5 className="text-blue-500">{post?.title}</h5>
          <p
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: post?.post_content }}
          />
        </div>
        <br /> <br />
        {/* a button that goes back to the blog page */}
        <div className="flex justify-center">
        <button className="bg-blue-700 rounded px-4 py-2 text-white">
          <Link to="/">Back</Link>
        </button>
        </div>
      </div>
    </div>
  );
};

export default ThePost;
