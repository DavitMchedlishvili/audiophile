import "./earphone-section.css"
import "./earphone-section-tablet.css"
import "./earphones-section-mobile.css"
import { Link } from "react-router-dom"




const EarphoneSection = () => {
  return (
    <section className="earphones">
        <div className="container earphones-section">
            <div className="earphones-left">
             
            </div>
            <div className="earphones-right">
                <h1>YX1 EARPHONES</h1>
                <Link className="gray-btn" to="/products/earphones/1">See Product</Link>
            </div>
        </div>
    </section>
  )
}

export default EarphoneSection
