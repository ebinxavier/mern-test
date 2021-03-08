import { GET_PRODUCTS, DELETE_PRODUCT, UPDATE_PRODUCT } from "../types/productTypes"

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
        case UPDATE_PRODUCT:
            return {
                products: { ...state, products: action.payload }
            }
        default: return state

    }

}
export default productReducer