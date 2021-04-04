
import CoreService from './core.service';


class SharedService extends CoreService {
   //>> Login Method
    login(data){
      return  this.post('users',data);
    }
    
   getUsers(){
     return this.get('^thirdparty^/https://jsonplaceholder.typicode.com/users');
   }
}

export default new SharedService();