import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';

import './index.css';

import appStore from './store';
import bugActionCreators from './bugTracker/actions';
import BugTracker from './bugTracker/BugTracker';

let bugActions = bindActionCreators(bugActionCreators, appStore.dispatch);
function renderApp(){
	let bugs = appStore.getState();
	ReactDOM.render(<BugTracker bugs={bugs} {...bugActions}/>,
		document.getElementById('root'));
}
renderApp();
appStore.subscribe(renderApp);

