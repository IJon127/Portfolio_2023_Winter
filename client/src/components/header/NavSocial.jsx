import "./NavSocial.css";
import NavsocialBtn from "./NavSocialBtn.jsx";

const socialBtns = [
  {
    id: 0,
    icon: "icon_github",
    alt: "github",
    link: "https://github.com/IJon127",
  },
  {
    id: 1,
    icon: "icon_instagram",
    alt: "instagram",
    link: "https://www.instagram.com/ijon.dosomething/",
  },
  {
    id: 2,
    icon: "icon_linkedin",
    alt: "linkedin",
    link: "https://www.linkedin.com/in/ijon-hsieh/",
  },
];

const createSocialBtn = (socialBtn) => {
  return (
    <NavsocialBtn
      key={socialBtn.id}
      icon={socialBtn.icon}
      alt={socialBtn.alt}
      link={socialBtn.link}
    />
  );
};

function NavSocial() {
  return <div className="nav-social">{socialBtns.map(createSocialBtn)}</div>;
}

export default NavSocial;
