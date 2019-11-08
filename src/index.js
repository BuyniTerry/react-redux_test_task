import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import articleReducer from "./store/reducers/articleReducer";
import commentsReducer from "./store/reducers/commentsReducer";

const rootReducers = combineReducers({
    artRed: articleReducer,
    comRed: commentsReducer
});

const store = createStore(rootReducers, applyMiddleware(thunk));
console.log(store.getState())
;


ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
