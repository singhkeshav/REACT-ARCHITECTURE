import axios from 'axios';
import Env from '../../env';
class CoreService {
    //Get Data...
    //Server URL...
    get(methodName) {
        return axios.get(this.bindUrl(methodName), this.jwt());
    }

    //>> POST Data...
    //params {url,data}
    post(methodName, data) {
        return axios.post(this.bindUrl(methodName), data, this.jwt());
    }

    //PUT Data...
    //parmas {url,data}
    put(methodName, data) {
        return axios.put(this.bindUrl(methodName), data, this.jwt());
    }

    //PATCH Data...
    //parmas {url,data}
    patch(methodName, data) {
        return axios.patch(this.bindUrl(methodName), data, this.jwt());
    }

    //DELETE Data...
    //parmas {url}
    delete(methodName) {
        return axios.delete(this.bindUrl(methodName), this.jwt());
    }

    //>>JWT Access Token...
    jwt() {
        if (localStorage.getItem('token')) {
            return {
                headers: {
                    'authorization': localStorage.getItem('token'),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        } else {
            return {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        }
    }

    //URL
    bindUrl(methodName, virsion) {
        if (methodName.indexOf('^thirdparty^/') > -1) {
            return methodName.replace('^thirdparty^/', '');
        } else {
            if (virsion) {
                return `${Env.BASEURL}${virsion}/${methodName}`;
            } else {
                return `${Env.BASEURL}${methodName}`;
            }
        }
    }
}


export default CoreService;