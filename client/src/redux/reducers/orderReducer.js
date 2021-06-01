import { GET_ORDERS, GET_ORDER_BY_CLIENT, CANCEL_ORDER } from "../types/orderTypes"

const initialState = {
    orders: []
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS
            : return { ...state, orders: action.payload }
        case GET_ORDER_BY_CLIENT
            : return { ...state, orders: action.payload }
        case GET_ORDER_BY_CLIENT
            : return { ...state, orders: action.payload }
        default: return state


    }
}

export default orderReducer