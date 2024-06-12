import { ReactNode } from "react"
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";


type LayoutPros = {
  children: ReactNode;
};

const Layouts = ({children}:  LayoutPros) => {
  return (
  <>
    <Header/>
    {children}
    <Footer/>
  </>
  )
}

export default Layouts
