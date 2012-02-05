(function() {
	// get a reference to the utility stuff
	var utils = new Utils();
	
	// get a reference to the database stuff
	// and set the event handler for database init
	var database = new Database(function() {
		// clear the stations list
		utils.clearListItems(utils.stationsList);

		// populate the stations list
		var listElements = Database.prototype.getStations(function (tx, result) {
	        for (var i = 0; i < result.rows.length; ++i) {
	            var row = result.rows.item(i);
	            var listItem = document.createElement("li");
	            listItem.innerHTML = '<button type="button" id="' + row['StationID'] + '">' + row['StationName'] + '</button>';
	            document.getElementById("allStations").appendChild(listItem);
	        }
		});
	});

	// set the geolocation event handler
//	utils.requestGeolocation(function(position){
//		console.log(position);
//	});
	
	// set the navigation handler clicks
	var navigation = document.getElementById("navigation");
	if (navigation && navigation.style.display != "none") {
		new MBP.fastButton(navigation, function(event){
			switch (event.target.getAttribute("name")) {
				case "linesNavButton" :
					// show the lines container
					utils.switchToContainer(utils.linesContainer);
					break;
				case "stationsNavButton" :
					// show the stations container
					utils.switchToContainer(utils.stationsContainer);
					break;
				case "busNavButton" :
					// show the bus container
					utils.switchToContainer(utils.busContainer);
					break;
			}
		});
	}

	

})();

