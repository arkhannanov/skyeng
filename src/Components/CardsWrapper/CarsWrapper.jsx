import React, {useEffect, useState} from 'react';
import Card from "../Card/Card";
import {cardsList} from "./cardsData";
import "./CarsWrapper.scss"
import {extractNumbers} from "../../helpers/extractNumbers";
import arrow from "../../assets/images/arrow.png";

function CarsWrapper() {

    const [sortOrder, setSortOrder] = useState(true)

    const [currentCardsList, setCurrentCardsList] = useState(cardsList)

    const toggleSort = ( ) => {
        let cardsArray = [...cardsList]
        setSortOrder(!sortOrder)
        let sortedArray
        if ( sortOrder) {
            sortedArray = cardsArray.sort((a, b) => extractNumbers(a.price) - extractNumbers(b.price))
        } else {
            sortedArray = cardsArray.sort((a, b) => extractNumbers(b.price) - extractNumbers(a.price))
        }
        setCurrentCardsList(sortedArray)
    }

    useEffect(()=> {
        let cardsArray = [...cardsList]
        let sortedArray = cardsArray.sort((a, b) => extractNumbers(b.price) - extractNumbers(a.price))
        setCurrentCardsList(sortedArray)
    }, [])

    return (
        <div className="content_wrapper">
            <button className="sort-button" onClick={toggleSort}>
                {sortOrder ? 'Порядок: сперева дороже' : 'Порядок: сперева дешевле'}
                <img src={arrow} className={sortOrder ? 'rotated' : undefined} style={{marginTop: 4}} alt="arrow"/>
            </button>
            <div className="cards__wrapper">
                {currentCardsList.map(el =>
                    <Card key={el.img} src={el.img} title={el.title} description={el.description} price={el.price}></Card>
                )}
            </div>
        </div>
    );
}

export default CarsWrapper;