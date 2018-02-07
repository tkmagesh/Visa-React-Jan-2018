import { getAll } from '../services/bugServer';

export function load(){
	return async function(dispatch){
		let bugs = await getAll();
		dispatch({type : 'LOAD', payload : bugs});
	}
}