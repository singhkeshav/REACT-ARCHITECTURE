import Env from '../../env';
import CoreService from './core.service';


class SharedService extends CoreService {
   //>> Login Method
    login(data){
      return  this.post('users',data);
    }
    
   
}

export default new SharedService();