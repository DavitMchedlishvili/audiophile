import { useEffect } from "react"
import { useAppDispatch, useAppSelector, } from "../Store/hooks"
import { fetchProducts } from "../Store/Products/Products.asyncActions"



export const Speakers = () => {
  const productsData = useAppSelector((state) => state.products.data)
  const status = useAppSelector((state) => state.products.status)
  console.log(productsData)
  const dispatch = useAppDispatch()
  
  useEffect(()=>{  
    dispatch(fetchProducts())
  }, [dispatch])



  if( status === "failed")
    return <div>error happend</div>


  return (
    <>
    
    <div>
      {status === "loaded"  && productsData.map((item) =>  {
        if(item.category === "speakers"){
          return (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.slug}</p>
              <p>{item.features}</p>
            </li>
          )
        }
       
      })}
    </div>
    
    
    </>
  )
}



export default Speakers
