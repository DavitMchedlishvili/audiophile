  import "./product-section.css";
import HeadphoneImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakersImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import Earphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";

const ProductSection = () => {
  return (
    <>
      <section className="products">
        <div className="container product-section">
          <div className="product-card">
            <img src={HeadphoneImg} alt="" />
            <h3>Headphones</h3>
            <a className="shop-btn" href="/products/headphones">
              Shop   {" "}
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.322 1l5 5-5 5"
                  stroke="#D87D4A"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="product-card">
            <img src={SpeakersImg} alt="" />
            <h3>Speakers</h3>
            <a className="shop-btn" href="/products/speakers">
              Shop   {" "}
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.322 1l5 5-5 5"
                  stroke="#D87D4A"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="product-card">
            <img src={Earphones} alt="" />
            <h3>Earphones</h3>
            <a className="shop-btn" href="/products/earphones">
              Shop    {" "}
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.322 1l5 5-5 5"
                  stroke="#D87D4A"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSection;
