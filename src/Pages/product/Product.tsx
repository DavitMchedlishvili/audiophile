import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../Store/Products/Products.asyncActions";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import GoBackButton from "../../Components/go-back-button/GoBackButton";
import "./product.css";
import ProductSection from "../../Components/product-section/ProductSection";
import Article from "../../Components/article-section/Article";
import RandomProducts from "../../Components/may-like/RandomProducts";
import {  Product } from "../../Types/products";
import { cartItem, updateCart } from "../../Store/Cart.Slice";
import Counter from "../../Components/counter/Counter";




export const getProductCurrNumber = (cartArray: cartItem[], product: Product) => {
  const prod = cartArray.find((prod) => prod.product.id === product?.id);
  if (prod) {
    return prod.amount;
  }
  return 1;
};

const SingleProduct: React.FC = () => {
  const param = useParams();
  const [num, setNum] = useState(1);
  const cartArray = useAppSelector((state) => state.cart.value);
  const dispatch = useAppDispatch();
  const productsData = useAppSelector((state) => state.products.data);
  const status = useAppSelector((state) => state.products.status);



  

  useEffect(() => {
    if (productsData.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, productsData.length]);

  // const numericProductId =  param.productId;
  const product = productsData.find((p) => p.id === param.productId);

  useEffect(() => {
    if (!product) return;
    setNum(getProductCurrNumber(cartArray, product));
  }, [product, setNum, cartArray]);

  useEffect(() => {
    console.log("Cart State:", cartArray);
  }, [cartArray]);

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
    <div className="components-div">
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
                <Counter maxQuantity={50} number={num} setNumber={setNum}/>

                <button
                  className="addToCart-btn orange-btn"
                  onClick={() => dispatch(updateCart({ num, product }))}
                >
                  ADD TO CART
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
        </div>
      </div>
      <RandomProducts />
      <ProductSection />
      <Article />
    </div>
  );
};

export default SingleProduct;
