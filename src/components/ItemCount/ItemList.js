
import Item from "./Item";

function ItemList ( {productos} ){


return(
    <div className="cards">
             {
                productos.map((producto) =>{
                   return(
                    <div >

                        <Item producto={producto}/>

                    </div>
                    )
                })
            }
        </div>



)


};

export default ItemList;