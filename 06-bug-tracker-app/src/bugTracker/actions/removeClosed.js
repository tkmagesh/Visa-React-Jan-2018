import { remove } from '../services/bugServer';

export function removeClosed(){
	return function(dispatch, getState){
		let bugsToRemove = getState().bugsData.filter(bug => bug.isClosed);
		bugsToRemove.forEach(bugToRemove => {
			remove(bugToRemove)
				.then(dispatch({ type : 'REMOVE', payload : bugToRemove}));
		});
	}
}