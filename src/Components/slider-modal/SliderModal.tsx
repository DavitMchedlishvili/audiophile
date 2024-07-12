import { Dispatch } from "react";
import Modal from "react-modal";
import ProductSection from "../product-section/ProductSection";
import "./slider-modal.css"

type Props = {
    burgerIsOpen: boolean;
    setBurgerIsOpen: Dispatch<React.SetStateAction<boolean>>;
  };

const SliderModal = ({ setBurgerIsOpen,  burgerIsOpen}: Props) => {
  return (
    <div className="burger-menu-modal">
      <Modal
      className="burger-modal"
      isOpen={burgerIsOpen}
      onAfterOpen={() => (document.body.style.overflow = "hidden")}
      onAfterClose={() => (document.body.style.overflow = "auto")}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setBurgerIsOpen(false)}>

        <div className="slider-menu">

        <ProductSection/>
        </div>

        
        


      </Modal>
    </div>
  )
}

export default SliderModal
