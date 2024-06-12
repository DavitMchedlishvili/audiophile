import "./speaker-zx9.css"
import SpeakerImg from "../../assets/home/desktop/image-speaker-zx9.png";
import CirclesImg from "../../assets/home/desktop/pattern-circles.svg";

const SpeakerZx9 = () => {
  return (
    <>
    <section className="speaker-zx9">
      <div className="container speaker-zx9-container">
          <img className="speaker-img" src={SpeakerImg} alt="" />
          <img className="circle-img" src={CirclesImg} alt="" />
        <div className="zx9-right">
          <h1>ZX9 Speaker</h1>
           <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
           <a  href="#">See Product</a>
        </div>
      </div>
    </section>
    </>
  )
}

export default SpeakerZx9
