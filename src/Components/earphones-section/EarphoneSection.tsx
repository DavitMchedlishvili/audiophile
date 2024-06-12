import "./earphone-section.css"
import EarphonesImg from "../../assets/home/desktop/image-earphones-yx1.jpg"



const EarphoneSection = () => {
  return (
    <section className="earphones">
        <div className="container earphones-section">
            <div className="earphones-left">
              <img className="earphones-img" src={EarphonesImg} alt="" />
            </div>
            <div className="earphones-right">
                <h1>YX1 EARPHONES</h1>
                <a href="#">See Product</a>
            </div>
        </div>
    </section>
  )
}

export default EarphoneSection
