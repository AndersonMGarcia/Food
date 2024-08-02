import { useEffect, useState, useContext } from "react";
import { Dock } from "react-dock";
import ProdutoCart from "../produto-cart/produto-cart";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context";
import back from "../../assets/back.png";
import bag from "../../assets/bag-black.png";

function Cart() {

    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const { cartItems, totalCart } = useContext(CartContext);


    useEffect(() => {
        window.addEventListener('openSidebar', () => {
            setShow(true);
        });
    }, []);


    function checkout() {

        if (totalCart <= 0) {
            return; // não avança para a página de checkout
        }
        navigate('/checkout');
    }

    return <Dock position="right"
        isVisible={show}
        fluid={false}
        size={360}
        onVisibleChange={(visible) => {
            setShow(visible);
        }}
    >

        {
            cartItems.length == 0 ?
                <div className="cart-empty">
                    <img src={back} onClick={()=>setShow(false)}  className="cart-btn-close" alt="Ícone Fechar" />
                    
                    <div className="text-center">
                        <img src={bag} alt="Sacola" />
                        <p>Sua sacola está vazia</p>
                    </div>
                </div>
                :
                    <>
                        <div className="text-center">
                            <img src={back} onClick={()=>setShow(false)}  className="cart-btn-close" alt="Ícone Fechar" />
                            <h1>Meu Pedido</h1>
                        </div>
        
                        <div className="lista-produtos">
                            {
                                cartItems.map((item)=>{
                                    return <ProdutoCart Key={item.id}
                                                        id={item.id}
                                                        nome={item.nome}
                                                        preco={item.preco}
                                                        foto={item.foto}
                                                        qtd={item.qtd}/>
                                })
                            }                   
                        </div>   
        
                        <div className="footer-cart">
                            <div className="footer-cart-valor">
                                <span>Total</span>
                                <span>
                                    <strong>
                                        {
                                            new Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(totalCart)
                                        }
                                    </strong>
                                </span>
                            </div>
                            <div>
                                <button onClick={checkout} className="btn btn-checkout">Finalizar Pedido</button>
                            </div>
                        </div>
                    </>

        }


    </Dock>
}

export default Cart;