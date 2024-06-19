import "./hero.css"


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
          <a className="orange-btn" href="#">See product</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
