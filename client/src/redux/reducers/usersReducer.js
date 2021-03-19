import { GET_USERS, SEARCH_USERS } from "../types/usersTypes"


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
        default: return state
    }
}
export default userReducer