import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../Store/hooks"
import { fetchProducts } from "../Store/Products/Products.asyncActions"


const Speakers = () => {
  const dispatch = useAppDispatch()
  
  useEffect(()=>{  
    dispatch(fetchProducts())
  }, [dispatch])

  return <div>Speakers</div>
}



export default Speakers
