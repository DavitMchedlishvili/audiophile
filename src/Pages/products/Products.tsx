import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { fetchProducts } from "../../Store/Products/Products.asyncActions";
import { useEffect } from "react";
import ProductSection from "../../Components/product-section/ProductSection";
import Article from "../../Components/article-section/Article";
import "./products.css";






const Products = () => {
  const params = useParams();

  const productsData = useAppSelector((state) => state.products.data);
  const status = useAppSelector((state) => state.products.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "failed") {
    return <div>error happend</div>;
  }

  if (status === "loading") {
    return <div>...loading</div>;
  }

  return (
    <><div className="products-page-overall">
 <div className="product-name-container">
        <h1>{params.productName}</h1>
      </div>
      <div className="container products-page-container">
        {status === "loaded" &&
          productsData
            .slice()
            .reverse()
            .map((item) => {
              if (item.category === params.productName) {
                return (
                  <div className="product-container" key={item.id}>
                    <div
                      className={
                        +item.id % 2 === 1
                          ? "single-product  reverse"
                          : "single-product"
                      }
                    >
                      <img src={`/${item.image.desktop}`} alt="image" />

                      <div className="product-info">
                        {item.new ? <p className="new">New Product</p> : null}
                        <h1 className="product-name">{item.name}</h1>
                        <p className="product-description">
                          {item.description}
                        </p>
                        <Link
                          className="orange-btn"
                          to={`/products/${params.productName}/${item.id}`}
                        >
                          See details
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
            })}

        
      </div>
      <ProductSection />
      <Article />
    </div>
     
      
    </>
  );
};

export default Products;
