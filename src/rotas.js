import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Historico from "./pages/historico/historico.jsx";
import Checkout from "./pages/checkout/checkout.jsx";

function Rotas() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Checkout" element={<Checkout/>}/>
            <Route path="/Historico" element={<Historico/>}/>
        </Routes>
    </BrowserRouter>
}

export default Rotas;
