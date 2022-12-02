export const TOGGLE_SORT = "TOGGLE_SORT";
export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const DELETE_FROM_BASKET = "DELETE_FROM_BASKET";
export const CHANGE_AMOUNT_UP = "CHANGE_AMOUNT_UP";
export const CHANGE_AMOUNT_DOWN = "CHANGE_AMOUNT_DOWN";
export const CLEAR_BUSKET = "CLEAR_BUSKET";


export const toggleSortAC = (sortOrder) => ({
    type: TOGGLE_SORT,
    payload: sortOrder,
});

export const addToBasketAC = (id) => ({
    type: ADD_TO_BASKET,
    payload: id,
});

export const deleteFromBasketAC = (id) => ({
    type: DELETE_FROM_BASKET,
    payload: id,
});

export const changeAmountUpAC = (id) => ({
    type: CHANGE_AMOUNT_UP,
    payload: id,
});

export const changeAmountDownAC = (id) => ({
    type: CHANGE_AMOUNT_DOWN,
    payload: id,
});

export const clearBusketAC = () => ({
    type: CLEAR_BUSKET,
});