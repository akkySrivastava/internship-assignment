import React, { useState } from "react";
import { auth } from "../firebase";
import "./Header.css";
import Modal from "react-modal";
import { IconButton } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";

function Header() {
  const [modal, setModal] = useState(false);

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__contentLeft">
          <p>
            GEEKSYNERY <small>Intern</small>
          </p>
        </div>
        <div className="header__contentRight">
          <div className="header__contentRightButton">
            <button onClick={() => setModal(true)}>Company Info</button>

            <button onClick={() => auth.signOut()}>Logout</button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modal}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModal(false)}
        style={{
          overlay: {
            width: 500,
            height: 400,
            background: "rgba(0,0,0,0.8)",
            top: "50%",
            left: "50%",
            marginTop: "-200px",
            marginLeft: "-250px",
          },
        }}
      >
        <div className="modal">
          <h3>Company Info</h3>
          <div className="modal__content">
            <p>
              Company : <span>GEEKSYNERY Technologies Pvt. Ltd</span>
            </p>
            <p>
              Address : <span>SanjayNagar, Bengaluru-56</span>
            </p>
            <p>
              Phone : <span>+91-9599419168</span>
            </p>
            <p>
              Email: <span>akkyjaicar@gmail.com</span>
            </p>
          </div>
          <div className="modal__cancel">
            <IconButton onClick={() => setModal(false)}>
              <Cancel className="cancel" />
            </IconButton>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Header;
