// This module handles miscellaneous events such as clear canvas, erase and save
var misc = ( () => {

	// Get clear element from navbar
	var clear = navbar.getNavbar().childNodes[5];

	// Add event listener
	clear.addEventListener('click', (e) => {

		// Publish clearCanvas event
		pubsub.emit('clearCanvas');
	});

	// Get erase element from navbar
	var erase = navbar.getNavbar().childNodes[3];

	// Add event listener
	erase.addEventListener('click', (e) => {

		// Publish erase event
		pubsub.emit('erase');
	});

	// Get save element from navbar
	var save = navbar.getNavbar().childNodes[7];

	// Add event listener
	save.addEventListener('click', (e) => {

		// Make an a tag to be clicked
		var link = document.createElement('a');

		// Set the tag elements href to canvas data
		link.href = myCanvas.canvas.toDataURL();

		// Name the downloaded file
		link.download =  "myDrawIt.png";

		link.click();
	});

})();