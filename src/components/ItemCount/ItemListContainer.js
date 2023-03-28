import { useState , useEffect } from "react";
import data from "../../data/productos.json";
import "./itemCard.css"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer (props){


    const [productos, setProductos] = useState ([]);
    let {categoriaid} = useParams();


    const pedirProductos = () => {
          return new Promise ((resolve) =>{
           resolve(data)
        })
   }

    

    useEffect(() => {
        if(categoriaid === undefined){
        pedirProductos () 
        .then((respuesta) => {
            setProductos(respuesta) ;
        });
    }else{

        productoFiltrados(categoriaid)
        .then((respuesta) =>{
            setProductos(respuesta);
        })
    }
    }, [categoriaid] )
    

    const productoFiltrados = (categoriaURL) =>{
        return new Promise((resolve)=>{
            const filtro = data.filter(
                (item) => item.categoria === categoriaURL
                
            );
            resolve(filtro);
        })
    }

    return(
        <div>
        <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer;
