
import CoreService from '../../../../shared/services/core.service';
class IndexService extends CoreService{
  
    getPhotos(){
        return this.get('^thirdparty^/https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5');
    }

    
}
//Export Default
export default new IndexService();