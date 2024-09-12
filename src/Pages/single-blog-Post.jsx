import React, { useState } from "react";
import { Link } from "react-router-dom";

const SingleBlogPost = ({ cohort2post }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };
  //   const something = props.cohort2post;

  return (
    <div>
      <h1>It is exciting to be here again!!!!!</h1>
      <div className="border border-gray-300  drop-shadow-md rounded-md p-3 h-full overflow-hidden">
        <img src={cohort2post?.post_image} alt="img" />
        <h5 className="text-blue-500">{cohort2post?.title}</h5>
        <p
          className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: cohort2post?.post_content }}
          style={
            isExpanded
              ? {}
              : {
                  WebkitLineClamp: 9,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  display: "-webkit-box",
                }
          }
        />
        {/* <button onClick={toggleReadMore} className="text-blue-500">
          {isExpanded ? 'Read Less' : 'Read More'}
        </button> */}
        <Link to={`/blog/${cohort2post?.slug}`}>
          <button className="text-blue-500">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleBlogPost;
