import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/home";
import Privacidade from "./pages/privacidade";




function RoutePage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/privacidade" element={<Privacidade/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutePage;