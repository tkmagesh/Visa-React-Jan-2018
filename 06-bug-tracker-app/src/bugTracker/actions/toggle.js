import { save } from '../services/bugServer';

export  function toggle(bugToToggle){
	return async function(dispatch){
		let toggledBugData = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		let toggledBug = await save(toggledBugData)
		dispatch({type : 'UPDATE', payload : toggledBug});
	}
}