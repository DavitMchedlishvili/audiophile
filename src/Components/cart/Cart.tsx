import { Dispatch } from "react";
import Modal from "react-modal";
import "./cart.css";
import "./cart-tablet.css"
import "./cart-mobile.css"

import { Rootstate } from "../../Store/type";
import { useAppSelector } from "../../Store/hooks";
import Counter from "../counter/Counter";
import { useDispatch } from "react-redux";
import {
  formatNumberWithDots,
  getProductCurrNumber,
} from "../../Pages/product/Product";
import { updateCart } from "../../Store/Cart.Slice";
import ClearCartButton from "../clearCart-btn/ClearCart";
import { useNavigate } from "react-router-dom";

type Props = {
  modalIsOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ modalIsOpen, setIsOpen }: Props) => {
  const navigate = useNavigate();
  const cartArray = useAppSelector((state: Rootstate) => state.cart.value);
  const dispatch = useDispatch();

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
            {cartArray.length > 0 ? (
              <>
                <div className="cart-top">
                  <h1>Cart ({cartArray.length})</h1>
                  <ClearCartButton />
                </div>

                <div className="cart-product-container">
                  {cartArray.map((item) => {
                    const split: string[] = item.product.name.split(" ");
                    const itemName: string = split[0];

                    return (
                      <>
                        <div
                          className="cart-single-product"
                          key={item.product.id}
                        >
                          <div className="cart-product-details-left">
                            <img
                              width={50}
                              src={`/${item.product?.image.desktop}`}
                              alt="image"
                            />
                            <div className="cart-product-details">
                              <p>{itemName}</p>
                              <span>
                                $ {formatNumberWithDots(item.product.price)}
                              </span>
                            </div>
                          </div>

                          <Counter
                            maxQuantity={50}
                            minAmount={0}
                            number={getProductCurrNumber(
                              cartArray,
                              item.product
                            )}
                            setNumber={(num: number) =>
                              dispatch(
                                updateCart({ num, product: item.product })
                              )
                            }
                          />
                        </div>
                      </>
                    );
                  })}

                  <div className="total-amount">
                    <span>Total</span>
                    <p>
                      $&nbsp;
                      {formatNumberWithDots(
                        cartArray.reduce(
                          (sum, item) => sum + item.product.price * item.amount,
                          0
                        )
                      )}
                    </p>
                  </div>
                  <button
                    className="cart-btn"
                    onClick={() => {
                      setIsOpen(false);
                      navigate("/checkout");
                    }}
                  >
                    Checkout
                  </button>
                </div>
              </>
            ) : (
              <p className="empty-cart">Cart is empty</p>
            )}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Cart;
