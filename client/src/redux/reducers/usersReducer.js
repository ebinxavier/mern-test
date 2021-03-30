import { GET_USERS, SEARCH_USERS, DELETE_USER } from "../types/usersTypes"


const initialState = {
    users: []
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                users: [...action.payload]
            }
        case SEARCH_USERS:
            // return {
            //     ...state,
            //     users: [action.payload[0]]
            // }
            return {
                ...state,
                users: [...action.payload]
            }
        case DELETE_USER:
            return {
                users: state.users.filter(id => id !== action.payload._id)
            }
        default: return state
    }
}
export default userReducer