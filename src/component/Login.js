import { Email, Person, VisibilityOff } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import "./AuthUser.css";

function AuthUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
          console.log("user logged in", auth);
        })
        .catch((e) => alert(e.message));
    } else {
      alert("Please fill all the fields");
    }
    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <div className="authUser">
      <div className="authUser__content">
        <div className="authUser__title">
          <h4>Sign In</h4>
        </div>
        <div className="authUser__infos">
          <div className="authUser__info">
            <div className="authUser__infoLabel">
              <h5>Name</h5>
              <Person />
            </div>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="authUser__info">
            <div className="authUser__infoLabel">
              <h5>Email</h5>
              <Email />
            </div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <div className="authUser__info">
            <div className="authUser__infoLabel">
              <h5>Password</h5>
              <VisibilityOff />
            </div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="authUser__login">
          <button type="submit" onClick={handleLogin}>
            Login
          </button>
          <p>Are you new Here ?</p>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthUser;
