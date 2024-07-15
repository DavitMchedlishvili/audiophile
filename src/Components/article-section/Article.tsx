import ArticleIMG from "../../assets/shared/desktop/image-best-gear.jpg"
import TabletIMG from "../../assets/shared/tablet/image-best-gear.jpg"
import MobileIMG from "../../assets/shared/mobile/image-best-gear.jpg"
import "./article.css"
import "./article-tablet.css"
import "./article-mobile.css"



const Article = () => {
  return (
    
    <article className="gear-article">
      <div className="container gear-container">

        <div className="gear-left">
          <h1>
            Bringing you the <span>best</span> audio gear
          </h1>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>

        <picture className="gear-top-tablet">
          <source className="gear-mobile-img" media="(max-width: 376px)" srcSet={MobileIMG} />
          <source className="gear-tablet-img" media="(min-width: 376px) and (max-width: 768px)" srcSet={TabletIMG} />
          <img className="gear-desktop-img" src={ArticleIMG} alt="gear img" />
        </picture>
       
      </div>
    </article>
  );
};

export default Article;







