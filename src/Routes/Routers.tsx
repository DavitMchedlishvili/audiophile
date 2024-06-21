import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
// import Earphones from "../Pages/Earphones"
// import Speakers from "../Pages/Speakers"
// import Headphones from "../Pages/Headphones"
import Products from "../Pages/products/Products";

import Product from "../Pages/product/Product";
import Checkout from "../Pages/checkout/Checkout";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:productName" element={<Products />} />
      <Route path="/products/:productName/:productId" element={<Product />} />
      <Route path="/checkout" element={<Checkout/>} />

    </Routes>
  );
};

export default Routers;
