import React, { Component } from 'react';

import BugEdit from './views/BugEdit';
import BugList from './views/BugList';
import BugStats from './views/BugStats';
import BugSort from './views/BugSort';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import bugActionCreators from './actions';

/*let BugTracker = ({ bugs, toggle, removeClosed, sort, addNew }) => (
	<div>
		<BugStats bugs={bugs} />
		<BugSort bugs={bugs} sort={sort} />
		<BugEdit addNew={addNew} />
		<BugList toggle={toggle} removeClosed={removeClosed} bugs={bugs} />
	</div>
);*/

class BugTracker extends Component{
	componentDidMount(){
		this.props.load();
	}
	render(){
		let { bugs, addNew, toggle, removeClosed, sort } = this.props;
		return(
			<div>
				<BugStats bugs={bugs} />
				<BugSort bugs={bugs} sort={sort} />
				<BugEdit addNew={addNew} />
				<BugList toggle={toggle} removeClosed={removeClosed} bugs={bugs} />
			</div>
		);
	}
}

function mapStateToProps(state){
	//extract the required state (bugsData) and return
	//let bugs = state.bugsData.filter((bug, index) => index % 2 === state.spinnerData % 2);
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

/*export default connect(
	({bugsData : bugs, spinnerData}) => ({bugs : bugs.filter((bug, index) => index % 2 === spinnerData % 2)}), 
	(dispatch) => bindActionCreators(bugActionCreators, dispatch))
(BugTracker);
*/

