import React, { useState } from "react";
import { RiImageAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const User = () => {
  const user = true;
  const [profileOpen, setProfileOpen] = useState(false);
  const close = () => {
    setProfileOpen(false);
  };
  return (
    <>
      <div className="profile">
        {user ? (
          <>
            <button
              className="img"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <img
                src="https://kenh14cdn.com/203336854389633024/2022/5/9/photo-1-1652081689947418553935.png"
                alt=""
              />
            </button>
            {profileOpen && (
              <div className="openProfile boxItems" onClick={close}>
                <Link>
                  <div className="image">
                    <div className="img">
                      <img
                        src="https://kenh14cdn.com/203336854389633024/2022/5/9/photo-1-1652081689947418553935.png"
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <h4>Ngô Công Huân</h4>
                      <label>20110489</label>
                    </div>
                  </div>
                </Link>
                <Link to="/create">
                  <button className="box">
                    <RiImageAddLine className="icon" />
                    <h4>Tạo Blog</h4>
                  </button>
                </Link>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  );
};
