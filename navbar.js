// This module exports the navbar element
var navbar = ( () => {

	// Get the navbar element
	var navbar = document.getElementById('navbar');

	// This function returns navbar element
	var getNavbar = () => {
		return navbar;
	}

	// Export the getter for navbar inside an object to acess from outside
	return {
		getNavbar: getNavbar
	}

})();