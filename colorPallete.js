// This module handles events on color pallete
var colorPallete = ( () => {

	// Get color pallete element from navbar
	var colorPallete = navbar.getNavbar().childNodes[9];

	// Initialize list of available colors
	var colors = ["#000", "#fff", "#99c2ff", "#ff6666", "#99ff99", "#ffff80", "#dea562"];

	// This function sets listeners on all color elements
	var setListeners = () => {

		// Get all the color elements
		var shades = colorPallete.getElementsByClassName('circular');
		for(var i = 0; i < shades.length; i++) {

			// Set listener on each element
			shades[i].addEventListener('click', event => {

				// Remove class from previous clicked element
				colorPallete.getElementsByClassName('clicked')[0].classList.remove('clicked');

				// Add clicked class to clicked element
				event.target.classList.add('clicked');

				// Publish setColor event with background color of the clicked button
				pubsub.emit('setColor', event.target.style.backgroundColor);
			});
		}
	}

	// This function renders our color elements to HTML
	var render = () => {

		// Clear color pallete
		colorPallete.innerHTML = "";

		// Loop through the list of colors and add their HTML
		for( var i in colors ) {
			colorPallete.innerHTML += '<div class="circular" style="background-color: '+colors[i]+';"></div>';
		}

		// Set clicked class on first element
		colorPallete.querySelector('.circular').classList.add('clicked');
		console.log( colorPallete.querySelector('.circular').style.backgroundColor);
		pubsub.emit('setColor', colorPallete.querySelector('.circular').style.backgroundColor);
	}

	// Render the elements
	render();

	// Set Listeners
	setListeners();

})();