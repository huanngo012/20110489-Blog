import React from "react";
import { logo } from "../../assets";
import "./header.css";
import { User } from "./User";
import { nav } from "../../data/data";
import { Link } from "react-router-dom";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  return (
    <>
      <header className="header">
        <div className="scontainer flex">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" width="100px" />
          </Link>
          <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="account flexCenter">
            <User />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
