import "./itemCard.css"

function Items (props){
    return (

        <div className="item-card">
            <div className="card-titulo">
                <h2>{props.titulo}</h2>
            </div>
            <img  className="card-img" src={props.img}></img>
            <h3 className="card-precio">{props.precio}</h3>

        </div>
    );
}

export default Items;
