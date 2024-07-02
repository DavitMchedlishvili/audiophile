import { Dispatch } from "react";
import Modal from "react-modal";
import "./cart.css";
import { Link, useNavigate } from "react-router-dom";
import { Rootstate } from "../../Store/type";
import { useAppSelector } from "../../Store/hooks";
import Counter from "../counter/Counter";
import { useDispatch } from "react-redux";
import { getProductCurrNumber } from "../../Pages/product/Product";
import { clearCart, updateCart } from "../../Store/Cart.Slice";
import ClearCartButton from "../clearCart-btn/ClearCart";

type Props = {
  modalIsOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ modalIsOpen, setIsOpen }: Props) => {
  // const navigate = useNavigate();

  const cartArray = useAppSelector((state: Rootstate) => state.cart.value);
  const dispatch = useDispatch();

  console.log(cartArray);

  return (
    <>
    <div className="container">
    <Modal
        className="cart-modal"
        isOpen={modalIsOpen}
        onAfterOpen={() => (document.body.style.overflow = "hidden")}
        onAfterClose={() => (document.body.style.overflow = "auto")}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIsOpen(false)}
      >
        <div className="cart-container">
          <div className="cart-top">
          <h1>Cart ({cartArray.length})</h1>
          <ClearCartButton/>
          </div>
          
          <div className="cart-product-container">
            {cartArray.map((item) => {
              return (
                <div className="cart-single-product" key={item.product.id}>
                  <img
                    width={50}
                    src={`/${item.product?.image.desktop}`}
                    alt="image"
                  />
                  <div className="cart-product-details">
                  <p>{item.product.name}</p>
                  <p>{item.product.price}</p>
                  </div>
                  
                  

                  <Counter
                    maxQuantity={50}
                    minAmount={0}
                    number={getProductCurrNumber(cartArray, item.product)}
                    setNumber={(num: number) =>
                      dispatch(updateCart({ num, product: item.product }))
                    }
                  />
                </div>
              );
            })}
          </div>

          <Link to={"/checkout"}>Checkout</Link>
        </div>
      </Modal>
    </div>
      
    </>
  );
};

export default Cart;
