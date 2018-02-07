import { getAll } from '../services/bugServer'

export function load(){
	return function(dispatch){
		console.log(arguments);
		getAll()
			.then(bugs => dispatch({type : 'LOAD', payload : bugs}));
	}
}