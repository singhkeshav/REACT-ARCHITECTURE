import axios from 'axios';
import Env from '../../env';
class CoreService {
    
    //Get Data...
    //Server URL...
    get(methodName){
      return axios.get(this.url(methodName), this.jwt());
    }

   //>> POST Data...
   //params {url,data}
    post(methodName,data){
        return axios.post(this.url(methodName),data, this.jwt());
    }

    //PUT Data...
    //parmas {url,data}
    put(methodName,data){
        return axios.put(this.url(methodName),data, this.jwt());
    }
   
    //PATCH Data...
    //parmas {url,data}
    patch(methodName,data){
        return axios.patch(this.url(methodName),data, this.jwt());
    }

    //DELETE Data...
    //parmas {url}
    delete(methodName){
        return axios.delete(this.url(methodName), this.jwt());
    }

    //>>JWT Access Token...
    jwt(){
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
                    'Content-Type': 'application/json'
                }
            }
        }
       
    }

    url(methodName,virsion){
        if(virsion){
            return `${Env.BASEURL}${virsion}/${methodName}`;
        } else{
            return `${Env.BASEURL}${methodName}`;
        }
        
    }
}


export default CoreService;