import "./banner.scss";
import smokeVideo from "../assets/smoke-wedding.mp4";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const Banner = () => {
  return (
    <section className="banner">
      <video className="background-video" autoPlay loop muted>
        <source src={smokeVideo} type="video/mp4" />
      </video>
      <div className="banner-text">
        <h1>Contacteazane apasand un buton!</h1>
        <div className="banner-icons">
          <a href="tel:your-phone-number">
            <PhoneInTalkIcon />
          </a>
          <a href="https://wa.me/your-whatsapp-number">
            <WhatsAppIcon />
          </a>
          <a href="https://www.facebook.com/your-facebook-profile">
            <FacebookIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
