import axios from 'axios';
import Env from '../../env';
import { useDispatch } from 'react-redux';
import { isLoader } from '../../store/actions';
const bindUrl =(methodName,virsion) =>{
    if(virsion){
        return `${Env.BASEURL}${virsion}/${methodName}`;
    } else{
        return `${Env.BASEURL}${methodName}`;
    }
    
}

const jwt = () =>{
    if(localStorage.getItem('token')){
        return {
            headers: {
                'authorization': localStorage.getItem('token'),
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        }
    } else{
        return {
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
                "keshav-test" : "this is keshav"
            }
        }
    }
   
}
const  interceptorsFun = () =>{
  //  const dispatch = useDispatch();
    axios.interceptors.request.use(
        function(req) {
            console.log(req.headers )
            //req.headers = jwt();
            if(req.url.indexOf('^withoutLoader') == -1){
              //  dispatch(isLoader());
            } else{
                let url = url.replace('^withoutloader^','');
            }
            return req;
        }, 
        function(error) {
            console.error("This is Error of Request")
        }
      );
    
      axios.interceptors.response.use(
        function(successRes) {
            console.error(successRes,'request')
          return successRes;
        }, 
        function(error) {
          console.error("This is Error of Response")
        }
      );
}

interceptorsFun();