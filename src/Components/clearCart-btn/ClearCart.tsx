import { useDispatch } from "react-redux"
import { clearCart } from "../../Store/Cart.Slice";
import "./clear-cart.css"



const ClearCartButton = () => {
    const dispatch = useDispatch();


    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return <button className="clearCart-btn" onClick={handleClearCart}>Remove all</button>

} 

export default ClearCartButton