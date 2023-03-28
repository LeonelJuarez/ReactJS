import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";


function ItemDetail ({product}){

    return(
        <div className="item-card">
                   <div className="card-titulo">
                        <h2>{product.titulo}</h2>
                    </div>
                        <img  className="card-img" src={product.img} alt={product.titulo} ></img>     
                        <h3 className="card-precio">${product.precio}</h3>
                        <ItemCount stock={product.stock} />
                        
         </div> 
    )
}

export default ItemDetail;