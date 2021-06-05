import { GET_ORDERS, GET_ORDER_BY_CLIENT, CANCEL_ORDER, DELETE_ORDER } from "../types/orderTypes"

const initialState = {
    orders: []
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS
            : return { ...state, orders: action.payload }
        case GET_ORDER_BY_CLIENT
            : return { ...state, orders: action.payload }
        case CANCEL_ORDER
            : return { orders: { ...state.orders, ...action.payload } }

        case DELETE_ORDER:
            return {
                orders: { ...state.orders.filter(item => item._id !== action.payload._id) }
            }
        default: return state


    }
}

export default orderReducer