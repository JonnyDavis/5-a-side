import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './data/reducer';


// creating the initial state
const initial = {
	names: [],
};

// creating a store that acts as a wrapper around the state, allowing us to dispatch actions which will change the state, or subscribe to any changes so that the state will be updated.
const store = createStore(
	reducer,
	initial,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // links the current state to a plugin for Chrome (Redux Dev Tools)
);



ReactDOM.render(
	<Provider store={ store }>
		<Router>
			<App />
		</Router>
	</Provider>,	 
	document.getElementById('root'),
);

