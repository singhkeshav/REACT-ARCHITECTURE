
import EnvProd from './env.prod';
import EnvDev from './env.dev';
import EnvQa from './env.qa';
import EnvStage from './env.stag';
import config from '../config'
let EnvFile = (envMode) => {
    switch(envMode){
        case 'prod' :
         return EnvProd;
        case 'qa' :
          return EnvQa;
        case 'stage' :
          return EnvStage;
        default :
          return EnvDev;

    }
}
let ENV = EnvFile(config.env);
export default ENV
