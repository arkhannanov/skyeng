import React from 'react';
import "./Card.scss"
import {addToBasketAC} from "../../store/cards/actions";
import {useDispatch} from "react-redux";

function Card({src, title, description, price, id}) {

    const dispatch = useDispatch();

    const handleCardClick = (id) => {
        dispatch(addToBasketAC(id))
    }

    return (
        <div className="card" onClick={() => handleCardClick(id)}>
            <img src={src} alt={src}/>
            <p className="card__title">{title}</p>
            <p className="card__description">{description}</p>
            <p className="card__price">{price}</p>
        </div>
    );
}

export default Card;