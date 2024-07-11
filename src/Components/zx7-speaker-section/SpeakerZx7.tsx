import { Link } from "react-router-dom"
import "./speaker-zx7.css"
import "./speaker-zx7-tablet.css"

const SpeakerZx7 = () => {
  return (
    <section className="speaker-zx9">
        <div className="container speaker-zx7-container">
            <div className="zx7-left">
                <h1>ZX7 SPEAKER</h1>
                <Link className="gray-btn" to="/products/speakers/5">See Product</Link>
            </div>
        </div>
    </section>
  )
}

export default SpeakerZx7
