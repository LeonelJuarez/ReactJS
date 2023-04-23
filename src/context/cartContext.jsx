import { createContext, useContext, useState } from "react";
import Item from "../components/ItemCount/Item";

const cartContext = createContext ();


const Provider = cartContext.Provider;


function CartProvider(props){

    const [cart, setCart] = useState([]);

    function addItem(product,count){
       // product.count = count;
       const newCart =[...cart];
       newCart.push({...product,count})
       setCart(newCart)

    }
  

    return(

        
    <Provider value={{cart,addItem}}>

     {props.children}

    </Provider>

    )
}


export {cartContext,CartProvider}