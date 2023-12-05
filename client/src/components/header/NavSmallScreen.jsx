import { createPortal } from "react-dom";
// import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";

import "./NavSmallScreen.css";
import NavSocial from "./NavSocial.jsx";
// import Main from "../../layouts/main/Main.jsx";

function NavSmallScreen({ setNavSmallScreenOpen }) {
  const navBtns = [
    {
      name: "projects",
      link: "projects",
    },
    {
      name: "exercises",
      link: "exercises",
    },
    {
      name: "papers",
      link: "papers",
    },
    {
      name: "about",
      link: "about",
    },
    {
      name: "contact",
      link: "contact",
    },
  ];

  return createPortal(
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: "-100%" }}
      transition={{ type: "tween", duration: 0.25 }}
      className="nav-small-screen"
      scroll="no"
    >
      <div>
        <button
          onClick={() => setNavSmallScreenOpen(false)}
          className="nav-small-screen__close-btn"
        >
          ✕
        </button>
      </div>
      <div className="nav-small-screen__container">
        {navBtns.map((navBtn, index) => (
          <NavLink
            className="nav-small-screen__btn"
            key={index}
            to={navBtn.link}
            onClick={() => setNavSmallScreenOpen(false)}
          >
            {navBtn.name}
          </NavLink>
        ))}
        <NavSocial />
      </div>
    </motion.div>,
    document.getElementById("modal")
  );
}

export default NavSmallScreen;
