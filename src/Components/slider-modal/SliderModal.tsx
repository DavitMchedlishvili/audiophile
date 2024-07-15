import { Dispatch } from "react";
import Modal from "react-modal";
import ProductSection from "../product-section/ProductSection";
import "./slider-modal.css"
import "./slider-modal-mobile.css"

type Props = {
    burgerIsOpen: boolean;
    setBurgerIsOpen: Dispatch<React.SetStateAction<boolean>>;
  };

const SliderModal = ({ setBurgerIsOpen,  burgerIsOpen}: Props) => {
  return (
    
      <Modal
      className="burger-modal"
      isOpen={burgerIsOpen}
      onAfterOpen={() => (document.body.style.overflow = "hidden")}
      onAfterClose={() => (document.body.style.overflow = "auto")}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setBurgerIsOpen(false)}>

        <div className="slider-menu">

        <ProductSection linkOnClick={()=>setBurgerIsOpen(false)}/>
        </div>

        
        


      </Modal>
    
  )
}

export default SliderModal
