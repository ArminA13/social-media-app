import React from "react";
import ProfilePic from "../images/profile-1.jpg";
import "./Nav.css";
import { MdDarkMode } from "react-icons/md";
import { auth, provider } from "../../../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import "../HomePage/HomePage.css";

function Nav(props) {
  const [isAuth, setIsAuth] = useState(false);
  const [text, setText] = useState("LogIn");

  const signInWithGoogle = () => {
    if (localStorage.isAuth === "false") {
      signInWithPopup(auth, provider).then(() => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        setText("LogOut");
      });
    } else {
      signOut(auth).then(() => {
        localStorage.isAuth = false;
        setIsAuth(false);
        setText("LogIn");
      });
    }
  };

  const darkMode = () => {
    props.setDarkMode(!props.isDarkMode);
  };

  return (
    <nav className="body">
      <div className="container">
        <MdDarkMode className={`darkmode-img`} onClick={darkMode} />
        <h2 className="log">Սաքոի Մոտ</h2>
        <div className="search-bar">
          <i className="uil uil-search"></i>
          <input type="search" placeholder="Search for creators" />
        </div>
        <div className="create">
          <label className="btn btn-primary" htmlFor="create-post">
            Create
          </label>
          <label className={`create ${isAuth ? "In" : ""}`}>{text}</label>
          <div className="profile-photo">
            <img src={ProfilePic} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
