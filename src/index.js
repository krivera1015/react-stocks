import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//our provider which will allow each component to use our store
import {Provider} from 'react-redux';

//this is our way to create a store
import {createStore} from 'redux'
import reducer from './redux/reducer.js'

const store = createStore(reducer) 
ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
