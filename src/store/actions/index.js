import {ISLOADING,GET_USERS} from '../types/index';
import sharedService from '../../shared/services/shared.service';



//>> Is Loader..
export const isLoader = ()=>{
    return function (dispatch){
        return setTimeout(()=>{
            dispatch({type:ISLOADING});
        })
    }
}

//Get Users...
export const GetUsers = (array=null)=>{
   return dispatch =>{
          if(array == null){
                sharedService.getUsers().then(res=>{
                    dispatch({type:GET_USERS,payload: res.data}); 
                }).catch(err=>{
                   console.error(err);
                })
          } else{
                   dispatch({type:GET_USERS,payload: []});
          }  
   }
}