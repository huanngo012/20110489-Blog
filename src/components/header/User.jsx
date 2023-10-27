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
                src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </button>
            {profileOpen && (
              <div className="openProfile boxItems" onClick={close}>
                <Link to="/account">
                  <div className="image">
                    <div className="img">
                      <img
                        src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <h4>Eden Smith</h4>
                      <label>Los Angeles, CA</label>
                    </div>
                  </div>
                </Link>
                <Link to="/create">
                  <button className="box">
                    <RiImageAddLine className="icon" />
                    <h4>Create Post</h4>
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
