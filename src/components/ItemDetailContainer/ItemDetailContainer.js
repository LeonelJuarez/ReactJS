import { useState , useEffect, useContext } from "react";
import data from "../../data/productos.json";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { cartContext } from "../../context/cartContext";


function ItemDetailContainer (props){


    const getProduct = (idURL) =>{
        return new Promise ((resolve) =>{
            const productId = data.find(item => {
                return (item.id === parseInt(idURL))
            })
            resolve(productId)
    })
    }
    const [product, setProduct] = useState ([]);
    let {id} = useParams();

    const {cart, addItem } = useContext(cartContext); //AGREGADO 21/4
console.log(cart)
useEffect(() => {
    getProduct(id) .then((respuesta) => {
        setProduct(respuesta) ;
        console.log(respuesta)
    })
}, [] )

 

//ESTO LO VEMOS 21/4

function onAddToCart(count){
    addItem(product, count);
    console.log("Agregado")
}

//eSTO 22
//const nombre = useContext(CartContext);
//console.log(nombre);



return(

    <ItemDetail  product={product} onAddToCart={onAddToCart}/>
   
)


}

export default ItemDetailContainer;