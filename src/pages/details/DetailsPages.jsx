import React, { useContext, useState } from "react";
import "./details.css";
import "../../components/header/header.css";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { Comment } from "../../components";

const DetailsPages = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useContext(DataContext);

  const [comment, setComment] = useState("");
  const [update, setUpdate] = useState(false);
  const blog = blogs.find((blog) => blog.id === +id);

  const handleDelete = () => {
    const blogsUpdated = blogs.filter((el) => el.id !== +id);
    setBlogs(blogsUpdated);
    localStorage.setItem("blogs", JSON.stringify(blogsUpdated));
    navigate("/");
  };

  const handleComment = (e) => {
    e.preventDefault();
    const indexToUpdate = blogs.findIndex((el) => el.id === +id);

    if (indexToUpdate !== -1) {
      const updatedBlog = { ...blogs[indexToUpdate] };
      if (!updatedBlog.comments) {
        updatedBlog.comments = [comment];
      } else {
        updatedBlog.comments.push(comment);
      }
      blogs[indexToUpdate] = updatedBlog;
      localStorage.setItem("blogs", JSON.stringify(blogs));
      setComment("");
      setUpdate(!update);
    } else {
      alert("Bình luận thất bại");
    }
  };

  return (
    <>
      {blog ? (
        <section className="singlePage">
          <div className="container">
            <div className="left">
              <img
                src={blog.cover ? blog.cover : "../images/blogs/b1.jpg"}
                alt=""
                style={{ width: "50%" }}
              />
            </div>
            <div style={{ marginTop: "30px" }}>
              <div className="buttons">
                <Link to={`/edit/${id}`} className="button">
                  <BsPencilSquare />
                </Link>
                <button className="button" onClick={handleDelete}>
                  <AiOutlineDelete />
                </button>
              </div>
              <h1>{blog.title}</h1>
              <p>{blogs.desc}</p>
              <p>{blog.desc}</p>
            </div>
            <div className="right">
              <h1>Bình luận</h1>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <div
                  style={{
                    border: "1px solid black",
                    flex: "11",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                >
                  <input
                    type="text"
                    value={comment}
                    placeholder="Bình luận"
                    onChange={(e) => setComment(e.target.value)}
                    style={{ width: "100%" }}
                  />
                </div>
                <button
                  className="button"
                  onClick={(e) => handleComment(e)}
                  style={{ flex: "1", background: "#24ABEA" }}
                >
                  Bình luận
                </button>
              </div>
              {blog?.comments?.map((el, index) => (
                <Comment name="Ngô Công Huân" comment={el} key={index} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default DetailsPages;
