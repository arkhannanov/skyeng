import React from 'react';
import "./Card.scss"

function Card({src, title, description, price}) {
    return (
        <div className="card">
            <img src={src} alt={src}/>
            <p className="card__title">{title}</p>
            <p className="card__description">{description}</p>
            <p className="card__price">{price}</p>
        </div>
    );
}

export default Card;