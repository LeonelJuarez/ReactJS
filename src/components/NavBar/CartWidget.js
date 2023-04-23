import "./navBar.css"
import { useContext } from "react";

import carr from "../imgCarrito/carrito.png"
import { cartContext } from "../../context/cartContext";



function CartWidget(props){
    const {cart} = useContext (cartContext);
    return(

        <div className="cart" >
            <img src={carr} alt="carrito" width="50px"></img>
            <span> {cart.length} </span>
            
        </div>
    )
}

export default CartWidget;