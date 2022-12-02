import React from 'react';
import "./Header.scss"
import {Link} from "react-router-dom";
import catalog from './../../assets/images/catalog.png'
import basket from './../../assets/images/basket.png'

function Header() {
    return (
        <header className="header">
            <p className="header__title">Интерьер.</p>
            <div className="header__links-wrapper">
                <Link to="/catalog" className="header__link">Каталог</Link>
                <Link to="/basket" className="header__link zeromargin">Корзина</Link>
            </div>
            <div className="header__links-wrapper-mobile">
                <Link to="/catalog" className="header__link"><img src={catalog} alt="catalog"/></Link>
                <Link to="/basket" className="header__link zeromargin"><img src={basket} alt="basket"/></Link>
            </div>
        </header>
    );
}

export default Header;