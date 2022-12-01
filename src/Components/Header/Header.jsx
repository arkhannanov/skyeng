import React from 'react';
import "./Header.scss"
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <p className="header__title">Интерьер.</p>
            <div className="header__links-wrapper">
                <Link to="/" className="header__link">Каталог</Link>
                <Link to="/basket" className="header__link zeromargin">Корзина</Link>
            </div>
        </header>
    );
}

export default Header;