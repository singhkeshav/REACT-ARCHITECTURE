import {GET_USERS,GET_USER} from '../types/index';
const INIT_STATE = {
   users: [],
   user: {}
}

//>> User Reducers...
const userReducres = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_USERS:
            return{
                ...state,
                users: action.payload
            }
        case GET_USER:
        return{
            ...state,
            user: action.payload.user,
        }
        default:
            return{
                ...state 
            }
    }
}

export default userReducres;