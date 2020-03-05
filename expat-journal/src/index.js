import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers, } from "redux";
import thunk from "redux-thunk";
import * as serviceWorker from './serviceWorker';
import {entryReducer} from "./reducers/EntryReducer";
import {postReducer} from "./reducers/PostReducer"

//STEP 4 Use combineReducers from REDUX to make a single reducer
const journalReducer = combineReducers({
    entry:entryReducer,
    post:postReducer,
    formValues:formReducer,
});


//STEP 5 Use createStore from REDUX to create a state store
const store = createStore(
  journalReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)


ReactDOM.render(
    //STEP 6 wrap the application with a Provider from React-Redux
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();