import React from 'react';

import BugEdit from './views/BugEdit';
import BugList from './views/BugList';
import BugStats from './views/BugStats';
import BugSort from './views/BugSort';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import bugActionCreators from './actions';

let BugTracker = ({ bugs, toggle, removeClosed, sort, addNew }) => (
	<div>
		<BugStats bugs={bugs} />
		<BugSort bugs={bugs} sort={sort} />
		<BugEdit addNew={addNew} />
		<BugList toggle={toggle} removeClosed={removeClosed} bugs={bugs} />
	</div>
);

function mapStateToProps(state){
	//extract the required state (bugsData) and return
	let bugs = state.bugsData;
	return {
		bugs : bugs
	};
}
function mapDispatchToProps(dispatch){
	//create bugActions (bound with dipatch) and return
	let bugActions = bindActionCreators(bugActionCreators, dispatch);
	return bugActions;
}
export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);


