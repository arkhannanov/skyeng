import {cardsList} from "./cardsData";
import {extractNumbers} from "../../helpers/extractNumbers";
import {
    ADD_TO_BASKET,
    CHANGE_AMOUNT_DOWN,
    CHANGE_AMOUNT_UP,
    CLEAR_BUSKET,
    DELETE_FROM_BASKET,
    TOGGLE_SORT
} from "./actions";

const initialState = {
    cardsList: [...cardsList].sort((a, b) => extractNumbers(b.price) - extractNumbers(a.price)),
    basketList: [],
    sum: null
}

export const cardsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TOGGLE_SORT: {
            let array = [...state.cardsList]
            let sortedArray = []
                if (payload) {
                    sortedArray = array.sort((a, b) => extractNumbers(a.price) - extractNumbers(b.price))
                } else {
                    sortedArray = array.sort((a, b) => extractNumbers(b.price) - extractNumbers(a.price))
                }
            return {
                ...state,
                cardsList: [...sortedArray],
            }
        }
        case ADD_TO_BASKET: {
            const basketElement = cardsList.find(el => el?.id === payload)
            basketElement.amount = 1
            const basketArray = [...state.basketList]
            const resultArray = [...basketArray, basketElement]

            if (resultArray.filter(el => el.id === payload).length > 1) return {...state}

            let sum = resultArray.reduce((acc, el ) => el.amount * extractNumbers(el.price) + acc , 0)

            return {
                ...state,
                basketList: [...resultArray],
                sum
            }
        }
        case DELETE_FROM_BASKET: {
            const resultArray = [...state.basketList].filter( el => el?.id !== payload)
            let sum = resultArray.reduce((acc, el ) => el.amount * extractNumbers(el.price) + acc , 0)
            return {
                ...state,
                basketList: [...resultArray],
                sum
            }
        }
        case CHANGE_AMOUNT_UP: {
            const basketElement = [...state.basketList].find( el => el?.id === payload)
            basketElement.amount = basketElement.amount + 1
            if (basketElement.amount > 5) basketElement.amount = 5
            let resultArray = [...state.basketList].map(el => el.id !== basketElement.id ? el : basketElement);
            let sum = resultArray.reduce((acc, el ) => el.amount * extractNumbers(el.price) + acc , 0)

            return {
                ...state,
                basketList: [...resultArray],
                sum
            }
        }
        case CHANGE_AMOUNT_DOWN: {
            const basketElement = [...state.basketList].find( el => el?.id === payload)
            basketElement.amount = basketElement.amount - 1
            if (basketElement.amount < 1) basketElement.amount = 1
            let resultArray = [...state.basketList].map(el => el.id !== basketElement.id ? el : basketElement);
            let sum = resultArray.reduce((acc, el ) => el.amount * extractNumbers(el.price) + acc , 0)

            return {
                ...state,
                basketList: [...resultArray],
                sum
            }
        }
        case CLEAR_BUSKET: {
            return {
                ...state,
                basketList: [],
                sum : 0
            }
        }
        default:
            return state;
    }
}