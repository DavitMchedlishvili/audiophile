import { Dispatch,  } from "react";
import Modal from "react-modal";
import "./cart.css"
import { Link, useNavigate } from "react-router-dom";
import { Rootstate } from "../../Store/type";
import { useAppSelector } from "../../Store/hooks";
import Counter from "../counter/Counter";
import { useDispatch } from "react-redux";
import { getProductCurrNumber } from "../../Pages/product/Product";
import { clearCart, updateCart } from "../../Store/Cart.Slice";


type Props = {
    modalIsOpen: boolean;
    setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

const Cart = ({modalIsOpen, setIsOpen}: Props) => {

    const navigate = useNavigate();

    const cartArray = useAppSelector((state: Rootstate) => state.cart.value)
    const dispatch = useDispatch();
    
    console.log(cartArray)

  return (
    <>
        <Modal 
         className="cart-modal"
         isOpen={modalIsOpen}
         onAfterOpen={() => (document.body.style.overflow = "hidden")}
         onAfterClose={() => (document.body.style.overflow = "auto")}
         shouldCloseOnOverlayClick={true}
         onRequestClose={() => setIsOpen(false)}>

            <div>
            <h1>cart</h1> 
            <button onClick={() => clearCart()}>remove all</button>
                
            {cartArray.map((item)=>{
                
                return <div key={item.product.id}>
                <p>{item.amount}</p>
                <p>
                   {item.product.name}
                </p> 
                <p>{item.product.price}</p>
                <img  width={50}
                  src={`/${item.product?.image.desktop}`}
                  alt="image" />

                   <Counter
                      maxQuantity={50}
                      minAmount={0}
                      number={getProductCurrNumber(cartArray, item.product)}
                      setNumber={(num: number) =>
                        dispatch(updateCart({ num, product: item.product }))
                      }
                    />
                </div>
               
            })}

            <Link to={"/checkout"}>Checkout</Link>
              </div>               
             

              
            



        </Modal>

    </>


    
  )
}

export default Cart



