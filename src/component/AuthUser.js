import { Call, Email, Person, VisibilityOff, Work } from "@material-ui/icons";
import React, { useState } from "react";
import "./AuthUser.css";
import { Link } from "react-router-dom";
import db, { auth } from "../firebase";
import firebase from "firebase";

function AuthUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");

  const handleSelect = (e) => {
    setProfession(profession);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (email && password) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          if (auth) {
            console.log("User Created: ", auth);
          }
        })
        .catch((error) => alert(error.message));

      db.collection("users").add({
        name: name,
        email: email,
        password: password,
        phone: phone,
        profession: profession,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } else {
      alert("Please provide all the required field");
    }

    setEmail("");
    setPassword("");
    setPhone("");
    setName("");
    setProfession("");
  };
  return (
    <div className="authUser">
      <div className="authUser__content">
        <div className="authUser__title">
          <h4>Sign Up</h4>
        </div>
        <div className="authUser__infos">
          <div className="authUser__info">
            <div className="authUser__infoLabel">
              <h5>Name</h5>
              <Person />
            </div>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="authUser__info">
            <div className="authUser__infoLabel">
              <h5>Email</h5>
              <Email />
            </div>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="authUser__info">
            <div className="authUser__infoLabel">
              <h5>Password</h5>
              <VisibilityOff />
            </div>
            <input
              type="password"
              placeholder="Enter your email"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="authUser__info">
            <div className="authUser__infoLabel">
              <h5>Phone No.</h5>
              <Call />
            </div>
            <input
              type="text"
              placeholder="+91- Your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="authUser__info">
            <div className="authUser__infoLabel">
              <h5>Profession</h5>
              <Work />
            </div>
            <select onChange={handleSelect}>
              <option value="Doctor">Doctor</option>
              <option value="Lawyer">Lawyer</option>
              <option value="Actor">Actor</option>
              <option value="Professor">Professor</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="authUser__login">
          <button type="submit" onClick={handleRegister}>
            Register
          </button>
          <p>Already a member ?</p>
          <Link to="/login">
            <button>login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthUser;
