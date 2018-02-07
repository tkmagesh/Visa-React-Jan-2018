import React, { Component } from 'react';
import BugItem from './BugItem';

let BugList = ({bugs, removeClosed, toggle}) => {
	let bugItems = bugs.map((bug,index) => (
		<BugItem key={index} bug={bug} toggle={toggle} />
	));
	return(
		<section className="list">
			<ol>
				{bugItems}
			</ol>
			<input type="button" value="Remove Closed" onClick={() => removeClosed(bugs)}/>
		</section>
	)
}
export default BugList;