import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../Store/Products/Products.asyncActions";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import GoBackButton from "../../Components/go-back-button/GoBackButton";
import "./product.css";
import ProductSection from "../../Components/product-section/ProductSection";
import Article from "../../Components/article-section/Article";

const Product: React.FC = () => {
  const param = useParams();

  const dispatch = useAppDispatch();
  const productsData = useAppSelector((state) => state.products.data);
  const status = useAppSelector((state) => state.products.status);

  const [count, setCount] = useState(1);

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  useEffect(() => {
    if (productsData.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, productsData.length]);

  const numericProductId = +param.productId;
  const product = productsData.find((p) => +p.id === numericProductId);

  if (status === "failed") {
    return <div className="container data-error-massage">error happend</div>;
  }

  if (status === "loading") {
    return <div className="container data-loading-massage">...loading</div>;
  }

  if (!product) {
    return (
      <div className="container data-product-massage">Product not found</div>
    );
  }

  const formatNumberWithDots = (number: number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };

  return (
    <>
      <div className="container">
        <GoBackButton />
        <div className="product-details-overall">
          <div className="product-details-container">
            <img
              className="product-details-image"
              src={`/${product.image.desktop}`}
              alt="image"
            />
            <div className="product-details">
              {product.new ? <p className="new">New Product</p> : null}
              <h1 className="product-details-name">{product.name}</h1>
              <p className="product-details-description">
                {product.description}
              </p>
              <p className="product-details-price">
                $ {formatNumberWithDots(product.price)}
              </p>
              <div className="product-details-buttons">
                <button className="minus-btn" onClick={decrease}>
                  -
                </button>
                <span className="counter">{count}</span>
                <button className="plus-btn" onClick={increase}>
                  +
                </button>
                <button className="addToCart-btn orange-btn">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>

          <div className="additional-details">
            <div className="features">
              <h1>Features</h1>
              {product.features.split("\n").map((line, index) => (
                <p key={index}>
                  {line}
                  <br />
                </p>
              ))}
            </div>

            <div className="inTheBox">
              <h1>In The Box</h1>
              <div className="product-includes">
                {product.includes.map((item, index) => (
                  <li className="includes-list" key={index}>
                    <span className="list-quantity">{item.quantity}x </span>
                    <span className="list-item">{item.item}</span>
                  </li>
                ))}
              </div>
            </div>
          </div>

          <div className="gallery">
        <div className="gallery-left">
        <img
          className="gallery-left-top"
          src={`/${product.gallery.first.desktop}`}
          alt="image"
        />
        <img
          className="gallery-left-bottom"
          src={`/${product.gallery.second.desktop}`}
          alt="image"
        />
        </div>
        <div className="gallery-right">
        <img
          className="gallery-right-image"
          src={`/${product.gallery.third.desktop}`}
          alt="image"
        />     
        </div>
      </div>
      <ProductSection/>
        <Article/>
        </div>
        
      </div>
    </>
  );
};

export default Product;
