import React, { useState } from "react";
import "../../assets/css/components/EverworldStories.css";
import blogs from "../../assets/data/blogdata";
import { FaRecycle } from "react-icons/fa";
import ProgressImg1 from "../../assets/images/ProgressImg1.png";
import ProgressImg2 from "../../assets/images/ProgressImg2.png";
import ProgressImg3 from "../../assets/images/ProgressImg3.png";
import { useNavigate } from "react-router-dom";

const EverworldStories = () => {
  const navigate = useNavigate();

  // Sort blogs by createdAt in descending order (latest first)
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  // State to manage the number of blogs displayed
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  // Function to load more blogs
  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 6);
  };

  const handleBlogClick = (blogTitle) => {
    navigate(`/about/everworldStories/blogs/${encodeURIComponent(blogTitle)}`);
  };

  return (
    <div className="blog-page">
      <div className="toppart">
        <div className="top-part-style"></div>
        <div className="toppart-contant-container">
          <div className="toppart-contant-heading">
            <span>everworld</span>
          </div>
          <div className="toppart-contant">
            <span>We’re on a mission to clean up a dirty industry. </span>
            <span>
              These are the people, stories, and ideas that will help us get
              there.
            </span>
          </div>
        </div>
      </div>
      <div className="latestblog">
        <div className="latestblog-heading">The Latest</div>
        <div className="latestblog-container">
          {sortedBlogs.slice(0, visibleBlogs).map((blog, index) => (
            <div
              className="blog-container"
              key={index}
              onClick={() => handleBlogClick(blog.blogTitle)}
            >
              <div className="blog-image">
                <img src={blog.images[0]} alt="" />
              </div>
              <div className="blog-title">
                <span>{blog.blogTitle}</span>
              </div>
              <div className="blog-type">
                <span>{blog.blogType}</span>
              </div>
            </div>
          ))}
        </div>
        {visibleBlogs < sortedBlogs.length && (
          <div className="latestblog-morebutton">
            <button onClick={loadMoreBlogs}>Load more Articles</button>
          </div>
        )}
      </div>
      <div className="design-container">
        <div className="animation-container">
          <div className="animation">
            <div className="animation-slides">
              <div className="animation-slide">
                <div className="animation-slide-icon">
                  <FaRecycle className="animation-slide-recycleicon" />
                </div>
                <div className="animation-slide-contant">
                  <span>Keep It Clean</span>
                </div>
              </div>
              <div className="animation-slide">
                <div className="animation-slide-icon">
                  <FaRecycle className="animation-slide-recycleicon" />
                </div>
                <div className="animation-slide-contant">
                  <span>Keep It Cool</span>
                </div>
              </div>
              <div className="animation-slide">
                <div className="animation-slide-icon">
                  <FaRecycle className="animation-slide-recycleicon" />
                </div>
                <div className="animation-slide-contant">
                  <span>Do Right By People</span>
                </div>
              </div>

              <div className="animation-slide">
                <div className="animation-slide-icon">
                  <FaRecycle className="animation-slide-recycleicon" />
                </div>
                <div className="animation-slide-contant">
                  <span>Keep World Clean</span>
                </div>
              </div>
              <div className="animation-slide">
                <div className="animation-slide-icon">
                  <FaRecycle className="animation-slide-recycleicon" />
                </div>
                <div className="animation-slide-contant">
                  <span>Keep It Cool</span>
                </div>
              </div>
              <div className="animation-slide">
                <div className="animation-slide-icon">
                  <FaRecycle className="animation-slide-recycleicon" />
                </div>
                <div className="animation-slide-contant">
                  <span>Do Right By People</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="progress-area">
        <div className="progress-heading">
          <span>Our Progress</span>
        </div>
        <div className="progress-container">
          <div className="progress-container-slides">
            <div className="progress-container-slide">
              <div className="progress-image">
                <img src={ProgressImg1} alt="" />
              </div>
              <div className="progress-title">
                <span>Carbon Commitment</span>
              </div>
            </div>
            <div className="progress-container-slide">
              <div className="progress-image">
                <img src={ProgressImg2} alt="" />
              </div>
              <div className="progress-title">
                <span>Environmental Initiatives</span>
              </div>
            </div>
            <div className="progress-container-slide">
              <div className="progress-image">
                <img src={ProgressImg3} alt="" />
              </div>
              <div className="progress-title">
                <span>Better Factories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="social">
        <div className="social-container">
          <div className="social-container-heading">
            <span>Follow us on social for more</span>
          </div>
          <div className="social-button">
            <button>@Everlane Instagram</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EverworldStories;
