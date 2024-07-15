import "./hero.css"
import "./hero-tablet.css"
import "./hero-mobile.css"
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-left">
          <p className="new-product">New Product</p>
          <h1>XX99 Mark II HeadphoneS</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link className="orange-btn" to="/products/headphones/4">See product</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
