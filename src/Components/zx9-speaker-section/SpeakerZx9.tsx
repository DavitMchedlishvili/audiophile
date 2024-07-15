import SpeakerImg from "../../assets/home/desktop/image-speaker-zx9.png";
import SpeakerTablet from "../../assets/home/tablet/image-speaker-zx9.png";
import SpeakerMobile from "../../assets/home/mobile/image-speaker-zx9.png";
import CirclesImg from "../../assets/home/desktop/pattern-circles.svg";
import { Link } from "react-router-dom";
import "./speaker-zx9.css";
import "./speaker-zx9-tablet.css";
import "./speaker-zx9-mobile.css";

const SpeakerZx9 = () => {
  return (
    <>
      <section className="speaker-zx9">
        <div className="container speaker-zx9-container">
          {/* <img className="speaker-img" src={SpeakerImg} alt="speaker" />
          <img
            className="speaker-img-tablet"
            src={SpeakerTablet}
            alt="speaker"
          />
          <img src={SpeakerMobile} alt="speaker" /> */}
         
          <picture className="speaker-zx9-image">
            <source
             
              media="(max-width: 376px)"
              srcSet={SpeakerMobile}
            />
            <source
             
              media="(min-width: 376px) and (max-width: 768px)"
              srcSet={SpeakerTablet}
            />
            <img className="speaker-desktop-image" src={SpeakerImg} alt="speaker" />
          </picture>

          <img className="circle-img" src={CirclesImg} alt="#" />
          <div className="zx9-right">
            <h1> <span className="word">ZX9</span>  <span className="word">Speaker</span> </h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link className="black-btn" to="/products/speakers/6">
              See Product
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpeakerZx9;
