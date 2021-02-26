import { GET_USERS } from "../types/usersTypes"


const initialState = {
    users: []
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                users: [...action.payload]
            }
        default: return state
    }
}
export default userReducer