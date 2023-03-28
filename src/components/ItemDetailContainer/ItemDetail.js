import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";


function ItemDetail ({product}){

    return(
        <div className="item-card-detail">
                   <div className="card-titulo-detail">
                        <h2>{product.titulo}</h2>
                    </div>
                        <img  className="card-img-detail" src={product.img} alt={product.titulo} ></img> 
                        <h3 className="card-precio-detail">${product.precio}</h3>
                        
                        <ItemCount stock={product.stock} />
                        <button className="btn_agregar">Agregar al carrito</button>
                        
         </div> 
    )
}

export default ItemDetail;