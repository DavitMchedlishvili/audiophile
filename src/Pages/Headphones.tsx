import { useState } from "react"
import { Data } from "../Types/products"



const Headphones = () => {

  const [products, setProducts] = useState< null | Data>(null)

    const getData = async () =>{
      const res = await fetch ("http://localhost:3000/products")
      const data = await res.json()
  
      setProducts(data)
    }
  return (
  
   
    <>
      <h1>Headphones</h1>
  
      <button onClick={()=> getData()}>Get Data</button>
      
      {products?.map((product) =>{
        {
          return(
            <div key={product.id}>
              <p>{product.name}</p>
            </div>
          )
        }
      })}
    </>
  
      
    
    )
}

export default Headphones
