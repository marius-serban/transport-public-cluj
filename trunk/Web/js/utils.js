// Utils singleton class
var Utils = (function() {
	var thisClass = function(){};

	// cache the frequently used DOM elements as static properties
	thisClass.prototype.linesContainer = document.getElementById("container-lines");
	thisClass.prototype.stationsContainer = document.getElementById("container-stations");
	thisClass.prototype.busContainer = document.getElementById("container-bus");
	thisClass.prototype.stationsList = document.getElementById("allStations");
	thisClass.prototype.linesList = document.getElementById("allLines");

	// static function that switches between containers
	thisClass.prototype.switchToContainer = function(destinationContainer) {
		linesContainer.setAttribute("class", "hidden");
		stationsContainer.setAttribute("class", "hidden");
		busContainer.setAttribute("class", "hidden");
		destinationContainer.removeAttribute("class");
	};
	
	// static function that sends a request for geolocation to the browser
	thisClass.prototype.requestGeolocation = function(handler) {
		navigator.geolocation.getCurrentPosition(handler);
	};

	thisClass.prototype.hide = function(element) {
		element.setAttribute("class", "hidden");
	};

	thisClass.prototype.show = function(element) {
		element.removeAttribute("class");
	};
	
	thisClass.prototype.clearListItems = function(element) {
		var currentElements = Array.prototype.slice.call(element.getElementsByTagName("li"));
		var count = currentElements.length;
		for (var i = 0; i < count; i++) {
			currentElements[i].parentNode.removeChild(currentElements[i]);
		}
	};
	
	return thisClass;
})();