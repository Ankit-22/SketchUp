// This module handles the operatons of paint brush like change size and show in HTML
var brushTool = ( () => {

	// Get the brush tool element
	var brushTool = navbar.getNavbar().childNodes[1];

	// Initialize brush size and minimum and maximum size constants
	var brushSize = 15;
	var maxbs = 50,minbs = 0.5;

	var setBrushSize = newbs => {

		// If new brush size is in between min and max the set it else set min or max based on condition
		if(newbs < minbs) brushSize=minbs;
		else if(newbs > maxbs) brushSize=maxbs;
		else brushSize = newbs;

		// Publish that brush size has changed
		pubsub.emit('changeBrush', brushSize);
	}

	var render = () => {
		// Add innerHTML to brushTool
		brushTool.innerHTML += '<button type="button" class="btn btn-primary nav-brand">Brush Size</button>&emsp;<div class = "form-group inline-form"><input min = "1" max = "50" value = "'+brushSize+'" type = "number" class = "form-control small" id = "usr"></div>&emsp;'
	}

	var setListener = () => {
		// Add listener to set brush size
		brushTool.childNodes[2].childNodes[0].addEventListener('change', e => {
			setBrushSize(e.target.value);
		});
	}

	render();
	setListener();

})();