import {ISLOADING} from '../types/index';

export const isLoader = ()=>{
    return function (dispatch){
        return setTimeout(()=>{

            dispatch({type:ISLOADING});
        })
    }
}