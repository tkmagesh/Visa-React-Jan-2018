export function removeClosed(existingBugs){
	let bugsToRemove = existingBugs.filter(bug => bug.isClosed);
	return { type : 'REMOVE', payload : bugsToRemove};
}