function bugsReducer(currentState = [], action){
	if (action.type === 'LOAD'){
		return action.payload;
	}
	if (action.type === 'ADD_NEW'){
		let newBug = action.payload;
		let newState = [...currentState, newBug];
		return newState;
	}
	if (action.type === 'UPDATE'){
		let bugToUpdate = action.payload;
		return currentState.map(bug => bug.id === bugToUpdate.id ? bugToUpdate : bug);
	}
	if (action.type === 'REMOVE'){
		let bugToRemove = action.payload;
		return currentState.filter(bug => bug.id !== bugToRemove.id);
	}
	if (action.type === 'SORT'){
		return action.payload;
	}
	return currentState;
}

export default bugsReducer;