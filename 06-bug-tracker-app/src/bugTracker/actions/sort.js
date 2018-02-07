export function sort(bugsToSort, attrName, descending = false){
	let delta = descending ? -1 : 1;
	bugsToSort.sort(function(item1, item2){
		if (item1[attrName] > item2[attrName]) return 1 * delta;
		if (item1[attrName] < item2[attrName]) return -1 * delta;
		return 0;
	});
	return { type : 'SORT', payload : [...bugsToSort]};
}