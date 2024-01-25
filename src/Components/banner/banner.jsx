import "./banner.scss";
import smokeVideo from "../assets/smoke-wedding.mp4";

const Banner = () => {
  return (
    <section className="banner">
      <video className="background-video" autoPlay loop muted>
        <source src={smokeVideo} type="video/mp4" />
      </video>
      <div className="banner-text">
        <h1>Contacteazane apasand un buton!</h1>
      </div>
    </section>
  );
};

export default Banner;
