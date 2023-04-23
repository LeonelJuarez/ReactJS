import "./navBar.css"
import "./CartWidget"
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { cartContext } from "../../context/cartContext";
import { useContext } from "react";
function NavBar (props){

    return(
        <nav>
            <ul className="menu">
                
                <li > <Link to="/"><img src={props.img} alt="logo"></img></Link></li>
                <li className="btnMenu"> <Link to="/">Todos los Productos </Link></li>
                <li className="btnMenu"> <Link to="/categoria/celulares">Celulares</Link></li>
                <li className="btnMenu"> <Link to="/categoria/modulos">Modulos </Link></li>
                <li className="btnMenu"> <Link to="/categoria/baterias">Baterias</Link></li>
                
                <li> <Link to="#"> <CartWidget/> </Link></li>
            </ul>
        </nav>

    )
}

export default NavBar;