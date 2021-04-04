
import reducers from './reducers';
import config from '../config';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const middlewares = [thunk];
if (config.env === `dev`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

const store = composeWithDevTools(applyMiddleware(...middlewares))(createStore)(reducers);
export default store;