import {ISLOADING,isError} from '../types/index';
const INIT_STATE = {
    isLoading : false,
    isError: false,
    message: ''
}


const commonReducres = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ISLOADING:
            return{
                ...state,
                isLoading: !state.isLoading
            }
        case isError:
        return{
            ...state,
            isError: action.payload.isError,
            message: action.payload.message
        }
        default:
            return{
                ...state 
            }
    }
}

export default commonReducres;