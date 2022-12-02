import React from 'react';
import "./BasketCard.scss"
import {changeAmountDownAC, changeAmountUpAC, deleteFromBasketAC} from "../../store/cards/actions";
import {useDispatch} from "react-redux";
import arrowUp from "../../assets/images/counter-arrow-up.png"
import arrowDown from "../../assets/images/counter-arrow-down.png"

function BasketCard({src, title, description, price, id, amount}) {

    const dispatch = useDispatch();

    const handleDeleteBasketItem = (id) => {
        dispatch(deleteFromBasketAC(id))
    }

    const handleCounterUp = (id) => {
        dispatch(changeAmountUpAC(id))
    }

    const handleCounterDown = (id) => {
        dispatch(changeAmountDownAC(id))
    }

    return (
        <div className="basket-card">
            <img className="basket-card__image" src={src} alt={src}/>
            <div className="basket-card__content-wrapper">
                <p className="basket-card__title">{title}</p>
                <p className="basket-card__description">{description}</p>
                <p className="basket-card__price">{price}</p>
                <div className="basket-card__links-wrapper">
                    <p className="basket-card__link">Избранное</p>
                    <p className="basket-card__link" onClick={() => handleDeleteBasketItem(id)}>Удалить</p>
                </div>
            </div>
            <button className="basket-card__counter-button">
                <div className="basket-card__amount">{amount || 1}</div>
                <div className="basket-card__counter-button-arrows-wrapper">
                    <img className="basket-card__counter-button-arrow" onClick={()=> handleCounterUp(id)} src={arrowUp} alt="arrow-up"/>
                    <img className="basket-card__counter-button-arrow" onClick={()=> handleCounterDown(id)} src={arrowDown} alt="arrow-down"/>
                </div>
            </button>
        </div>
    );
}

export default BasketCard;