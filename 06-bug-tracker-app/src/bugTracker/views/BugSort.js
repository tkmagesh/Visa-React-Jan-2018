import React, { Component } from 'react';

class BugSort extends Component{
	constructor(){
		super();
		this.onSortChange = this.onSortChange.bind(this);
	}
	onSortChange(){
		this.props.sort(this.props.bugs, this.refs.selectSort.value, this.refs.chkDescending.checked)
	}
	render(){
		return(
			<section className="sort">
				<label htmlFor="">Order By :</label>
				<select ref="selectSort" onChange={this.onSortChange}>
					<option value="name">Name</option>
					<option value="isClosed">Status</option>
				</select>
				<label htmlFor="">Descending ? :</label>
				<input type="checkbox" ref="chkDescending" onChange={this.onSortChange}/>
			</section>
		)
	}
}
export default BugSort;