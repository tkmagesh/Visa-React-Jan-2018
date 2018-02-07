import axios from 'axios';

let baseUrl = 'http://localhost:3030/bugs';

export function getAll(){
	return axios
		.get(baseUrl)
		.then(response => response.data);
}

export function addNew(newBugData){
	return axios
		.post(baseUrl, newBugData)
		.then(response => response.data);
}

export function remove(bug){
	return axios
		.delete(`${baseUrl}/${bug.id}`)
		.then(response => response.data);
}

export function save(bug){
	return axios
		.put(`${baseUrl}/${bug.id}`, bug)
		.then(response => response.data);	
}