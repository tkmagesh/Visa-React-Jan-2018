import React, { Component } from 'react';

class BugItem extends Component{
	onBugNameClick(){
		this.props.toggle(this.props.bug);
	}
	render(){
		let { bug } = this.props,
			bugStyles = bug.isClosed ? 'bugname closed' : 'bugname';
		return(
			<li>
				<span className={bugStyles} onClick={this.onBugNameClick.bind(this)}>
					{bug.name}
				</span>
				<div>{bug.isClosed.toString()}</div>
				<div className="datetime">[Created At]</div>
			</li>
		)
	}
}

export default BugItem;