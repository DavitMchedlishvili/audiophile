import { useSelector } from "react-redux";
import { Rootstate } from "../../Store/store";
import { Dispatch } from "react";
import { useState } from "react";
import Modal from "react-modal";
import "./checkout-modal.css";
import { useNavigate } from "react-router-dom";
import { formatNumberWithDots } from "../../Pages/product/Product";

type Props = {
  modalIsOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

const CheckoutModal = ({ modalIsOpen, setIsOpen }: Props) => {
  const navigate = useNavigate();
  const cartArray = useSelector((state: Rootstate) => state.cart.value);
  const [showAllItems, setShowAllItems] = useState(false);

  return (
    <Modal
      className="chekout-modal-container"
      isOpen={modalIsOpen}
      onAfterOpen={() => (document.body.style.overflow = "hidden")}
      onAfterClose={() => (document.body.style.overflow = "auto")}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setIsOpen(false)}
    >
      <div className="order-div">
        <svg
          className="order-icon"
          width="64"
          height="64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <circle fill="#D87D4A" cx="32" cy="32" r="32" />
            <path
              stroke="#FFF"
              stroke-width="4"
              d="m20.754 33.333 6.751 6.751 15.804-15.803"
            />
          </g>
        </svg>
        <h1>Thank you for your order</h1>
        <p className="email-confirmation">
          You will receive an email confirmation shortly.
        </p>

        <div className="order-cart">
          <div className="order-cart-left">
            <div className="order-cart-products">
              {cartArray
                .filter((_, index) => (showAllItems ? true : index === 0))
                .map((item) => {
                  const split: string[] = item.product.name.split(" ");
                  const itemName: string = split[0];
                  return (
                    <>
                      <div
                        className="order-single-product"
                        key={item.product.id}
                      >
                        <div className="order-product-left">
                          <img
                            width={50}
                            src={`/${item.product?.image.desktop}`}
                            alt="image"
                          />
                          <div className="order-product-details">
                            <p>{itemName}</p>
                            <span>
                              $ {formatNumberWithDots(item.product.price)}
                            </span>
                          </div>
                        </div>
                        <div className="order-product-right">
                          <p>x{item.amount}</p>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>

                {cartArray.length > 1 && (
                    <>
                      <div className="order-separator"></div>
                    <button
                      onClick={() => setShowAllItems(!showAllItems)}
                      className="order-showAll"
                    >
                      {" "}
                      {showAllItems
                        ? "View less"
                        : ` and ${cartArray.length - 1} other item(s)`}
                    </button>
                    </>
                  
                )}
                
            
          </div>

          <div className="order-cart-right">
            <span>Grand Total</span>
            <p className="order-total">
              $&nbsp;
              {formatNumberWithDots(
                cartArray.reduce(
                  (sum, item) => sum + item.product.price * item.amount,
                  0
                )
              )}
            </p>
          </div>
        </div>
        <button className="order-btn" onClick={() => navigate("/")}>
          Back to home
        </button>
      </div>
    </Modal>
  );
};

export default CheckoutModal;
