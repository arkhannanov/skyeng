import React from 'react';
import BasketCard from "../BasketCard/BasketCard";
import "./Basket.scss"
import {useDispatch, useSelector} from "react-redux";
import {clearBusketAC} from "../../store/cards/actions";
import {Link} from "react-router-dom";

function Basket() {
    const basketList = useSelector(state => state.cards.basketList)
    const sum = useSelector(state => state.cards.sum)

    const dispatch = useDispatch();

    const handleClearBusket = () => {
        dispatch(clearBusketAC())
    }

    return (
        <div className="basket">
            <div className="basket__cards-wrapper">
                <div className="basket__cards-header">
                    <div className="basket__cards-header-item">Товар</div>
                    <div className="basket__cards-header-item">К-во</div>
                </div>
                {basketList?.map(el => <BasketCard id={el?.id} key={el?.id} src={el?.img} title={el?.title} amount={el.amount} description={el?.description} price={el?.price}/>)}
                <div className="basket__buttons-wrapper">
                    <button className="basket__button" onClick={handleClearBusket}>Очистить корзину</button>
                    <Link to="/catalog" className="basket__button">Продолжить покупки</Link>
                </div>
            </div>
            <div className="basket__result-wrapper">
                <p className="basket__result-title">Оформление заказа</p>
                <input className="basket__result-input" type="text" placeholder="Имя Фамилия"/>
                <input className="basket__result-input" type="text" placeholder="+ 7 904 000 80 80"/>
                <input className="basket__result-input" type="text" placeholder="Адрес доставки"/>
                <p className="basket__result-sum">Итого: {sum ? sum.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ') + " руб." : 0}</p>
                <button className="basket__button transparent">Оформить заказ</button>
            </div>
        </div>
    );
}

export default Basket;