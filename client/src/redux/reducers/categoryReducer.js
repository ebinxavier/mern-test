import { GET_CATEGORIES, CREATE_CATEGORY, DELETE_CATEGORY } from '../types/categoryTypes'


const initialState = {
    categories: []
}

const categoryReducer = (state = initialState, action) => {
    console.log({ ...state }, 'state')
    switch (action.type) {
        case GET_CATEGORIES
            : return { ...state, categories: action.payload }
        case CREATE_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        case DELETE_CATEGORY:
            console.log(...state, 'state')
            console.log(state.categories, 'categories')

            return {
                ...state,
                categories: { ...state.categories.filter(item => item._id !== action.payload._id) }
            }
        default: return state

    }
}

export default categoryReducer