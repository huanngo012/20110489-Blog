import React, { useContext, useState } from "react";
import "./Edit.css";
import { DataContext } from "../../context/DataProvider";
import { useNavigate, useParams } from "react-router-dom";

export const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useContext(DataContext);
  const blog = blogs.find((blog) => blog.id === +id);
  const [payload, setPayload] = useState({
    title: blog?.title,
    desc: blog?.desc,
    cover: "",
  });
  const editBlog = (e) => {
    e.preventDefault();
    const indexToUpdate = blogs.findIndex((el) => el.id === +id);

    if (indexToUpdate !== -1) {
      const updatedBlog = {
        ...blogs[indexToUpdate],
        title: payload.title,
        desc: payload.desc,
      };
      blogs[indexToUpdate] = updatedBlog;

      localStorage.setItem("blogs", JSON.stringify(blogs));

      navigate(`/details/${id}`);
    } else {
      alert("Chỉnh sửa thất bại");
    }
  };

  return (
    <>
      <section className="newPost">
        <div className="container boxItems">
          <div className="img ">
            <img
              src="https://images.pexels.com/photos/6424244/pexels-photo-6424244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="image-preview"
            />
          </div>
          <form>
            <div className="inputfile flexCenter">
              <input type="file" accept="image/*" alt="img" />
            </div>
            <input
              type="text"
              value={payload?.title}
              placeholder="Title"
              onChange={(e) =>
                setPayload((prev) => ({ ...prev, title: e.target.value }))
              }
            />

            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={payload?.desc}
              onChange={(e) =>
                setPayload((prev) => ({ ...prev, desc: e.target.value }))
              }
            ></textarea>

            <button className="button" onClick={(e) => editBlog(e)}>
              Edit Post
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
