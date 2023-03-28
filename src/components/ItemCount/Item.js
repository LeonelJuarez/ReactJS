import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { Link } from "react-router-dom";

function Item( {producto} , props) {


    return(
        <div className="item-card">
                   <div className="card-titulo">
                        <h2>{producto.titulo}</h2>
                    </div>
                        <img  className="card-img" src={producto.img} alt={producto.titulo} ></img>     
                        <h3 className="card-precio">${producto.precio}</h3>
                        <ItemCount stock={producto.stock} /><Link to= {`/detalle/${producto.id}`} > 
                        <button className="btn_agregar"> Ver Detalles </button>
                        </Link>  
                        
         </div> 
    )






}


export default Item;