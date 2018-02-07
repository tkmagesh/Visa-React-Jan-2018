import { addNew as addNewBug }   from '../services/bugServer'

export function addNew(bugName){
	return function(dispatch){
		let newBugData = { id : 0,  name : bugName, isClosed : false, createdAt : new Date()};
		addNewBug(newBugData)
			.then(newBug => dispatch({type : 'ADD_NEW', payload : newBug}))
	}
}
