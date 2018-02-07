import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';

import './index.css';

import appStore from './store';

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

