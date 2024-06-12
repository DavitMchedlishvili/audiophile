import "./product-section.css"
import HeadphoneImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png"
import SpeakersImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png"
import Earphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png"

const ProductSection = () => {
  return (
    <>
      <section className="products">
        <div className="container product-section">
          <div className="product-card">
            <img src={HeadphoneImg} alt="" />
            <h3>Headphones</h3>
            <a  href="#">Shop &gt;</a>
          </div>

          <div className="product-card">
            <img src={SpeakersImg} alt="" />
            <h3>Speakers</h3>
            <a  href="#">Shop &gt;</a>
          </div>

          <div className="product-card">
            <img src={Earphones} alt="" />
            <h3>Earphones</h3>
            <a  href="#">Shop &gt;</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSection;
