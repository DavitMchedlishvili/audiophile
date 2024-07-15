import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../Store/Products/Products.asyncActions";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import GoBackButton from "../../Components/go-back-button/GoBackButton";

import ProductSection from "../../Components/product-section/ProductSection";
import Article from "../../Components/article-section/Article";
import RandomProducts from "../../Components/may-like/RandomProducts";
import { Product } from "../../Types/products";
import { cartItem, updateCart } from "../../Store/Cart.Slice";
import Counter from "../../Components/counter/Counter";
import "./product.css";
import "./product-tablet.css";
import "./product-mobile.css";

export const getProductCurrNumber = (
  cartArray: cartItem[],
  product: Product
) => {
  const prod = cartArray.find((prod) => prod.product.id === product?.id);
  if (prod) {
    return prod.amount;
  }
  return 1;
};

export const formatNumberWithDots = (number: number) => {
  return new Intl.NumberFormat("en-US").format(number);
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
    return <div className="container data-loading-massage">loading...</div>;
  }

  if (!product) {
    return (
      <div className="container data-product-massage">Product not found</div>
    );
  }

  return (
    <div className="components-div">
      <div className="container">
        <GoBackButton />
        <div className="product-details-overall">
          <div className="product-details-container">
            <picture className="product-details-image">
              <source
                media="(max-width: 375px) "
                srcSet={`/${product.image.mobile}`}
              />
              <source
                media="(min-width: 376px) and (max-width: 768px)"
                srcSet={`/${product.image.tablet}`}
              />

              <img src={`/${product.image.desktop}`} alt="image" />
            </picture>

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
                <Counter maxQuantity={50} number={num} setNumber={setNum} />

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

            <div className="in-the-box">
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
              <picture className="gallery-left-top">
                <source
                  media="(max-width 375px)"
                  srcSet={`/${product.gallery.first.mobile}`}
                />
                <source
                  media="(min-width: 376px) and (max-width: 768px)"
                  srcSet={`/${product.gallery.first.tablet}`}
                />
                <img src={`/${product.gallery.first.desktop}`} alt="image" />
              </picture>
              <picture className="gallery-left-bottom">
                <source
                  media="(max-width 375px)"
                  srcSet={`/${product.gallery.second.mobile}`}
                />
                <source
                  media="(min-width: 376px) and (max-width: 768px)"
                  srcSet={`/${product.gallery.second.tablet}`}
                />
                <img src={`/${product.gallery.second.desktop}`} alt="image" />
              </picture>
            </div>
            <picture className="gallery-right">
              <source
                media="(max-width 375px)"
                srcSet={`/${product.gallery.third.mobile}`}
              />
              <source
                media="(min-width: 376px) and (max-width: 768px)"
                srcSet={`/${product.gallery.third.tablet}`}
              />
              <img src={`/${product.gallery.third.desktop}`} alt="image" />
            </picture>
          </div>
          {/* <div className="gallery-tablet">
            <div className="gallery-left-tablet">
              <img
                className="gallery-left-top-tablet"
                src={`/${product.gallery.first.tablet}`}
                alt="image"
              />
              <img
                className="gallery-left-bottom-tablet"
                src={`/${product.gallery.second.tablet}`}
                alt="image"
              />
            </div>
            <div className="gallery-right-tablet">
              <img
                className="gallery-right-image-tablet"
                src={`/${product.gallery.third.tablet}`}
                alt="image"
              />
              
            </div>
          </div> */}
        </div>
      </div>
      <RandomProducts />
      <ProductSection />
      <Article />
    </div>
  );
};

export default SingleProduct;
