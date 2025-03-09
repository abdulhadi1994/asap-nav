import React from "react";
import NavLogo from "../assets/asapfrontend-logo.webp";
import { auth } from "../firebase/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useState, useEffect } from "react";
import NavSkeleton from "./ui/NavSkeleton.jsx";

const Nav = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (users) => {
      if (users) {
        setUser(users);
      }
      setLoading(false);
    });
  }, []);

  function signUp() {
    console.log("signUp()");
    createUserWithEmailAndPassword(auth, "ahadi94@outlook.com", "Abdul123")
      .then((user) => console.log(user))
      .catch((error) => console.log(error));
  }

  function logIn() {
    console.log("loggedIn()");
    signInWithEmailAndPassword(auth, "ahadi94@outlook.com", "Abdul123")
      .then((response) => setUser(response.user))
      .catch((error) => console.log(error));
  }

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__left">
          <a href="/">
            <img src={NavLogo} alt="" className="nav__logo" />
          </a>
        </div>
        <div className="nav__right">
          {user.name ? (
            <button className="circle" onClick={() => signUp()}>
              <span className="circle__inital">H</span>{" "}
            </button>
          ) : (
            <div className="nav__links">
              <a className="nav__link" onClick={() => logIn()}>
                Login
              </a>
              <button className="nav__link__btn" onClick={() => signUp()}>
                Get Started
              </button>
            </div>
          )}
        </div>
      </div>
      {loading ? "Loading..." : user.email}
    </nav>
  );
};

export default Nav;
