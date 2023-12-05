// import { NavLink } from "react-router-dom";
import "./Navbar.css";
import NavSocial from "./NavSocial.jsx";

function Navbar() {
  const navBtns = [
    {
      name: "about",
      link: "about",
    },
    {
      name: "contact",
      link: "contact",
    },
  ];

  // const clickAbout = () => {
  //     setModal.opened(true);
  //     setModal.content(about);
  //     setModal.type(about);
  //   };

  return (
    <div className="navbar">
      {navBtns.map((navBtn, index) => (
        <button className="navbar__btn" key={index} to={navBtn.link}>
          {navBtn.name}
        </button>
      ))}
      <button></button>
      <NavSocial />
    </div>
  );
}

export default Navbar;
