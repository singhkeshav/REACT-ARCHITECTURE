import {ISLOADING} from '../types/index';

export const getUsers = ()=>{
    return (dispatch) =>{
        dispatch({type:ISLOADING});
    }
}