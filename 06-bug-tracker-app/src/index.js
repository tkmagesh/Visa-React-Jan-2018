import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';

import appStore from './store';
import axios from 'axios';


/*
import { bindActionCreators } from 'redux';
import bugActionCreators from './bugTracker/actions';
import BugTracker from './bugTracker/BugTracker';

import spinnerActionCreators from './spinner/actions';
import Spinner from './spinner';

let bugActions = bindActionCreators(bugActionCreators, appStore.dispatch);
let spinnerActions = bindActionCreators(spinnerActionCreators, appStore.dispatch);

function renderApp(){
	let bugs = appStore.getState().bugsData,
		spinnerValue = appStore.getState().spinnerData;

	ReactDOM.render(
			<div>
				<Spinner value={spinnerValue} {...spinnerActions} />
				<hr/>
				<BugTracker bugs={bugs} {...bugActions}/>
			</div>,
		document.getElementById('root'));
}
renderApp();
appStore.subscribe(renderApp);
window.store = appStore;

*/

import { Provider } from 'react-redux';
import BugTracker from './bugTracker/BugTracker';
import Spinner from './spinner';

window.axios = axios;

ReactDOM.render(
		<Provider store={appStore}>
			<div>
				<Spinner />
				<hr/>
				<BugTracker/>
			</div>
		</Provider>,
		document.getElementById('root'));

