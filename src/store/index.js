
import reducers from './reducers';
import config from '../config';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
const middlewares = [thunk];
if (config.env === `dev`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(reducers);
export default store;