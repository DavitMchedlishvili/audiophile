import GoBackButton from "../../Components/go-back-button/GoBackButton";
import Input from "../../Components/inputs/Inputs";
import "./checkout.css";

const Checkout = () => {
  return (
    <>
      <div className="checkout-body">
        <div className="container checkout-container">
          <GoBackButton />
          <div className="checkout-inputs-container">
            <h1>Checkout</h1>

          {/* Billing Details /////////////////////////////////////////////////////////////////////////////*/}

            <div className="billing-details">
              <h3>Billing Details</h3>
              <form>
                <div className="billing-details-left">
                  <div className="name-inpt">
                    <Input
                      type="text"
                      name="firstName"
                      id="Name"
                      label={"Name"}
                      placeholder="name"
                      errorMsg="Wrong Info"
                    />
                  </div>

                  <div className="phone-inpt">
                    <Input
                      type="tel"
                      name="phone"
                      id="Phone"
                      label={"Phone"}
                      placeholder="phone number"
                      errorMsg="Wrong Info"
                      
                    />
                  </div>
                </div>

                <div className="billing-details-right">
                  <div className=" email-input">
                    <Input
                      type="email"
                      name="email"
                      id="email "
                      // isError= {true}
                      placeholder="email"
                      label="Email"
                      errorMsg="Wrong Info"
                    />
                  </div>
                </div>
              </form>
            </div>
            {/* Shipping info /////////////////////////////////////////////////////////////////////*/}
            <div className="shipping-info">
              <h3>Shipping Info</h3>
              <form>
              <div className="address-div">
                <Input
                    type="address"
                    name="address"
                    id="address "
                    // isError= {true}
                    placeholder="address"
                    label="Address"
                    errorMsg="Wrong Info"
                  />
                </div>
                
                <div className="address-additional">
                  <div className="address-additional-left">
                    <div className="zip-inpt">
                    <Input
                      type="zip"
                      name="zip"
                      id="ZIP code"
                      // isError= {true}
                      placeholder="zip"
                      label="ZIP code"
                      errorMsg="Wrong Info"
                    />
                    </div>
                    <div className="country-inpt">
                    <Input
                      type="country"
                      name="country"
                      id="Country"
                      // isError= {true}
                      placeholder="country"
                      label="Country"
                      errorMsg="Wrong Info"
                    />
                    </div>
                    
                  </div>
                  <div className="address-additional-right">
                    <div className="city-inpt">
                    <Input
                      type="city"
                      name="city"
                      id="City"
                      // isError= {true}
                      placeholder="city"
                      label="City"
                      errorMsg="Wrong Info"
                    />
                    </div>
                    
                  </div>
                </div>
              </form>
            </div>
            {/* Payment Details /////////////////////////////////////////////////////////////////////*/}
            <div className="paymant-details">
              <h3>Paument Details</h3>
              <div className="payment-options">
                <div className="paymant-options-left">
                  <h5>Payment Method</h5>
                </div>
                <div className="payment-options-right">
                  <Input
                  type="radio"
                  name="payment-method"
                  id="e-money"
                  label="E-Money"
                  />
                  <Input
                  type="radio"
                  name="payment-method"
                  id="Cash on Delivery"
                  label="Cash on Delivery"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
