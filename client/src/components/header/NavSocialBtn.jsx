import "./NavSocial.css";

function NavSocialBtn(props) {
  const icon = "/icons/" + props.icon + ".svg";

  return (
    <a
      className="nav-social-btn"
      href={props.link}
      target="_blank"
      rel="noreferrer"
    >
      <img src={icon} alt={props.alt} />
    </a>
  );
}

export default NavSocialBtn;
