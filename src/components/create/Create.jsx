import React, { useContext, useState } from "react";
import "./create.css";
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router";

export const Create = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useContext(DataContext);
  const [payload, setPayload] = useState({
    title: "",
    desc: "",
    cover: "",
  });
  const addBlog = (e) => {
    e.preventDefault();
    const id = blogs?.length + 1;
    const { title, desc } = payload;
    setBlogs([...blogs, { id, title, desc }]);
    localStorage.setItem(
      "blogs",
      JSON.stringify([...blogs, { id, title, desc }])
    );
    setPayload({
      title: "",
      desc: "",
      cover: "",
    });
    navigate("/");
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
              onChange={(e) =>
                setPayload((prev) => ({ ...prev, desc: e.target.value }))
              }
            ></textarea>

            <button className="button" onClick={(e) => addBlog(e)}>
              Create Post
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
