import './App.css';
import Header from "./Components/Header/Header";
import CardsWrapper from "./Components/CardsWrapper/CardsWrapper";
import { Route, Routes} from "react-router-dom";
import Basket from "./Components/Basket/Basket";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/catalog" element={<CardsWrapper />}/>
                <Route path="/basket" element={<Basket />}/>
            </Routes>
        </div>
    );
}

export default App;
