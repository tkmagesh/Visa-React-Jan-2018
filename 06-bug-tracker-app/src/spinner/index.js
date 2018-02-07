import React from 'react';

let Spinner = ({value, increment, decrement}) => (
	<div>
		<input type="button" value="Decrement" onClick={decrement} />
		<span> {value} </span>
		<input type="button" value="Increment" onClick={increment} />
	</div>
);
export default Spinner;