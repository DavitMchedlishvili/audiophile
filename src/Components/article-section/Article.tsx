import "./article.css"
import "./article-tablet.css"
import ArticleIMG from "../../assets/shared/desktop/image-best-gear.jpg"
import TabletIMG from "../../assets/shared/tablet/image-best-gear.jpg"




const Article = () => {
  return (
    
    <article className="gear-article">
      <div className="container gear-container">
        <div className="gear-top-tablet">
          <img  src={TabletIMG} alt="gear img" />
        </div>
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
        <div className="gear-right">
            <img src={ArticleIMG} alt="gear img" />
        </div>
      </div>
    </article>
  );
};

export default Article;
