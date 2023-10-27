import React, { useContext, useState } from "react";
import "./Edit.css";
import { DataContext } from "../../context/DataProvider";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
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
              src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
              alt=""
              className="image-preview"
              style={{ objectFit: "contain" }}
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

            <div
              style={{ display: "flex", justifyContent: "end", gap: "20px" }}
            >
              <button
                className="button"
                style={{
                  backgroundColor: "green",
                }}
                onClick={(e) => editBlog(e)}
              >
                Chỉnh sửa
              </button>
              <button
                className="button"
                style={{
                  backgroundColor: "red",
                }}
                onClick={() => navigate(`/details/${id}`)}
              >
                Quay lại
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Edit;
