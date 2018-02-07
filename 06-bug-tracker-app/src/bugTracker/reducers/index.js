function bugsReducer(currentState = [], action){
	if (action.type === 'LOAD'){
		return action.payload;
	}
	if (action.type === 'ADD_NEW'){
		let newBug = action.payload;
		let newState = [...currentState, newBug];
		return newState;
	}
	if (action.type === 'TOGGLE'){
		let bugToBeReplaced = action.payload.oldBug,
			bugToReplace = action.payload.newBug;
		return currentState.map(bug => bug === bugToBeReplaced ? bugToReplace : bug);
	}
	if (action.type === 'REMOVE'){
		let bugsToRemove = action.payload;
		return currentState.filter(bug => bugsToRemove.indexOf(bug) === -1);
	}
	if (action.type === 'SORT'){
		return action.payload;
	}
	return currentState;
}

export default bugsReducer;