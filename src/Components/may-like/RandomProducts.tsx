import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../Store/hooks";
import { Data } from "../../Types/products";
import "./random-products.css"

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
                <img  src={`/${product.image. }`}alt="" />
                <h3>{product.name}</h3>
                <Link className="orange-btn" to={`/products/${param.productName}/${product.id}`}>See Product</Link>
             </div>
            
        ))}
      </div>
    </div>
  );
};

export default RandomProducts;
