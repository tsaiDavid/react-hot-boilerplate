import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
// import { renderDevTools } from '../utils/DevTools';
import TestRunner from './TestRunner';

const store = configureStore(window.__INITIALSTATE__);

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <TestRunner />
        </Provider>
        { /* renderDevTools() */}
      </div>
    );
  }
}
