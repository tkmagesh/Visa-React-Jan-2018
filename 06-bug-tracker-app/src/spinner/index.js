import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import spinnerActionCreators from './actions';

let Spinner = ({value, increment, decrement}) => (
	<div>
		<input type="button" value="Decrement" onClick={decrement} />
		<span> {value} </span>
		<input type="button" value="Increment" onClick={increment} />
	</div>
);

function mapStateToProps(state){
	let spinnerValue = state.spinnerData;
	return {
		value : spinnerValue
	};
}

function mapDispatchToProps(dispatch){
	let spinnerActions = bindActionCreators(spinnerActionCreators, dispatch);
	return spinnerActions;
}

export default connect(mapStateToProps, mapDispatchToProps)(Spinner);