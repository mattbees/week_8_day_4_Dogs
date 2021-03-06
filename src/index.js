import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import dogsReducer from './reducers/dogs-reducer';
// import HeaderContainer from './containers/HeaderContainer';
// import  { Form, ErrorMessage } from './containers/HeaderContainer';
import  { TempForm, TempErrorMessage } from './containers/HeaderContainer';
import ImagesListContainer from'./containers/ImagesListContainer';

const state = { images: [], success: true }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  dogsReducer, state,
  composeEnhancers(applyMiddleware(thunk))
);


ReactDOM.render(
    <Provider store ={store}>
      <TempForm />
      <TempErrorMessage />
      <ImagesListContainer/>
    </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
