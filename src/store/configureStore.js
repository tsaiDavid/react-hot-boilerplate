import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../utils/DevTools';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

/**
 * In production, you'll want to enable a setting where you strip out Dev Tools
 * @param  {[type]} middleware           [description]
 * @param  {[type]} DevTools.instrument( [description]
 * @return {[type]}                      [description]
 */
const finalCreateStore = compose(
  // Middleware you want to use in development:
  middleware,
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}
