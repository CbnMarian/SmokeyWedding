import "./banner.scss";
import smoke from "../assets/smoke-wedding.gif";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const Banner = () => {
  return (
    <section id="Contact" className="banner">
      <div className="background-video">
        <img className="smokeGif" src={smoke} alt="gif/logo" />
      </div>
      <div className="banner-text">
        <h1>Contacteaza-ne ușor !</h1>
        <div className="banner-icons">
          <a
            href="tel:+40746950305"
            className="heartbeat"
            target="_blank"
            rel="noreferrer"
          >
            <PhoneInTalkIcon sx={{ fontSize: 35 }} />
          </a>
          <a
            href="https://wa.me/your-whatsapp-number"
            className="heartbeat"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon sx={{ fontSize: 35 }} />
          </a>
          <a
            href="https://www.facebook.com/your-facebook-profile"
            className="heartbeat"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon sx={{ fontSize: 35 }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
