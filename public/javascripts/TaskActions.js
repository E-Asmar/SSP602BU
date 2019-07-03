function addTask(){
	window.location.href = '/tasks/add';
}

function cancelAdd(){
	window.location.href = '/tasks';
}

function completeClick(){
	window.location.href= '/tasks/mdisplay/:id';
}