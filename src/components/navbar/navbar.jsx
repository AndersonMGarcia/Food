import "./navbar.css";
import logo from "../../assets/logo.png";
import bag from "../../assets/bag.png";
import Cart from "../cart/cart.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Navbar(props) {

    const navigate = useNavigate();

    function openSidebar() {
        const event = new CustomEvent('openSidebar');
        window.dispatchEvent(event);
    }

    function home() {
        navigate('/');
    }




    return <div>
        <img onClick={home} src={logo} className="logotipo" alt="Logotipo" />

        {
            props.showMenu ?

                <div className="menu">
                    <Link to={"/historico"} >Histórico</Link>
                    <button onClick={openSidebar} className="btn btn-red ">
                        <img src={bag} className="icon" alt="Ícone" />
                        Sacola
                    </button>
                </div> 
            
            : null
        }



        <Cart />
    </div>
}


export default Navbar;