import Article from "../Components/article-section/Article"
import EarphoneSection from "../Components/earphones-section/EarphoneSection"
import Hero from "../Components/hero/Hero"
import ProductSection from "../Components/product-section/ProductSection"
import SpeakerZx7 from "../Components/zx7-speaker-section/SpeakerZx7"
import SpeakerZx9 from "../Components/zx9-speaker-section/SpeakerZx9"



const Home = () => {
  return (
    <>
    <Hero/>
    <ProductSection/>
    <SpeakerZx9/>
    <SpeakerZx7/>
    <EarphoneSection/>
    <Article/>
    </>
  )
}

export default Home

