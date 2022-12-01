import './App.css';
import Header from "./Components/Header/Header";
import CarsWrapper from "./Components/CardsWrapper/CarsWrapper";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Basket from "./Components/Basket/Basket";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<CarsWrapper/>}/>
                    <Route path="/basket" element={<Basket/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
