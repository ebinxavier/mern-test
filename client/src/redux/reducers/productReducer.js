import { GET_PRODUCTS, DELETE_PRODUCT } from "../types/productTypes"

const initialState = {
    products: []
}
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state, products: action.payload }
        case DELETE_PRODUCT:
            return {
                products: { ...state.products.filter(item => item._id !== action.payload._id) }
            }
        default: return state

    }

}
export default productReducer