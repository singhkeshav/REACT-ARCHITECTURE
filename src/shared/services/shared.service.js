import Env from '../../env';
import CoreService from './core.service';


class SharedService extends CoreService{
   //>> Login Method
    login(data){
      return  this.post(this.url('users'),data);
    }
    
    url(methodName,virsion){
        if(virsion){
            return `${Env.BASEURL}${virsion}/${methodName}`;
        } else{
            return `${Env.BASEURL}${methodName}`;
        }
        
    }
}

export default new SharedService();