import { createStore, } from 'redux';
import reducers from './reducers';
import config from '../config';
import {applyMiddleware, compose } from 'redux';
const middlewares = [];

if (config.env === `dev`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

  const store = compose(applyMiddleware(...middlewares))(createStore)(reducers);
  export default store;