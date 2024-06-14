import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Earphones from "../Pages/Earphones"
import Speakers from "../Pages/Speakers"
import Headphones from "../Pages/Headphones"


const Routers = () => {
  return (
    
   <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/products/:productName" */}
      <Route path="/earphones" element={<Earphones/>}/>
      <Route path="/speakers" element={<Speakers/>}/>
      <Route path="/headphones" element={<Headphones/>}/>
   </Routes>
    

    
  )
}

export default Routers
