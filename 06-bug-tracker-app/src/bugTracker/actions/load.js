import axios from 'axios';

export function load(){
	return function(dispatch){
		axios
			.get('http://localhost:3030/bugs')
			.then(response => response.data)
			.then(data => dispatch({type : 'LOAD', payload : data}));
	}
}