import "./NavMail.css";

function NavMail({ clickContact }) {
  return (
    <button className="nav-mail" onClick={clickContact}>
      <img src="/icons/icon_mail.svg" alt="contact" />
    </button>
  );
}

export default NavMail;
