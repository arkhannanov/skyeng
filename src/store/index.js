import { createStore, combineReducers } from 'redux'
import {cardsReducer} from "./cards/reducer";

const rootReducer = combineReducers({
    cards: cardsReducer,
});

export const store = createStore(rootReducer)