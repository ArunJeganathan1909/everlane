import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../../assets/data/blogdata";
import "../../assets/css/components/BlogPage.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const BlogsPage = () => {
  const { blogTitle } = useParams();
  const blog = blogs.find((b) => b.blogTitle === decodeURIComponent(blogTitle));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  // Helper function to chunk the blog descriptions
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const descriptionChunks = chunkArray(blog.blogDescriptions, 3);

  return (
    <div className="blog-detail-page">
      <div className="blog-section1">
        <div className="blog-section1-image-container">
          <img src={blog.images[0]} alt="" className="blog-primaryImage" />
        </div>
        <div className="blog-section1-contant">
          <div className="blog-section1-blogType">
            <span>{blog.blogType}</span>
          </div>
          <div className="blog-section1-blogType-blogTitle">
            <span>{blog.blogType}</span>
            <span>{blog.blogTitle}</span>
          </div>
          <div className="blog-section1-titleDescription">
            <span>{blog.titleDescription}</span>
          </div>
        </div>
      </div>
      <div className="blog-section2">
        <div className="blog-section2-style"></div>
        <div className="blog-soacialArea">
          <div className="blog-soacialIcons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
          <div className="blog-socialDescription">
            <span>{blog.socialDescription}</span>
          </div>
        </div>
      </div>

      {descriptionChunks.map((chunk, chunkIndex) => (
        <React.Fragment key={chunkIndex}>
          {blog.images[chunkIndex + 1] && (
            <div className="blog-section3">
              <img
                src={blog.images[chunkIndex + 1]}
                alt={`Blog image ${chunkIndex + 1}`}
              />
            </div>
          )}
          <div className="blog-section4">
            {chunk.map((description, index) => (
              <div key={index} className="blogDescription">
                <span className="blogDescription-heading">
                  {description.heading}
                </span>
                <span className="blogDescription-contant">
                  {description.contant}
                </span>
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default BlogsPage;
