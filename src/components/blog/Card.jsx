import React, { useContext } from "react";
import "./blog.css";

import {
  AiOutlineTags,
  AiOutlineClockCircle,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";

export const Card = () => {
  const [blogs, setBlogs] = useContext(DataContext);
  return (
    <>
      <section className="blog">
        <div className="container grid3">
          {blogs.map((item, index) => (
            <Link key={index} to={`/details/${item.id}`} className="link">
              <div className="box boxItems" key={item.id}>
                <div className="img">
                  <img src={item.cover} alt="" />
                </div>
                <div className="details">
                  <div className="tag">
                    <AiOutlineTags className="icon" />
                    <a href="/">#{item.category}</a>
                  </div>
                  <h3>{item.title}</h3>

                  <p>{item?.desc?.slice(0, 180)}...</p>
                  <div className="date">
                    <AiOutlineClockCircle className="icon" />{" "}
                    <AiOutlineComment className="icon" />{" "}
                    <AiOutlineShareAlt className="icon" />{" "}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
