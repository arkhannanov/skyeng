import React, {useState} from 'react';
import Card from "../Card/Card";
import "./CardsWrapper.scss"
import arrow from "../../assets/images/arrow.png";
import {useDispatch, useSelector} from "react-redux";
import { toggleSortAC} from "../../store/cards/actions";

function CardsWrapper( ) {

    const dispatch = useDispatch();
    const cardsList = useSelector(state => state.cards.cardsList)

    const [sortOrder, setSortOrder] = useState(true)

    const toggleSort = () => {
        setSortOrder(!sortOrder)
        dispatch(toggleSortAC(sortOrder))
    }

    return (
        <div className="content_wrapper">
            <button className="sort-button" onClick={toggleSort}>
                {sortOrder ? 'Порядок: сперева дороже' : 'Порядок: сперева дешевле'}
                <img src={arrow} className={sortOrder ? 'rotated' : undefined} style={{marginTop: 4}} alt="arrow"/>
            </button>
            <div className="cards__wrapper">
                {cardsList.map(el =>
                    <Card key={el.id} id={el.id} src={el.img} title={el.title} description={el.description} price={el.price} amount={el.amount}/>
                )}
            </div>
        </div>
    );
}

export default CardsWrapper;