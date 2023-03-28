import { useState , useEffect } from "react";
import data from "../../data/productos.json";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

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



useEffect(() => {
    getProduct(id) .then((respuesta) => {
        setProduct(respuesta) ;
        console.log(respuesta)
    })
}, [] )



return(


    <ItemDetail  product={product} />

    
)


}

export default ItemDetailContainer;