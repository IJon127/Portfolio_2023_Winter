import { useState } from "react";
import "./Header.css";
import NavSocial from "./NavSocial.jsx";

function Header({ setModal, about }) {
  // const [navSmallScreenOpen, setNavSmallScreenOpen] = useState(false);

  const clickAbout = () => {
    setModal.opened(true);
    setModal.content(about);
    setModal.type("about");
  };

  const clickContact = () => {
    setModal.opened(true);
    setModal.type("contact");
  };

  return (
    <div className="header">
      <div className="header__container">
        <button
          className="header__btn"
          onClick={() => {
            clickAbout();
          }}
        >
          about
        </button>
        <button
          className="header__btn"
          onClick={() => {
            clickContact();
          }}
        >
          contact
        </button>
        <NavSocial />
      </div>
    </div>
  );
}

export default Header;
