import {useState} from "react";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import "./btnContador.css";
import { Link } from "react-router-dom";


function ItemCount(props, id,onAddToCart){

    const [count, setCount] = useState(1);
    
    
    
    function handleAdd(){ 
            setCount(count+1)   
        }
       
       

    function handleSubstact(){      
            setCount(count-1)      
    }

    return(
        <div className="container_btn_contador">
            <button className="btn_contador" disabled = {count <= 1 } onClick={handleSubstact}>-</button>
            <span className="numerito"> {count} </span>
            <button className="btn_contador" disabled = {count >=props.stock} onClick={handleAdd}>+</button>
            

            
        </div>
     
    )
}

export default ItemCount;