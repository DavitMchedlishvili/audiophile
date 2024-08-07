import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { fetchProducts } from "../../Store/Products/Products.asyncActions";
import { useEffect } from "react";
import ProductSection from "../../Components/product-section/ProductSection";
import Article from "../../Components/article-section/Article";
import "./products.css";
import "./products-tablet.css";
import "./products-mobile.css"

const Products = () => {
  const params = useParams();

  const productsData = useAppSelector((state) => state.products.data);
  const status = useAppSelector((state) => state.products.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    console.log(productsData);
  }, [dispatch]);

  if (status === "loading") {
    return <div className="container data-loading-massage">loading...</div>;
  }
  if (status === "failed") {
    return <div className="container data-error-massage">error happend</div>;
  }

  return (
    <>
      <div className="products-page-overall">
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
                        {/* <div className="single-product-img-div">
                      <img className="single-product-img"  src={`/${item.image.desktop}`}/>
                      <source className="single-product-tablet-img" src={`/${item.image.tablet}`}/>
                      </div> */}

                        <picture className="single-product-img-div">
                          <source
                            className="single-product-mobile-img"
                            srcSet={`/${item.image.mobile}`}
                            media="(max-width: 375px)"
                          />
                          <source
                            className="single-product-tablet-img"
                            srcSet={`/${item.image.tablet}`}
                            media="(min-width: 376px) and (max-width: 768px)"
                          />
                          <img
                            className="single-product-img"
                            src={`/${item.image.desktop}`}
                            alt="Product Image"
                          />
                        </picture>

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
