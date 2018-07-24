import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import middleware from './middleware';

//grabs the index reducer
//Redux applications have a single store
//need redux-thunk middleware for the dispatch function
const store = createStore(reducer, middleware)//store can take a single root reducer. Tells the store what peices of state we should have.
//Store lets us access data without passing state through multiple components

ReactDOM.render(


  <Provider store={store}>
    <App />
  </Provider>


, document.getElementById('root'));
registerServiceWorker();
