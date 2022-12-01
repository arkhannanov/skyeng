import './App.css';
import Header from "./Components/Header/Header";
import CarsWrapper from "./Components/CardsWrapper/CarsWrapper";
import {BrowserRouter, Route, Routes, useHistory} from "react-router-dom";
import Basket from "./Components/Basket/Basket";
import {useEffect} from "react";

function App() {

    const history = useHistory()

    useEffect(()=> {
      history.push('/catalog')
    },[])
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/catalog" element={<CarsWrapper/>}/>
                    <Route path="/basket" element={<Basket/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
