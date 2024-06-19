// ProductComponent.tsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../Store/Products/Products.asyncActions";
import { useAppDispatch, useAppSelector } from "../Store/hooks";

const Product: React.FC = () => {
  const param = useParams();

  const dispatch = useAppDispatch();
  const productsData = useAppSelector((state) => state.products.data);
  const status = useAppSelector((state) => state.products.status);


  useEffect(() => {
    if (productsData.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, productsData.length]);

  const numericProductId= +param.productId;
  const product = productsData.find((p) => +p.id === numericProductId);



  if (status === "failed") {
    return <div>error happend</div>;
  }

  if (status === "loading") {
    return <div>...loading</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={`/${product.image.desktop}`} alt="image" />
    </div>
  );
};

export default Product;
