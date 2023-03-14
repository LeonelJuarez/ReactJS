import "./navBar.css"
import "./CartWidget"
import CartWidget from "./CartWidget";

function NavBar (props){

    return(
        <nav>
            <ul className="menu">
                <li > <a href="#"><img src={props.img} alt="logo"></img></a></li>
                <li className="btnMenu"> <a href="#">Todos los Productos </a></li>
                <li className="btnMenu"> <a href="#">Celulares</a></li>
                <li className="btnMenu"> <a href="#">Modulos </a></li>
                <li className="btnMenu"> <a href="#">Baterias</a></li>
                <li> <a href="#"> <CartWidget/> </a></li>
            </ul>
        </nav>

    )
}

export default NavBar;