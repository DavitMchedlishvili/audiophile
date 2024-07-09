import { useForm } from "react-hook-form";
import GoBackButton from "../../Components/go-back-button/GoBackButton";
import Input from "../../Components/inputs/Inputs";
import { useAppSelector } from "../../Store/hooks";
import { Rootstate } from "../../Store/store";
import { formatNumberWithDots } from "../product/Product";
import "./checkout.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export type Inputs = {
  name: string;
  email: string;
  phoneNumber: number;
  address: string;
  zipCode: number;
  city: string;
  country: string;
  paymentMethod: string;
  eMoneyNumber?: number;
  eMoneyPin?: number;
};

const Checkout = () => {
  const navigate = useNavigate();
  const cartArray = useAppSelector((state: Rootstate) => state.cart.value);
  const [paymentMethod, setPaymentMethod] = useState<"e-money" | "cash">(
    "e-money"
  );

  const totalAmount = cartArray.reduce(
    (sum, item) => sum + item.product.price * item.amount,
    0
  );
  const vat = totalAmount * 0.2;
  const shipping = 50;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    console.log("btn works", data);
  };

  useEffect(() => {
    if (cartArray.length === 0) return navigate("/");
  }, [cartArray, navigate]);

  return (
    <>
      <div className="checkout-body">
        <div className="container checkout-container">
          <GoBackButton />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="checkout-summary-container"
          >
            <div className="checkout-inputs-container">
              <h1>Checkout</h1>

              {/* Billing Details /////////////////////////////////////////////////////////////////////////////*/}

              <div className="billing-details">
                <h3>Billing Details</h3>
                <div className="inputs-form">
                  <div className="billing-details-left">
                    <div className="name-inpt">
                      <Input
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Entor your name",
                          },
                          minLength: {
                            value: 2,
                            message: "Name must be more than two characters",
                          },
                          pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: "Wrong format",
                          },
                        })}
                        type="text"
                        id="Name"
                        label="Name"
                        placeholder="name"
                        isError={Boolean(errors.name)}
                        errorMsg={errors.name?.message}
                      />
                    </div>

                    <div className="phone-inpt">
                      <Input
                      {...register("phoneNumber", {
                        required: {
                          value: true,
                          message: "Please enter your number",
                        },
                        pattern: {
                          value: /()\d{9}/,
                          message: "Wrong Format"
                        }
                      })}
                      isError={Boolean(errors.phoneNumber)}
                      errorMsg={errors.phoneNumber?.message}
                        type="text"
                        label="Phone Number"
                        placeholder="phone number"
                        
                      />
                    </div>
                  </div>

                  <div className="billing-details-right">
                    <div className=" email-input">
                      <Input
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Enter your email",
                          },
                          pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                            message: "Please enter valid email",
                          },
                        })}
                        type="email"
                        id="email "
                        isError={Boolean(errors.email)}
                        errorMsg={errors.email?.message}
                        placeholder="email"
                        label="Email"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Shipping info /////////////////////////////////////////////////////////////////////*/}
              <div className="shipping-container">
                <h3>Shipping Info</h3>
                <div>
                  <div className="address-div">
                    <Input
                      {...register("address", {
                        required: {
                          value: true,
                          message: "Enter your address",
                        },
                      })}
                      isError={Boolean(errors.address)}
                      errorMsg={errors.address?.message}
                      type="address"
                      id="address "
                      placeholder="address"
                      label="Address"
                    />
                  </div>

                  <div className="address-additional">
                    <div className="address-additional-left">
                      <div className="zip-inpt">
                        <Input
                          {...register("zipCode", {
                            required: {
                              value: true,
                              message: "Please enter your zip code",
                            },
                            minLength: {
                              value: 4,
                              message: "ZIP code must beminimum 4 characters",
                            },
                          })}
                          isError={Boolean(errors.zipCode)}
                          errorMsg={errors.zipCode?.message}
                          type="zip"
                          id="ZIP code"
                          placeholder="zip code"
                          label="ZIP code"
                        />
                      </div>
                      <div className="country-inpt">
                        <Input
                          {...register("country", {
                            required: {
                              value: true,
                              message: "Enter your country",
                            },
                          })}
                          isError={Boolean(errors.country)}
                          errorMsg={errors.country?.message}
                          type="country"
                          id="Country"
                          placeholder="country"
                          label="Country"
                        />
                      </div>
                    </div>
                    <div className="address-additional-right">
                      <div className="city-inpt">
                        <Input
                          {...register("city", {
                            required: {
                              value: true,
                              message: "Enter your city",
                            },
                          })}
                          isError={Boolean(errors.city)}
                          errorMsg={errors.city?.message}
                          type="city"
                          id="City"
                          placeholder="city"
                          label="City"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Payment Details /////////////////////////////////////////////////////////////////////*/}
              <div className="paymant-details">
                <h3>Payment Details</h3>
                <div className="payment-options">
                  <div className="payment-options-left">
                    <h5>Payment Method</h5>
                  </div>
                  <div className="payment-options-right">
                    <Input
                      checked={paymentMethod === "e-money"}
                      type="radio"
                      name="payment-method"
                      id="e-Money"
                      label="e-Money"
                      onChange={() => setPaymentMethod("e-money")}
                    />
                    <Input
                      checked={paymentMethod === "cash"}
                      type="radio"
                      name="payment-method"
                      id="Cash on Delivery"
                      label="Cash on Delivery"
                      onChange={() => setPaymentMethod("cash")}
                    />
                  </div>
                </div>
              </div>
              {paymentMethod === "e-money" ? (
                <div className="emoney-inputs">
                  <Input
                    {...register("eMoneyNumber", {
                      required: {
                        value: true,
                        message: "Enter your e-Money bumber",
                      },
                    })}
                    isError={Boolean(errors.eMoneyNumber)}
                    errorMsg={errors.eMoneyNumber?.message}
                    type="text"
                    placeholder="e-Money Number"
                    label={"e-Money Number"}
                  />

                  <Input
                    {...register("eMoneyPin", {
                      required: {
                        value: true,
                        message: "Enter your e-Money pin",
                      },
                    })}
                    isError={Boolean(errors.eMoneyPin)}
                    errorMsg={errors.eMoneyPin?.message}
                    type="text"
                    placeholder="e-Money Pin"
                    label={"e-Money Pin"}
                  />
                </div>
              ) : (
                <div className="cash-delivery">
                  <svg
                    width="48"
                    height="48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z"
                      fill="#D87D4A"
                    />
                  </svg>
                  <p>
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}
            </div>
            <div className="summary-container-overall">
              <div className="summary-container">
                <h1>Summary</h1>
                <div className="summary-products-container">
                  <div className="summary-products">
                    {cartArray.map((item) => {
                      const split: string[] = item.product.name.split(" ");
                      const itemName: string = split[0];
                      return (
                        <>
                          <div
                            className="summary-single-product"
                            key={item.product.id}
                          >
                            <div className="summary-single-product-left">
                              <img
                                width={50}
                                src={`/${item.product?.image.desktop}`}
                                alt="image"
                              />
                              <div className="summary-product-details">
                                <p>{itemName}</p>
                                <span>
                                  {" "}
                                  $ {formatNumberWithDots(item.product.price)}
                                </span>
                              </div>
                            </div>
                            <span>x{item.amount}</span>
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <div className="expenses-container">
                    <div className="summary-total-amount ">
                      <span>Total</span>
                      <p>
                        $&nbsp;
                        {formatNumberWithDots(totalAmount)}
                      </p>
                    </div>
                    <div className="summary-total-amount ">
                      <span>Shipping</span>
                      <p>$ {shipping}</p>
                    </div>
                    <div className="summary-total-amount ">
                      <span>VAT (INCLUDED)</span>
                      <p>$ {formatNumberWithDots(vat)}</p>
                    </div>
                    <div className="summary-total-amount  grand">
                      <span>Grand Total</span>
                      <p>$ {formatNumberWithDots(totalAmount + shipping)}</p>
                    </div>
                  </div>
                </div>
                <button className="checkout-submit-btn ">Continue & Pay</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
