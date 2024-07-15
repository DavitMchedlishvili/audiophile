import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../Store/hooks";
import { Data } from "../../Types/products";
import "./random-products.css"
import "./random-products-tablet.css"
import "./random-products-mobile.css"

const RandomProducts = () => {

  const param = useParams();

  const productsData = useAppSelector((status) => status.products.data);

  const getRandomProducts = (products: Data, count: number) => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomPorudcts = getRandomProducts(productsData, 3);

  return (
    <div className="container random-products">
      <h1>You May Also Like</h1>
      <div className="random-products-cards">
        {randomPorudcts.map((product) => (
            
            <div key={product.id} className="random-product-Singlecard">
                <picture className="random-products-images">
                <source media="(max-width: 375px) " srcSet={`/${product.image.mobile }`} />
                <source media="(min-width: 376px) and (max-width: 768px)" srcSet={`/${product.image.tablet }`} />
                <img className= "random-desktop-img" src={`/${product.image.desktop }`}alt="" />
              </picture>
                <h3>{product.name}</h3>
                <Link className="orange-btn" to={`/products/${param.productName}/${product.id}`}>See Product</Link>
             </div>
            
        ))}
      </div>
    </div>
  );
};

export default RandomProducts;
