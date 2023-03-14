import "./navBar.css"
import carr from "../imgCarrito/carrito.png"


function CartWidget(props){
    return(

        <div className="cart" >
            <img src={carr} alt="carrito" width="50px"></img>
            <span>2</span>
            
        </div>
    )
}

export default CartWidget;