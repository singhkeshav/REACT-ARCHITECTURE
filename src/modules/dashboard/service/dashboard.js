import CoreService from "../../../shared/services/core.service";
import API_NAMES from '../configs/api.names';

class DashboardService extends CoreService {
    //>> Get Users...
    getUsers(){
        return this.get(API_NAMES.GET_USERS)
    }
}

export default new DashboardService();