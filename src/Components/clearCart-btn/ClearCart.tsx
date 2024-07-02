import { useDispatch } from "react-redux"
import { clearCart } from "../../Store/Cart.Slice";




const ClearCartButton = () => {
    const dispatch = useDispatch();


    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return <button onClick={handleClearCart}>Remove All</button>

} 

export default ClearCartButton