import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/cartContext";

import { Link } from "react-router-dom";
import { createContext, useContext } from "react";

//const {cart,setCart} = useContext(cartContext);


function ItemDetail ({product, onAddToCart,count}){



    return(
        <div className="item-card-detail">
                   <div className="card-titulo-detail">
                        <h2>{product.titulo}</h2>
                    </div>
                        <img  className="card-img-detail" src={product.img} alt={product.titulo} ></img> 
                        <h3 className="card-precio-detail">${product.precio}</h3>
                        
                        <ItemCount stock={product.stock} onAddToCart={onAddToCart} />
                        <button className="btn_agregar" onClick={()=>onAddToCart(count)}>Agregar al carrito</button>
                        
         </div> 
    )
}

export default ItemDetail;