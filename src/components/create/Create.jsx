import React, { useContext, useState } from "react";
import "./create.css";
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router";

const Create = () => {
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
          <div className="img">
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
              placeholder="Tiêu đề"
              onChange={(e) =>
                setPayload((prev) => ({ ...prev, title: e.target.value }))
              }
            />

            <textarea
              placeholder="Mô tả"
              name=""
              id=""
              cols="30"
              rows="10"
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
                onClick={(e) => addBlog(e)}
              >
                Tạo Blog
              </button>
              <button
                className="button"
                style={{
                  backgroundColor: "red",
                }}
                onClick={() => navigate(`/`)}
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

export default Create;
