import "./NavBurger.css";

function NavBurger({ setNavSmallScreenOpen }) {
  return (
    <button className="nav-burger" onClick={() => setNavSmallScreenOpen(true)}>
      <div className="nav-burger__line"></div>
      <div className="nav-burger__line"></div>
    </button>
  );
}

export default NavBurger;
