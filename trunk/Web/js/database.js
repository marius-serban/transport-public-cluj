try {
// Database class
var Database = (function(){
	// private member
	var db;

	// callback that is executed after database initialization
	var initCallback;
	
	// private method
	var creationCallback = function(db) {

		// get the static data from the server
		var dataScriptElement = document.createElement("script");
		dataScriptElement.setAttribute("src", "js/data.js");
		document.body.appendChild(dataScriptElement);
		delete dataScriptElement;
		
		// set the version
		db.changeVersion("", "1");

		// create the database structure
		db.transaction(function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS Route', []);
            tx.executeSql('DROP TABLE IF EXISTS DepartureFromStart', []);
            tx.executeSql('DROP TABLE IF EXISTS DepartureFromEnd', []);
            tx.executeSql('DROP TABLE IF EXISTS Station', []);
            tx.executeSql('DROP TABLE IF EXISTS RouteStation', []);
            tx.executeSql('CREATE TABLE Route(RouteID INTEGER PRIMARY KEY, RouteName VARCHAR(45), StartStationID INTEGER, EndStationID INTEGER, RouteType SMALLINT)', []);
            tx.executeSql('CREATE TABLE DepartureFromStart(RouteID INTEGER PRIMARY KEY, StartTime TIME, IsSaturday SMALLINT, IsSunday SMALLINT)', []);
            tx.executeSql('CREATE TABLE DepartureFromEnd(RouteID INTEGER PRIMARY KEY, StartTime TIME, IsSaturday SMALLINT, IsSunday SMALLINT)', []);
            tx.executeSql('CREATE TABLE Station(StationID INTEGER PRIMARY KEY, StationName VARCHAR(45), Latitude FLOAT, Longitude FLOAT)', []);
            tx.executeSql('CREATE TABLE RouteStation(RouteID INTEGER, StationID INTEGER, Step INTEGER, PRIMARY KEY (RouteID, StationID, Step))', []);
        });
        
        // insert some stations
		db.transaction(function(tx) {
            var stationsData = DBData.stations;
            for (var i = 0; i<stationsData.length; i++) {
                tx.executeSql('INSERT INTO Station(StationID, StationName, Latitude, Longitude) VALUES (?, ?, ?, ?)', stationsData[i]);
            }
        });

        // insert some routes
		db.transaction(function(tx) {
            var routesData = DBData.routes;
            for (var i = 0; i<routesData.length; i++) {
                tx.executeSql('INSERT INTO Route(RouteID, RouteName, StartStationID, EndStationID, RouteType) VALUES (?, ?, ?, ?, ?)', routesData[i]);
            }
        });

		initCallback();
		
	};

    // the constructor
	var Database = function(initalizeCallback) {
    	try {
    		// open the database
            // e.g. window.openDatabase( DatabaseName, DatabaseVersion, DisplayName, EstimatedSize)
    		db = window.openDatabase("transport-public-cluj", "1", "Transport Public Cluj", 1024*1024, creationCallback);

    	} catch (e) {
    		// this means the requested version does not exist, in this case we reset the database
    		db = window.openDatabase("transport-public-cluj", "", "Transport Public Cluj", 1024*1024);
    		creationCallback(db);
    	}
    	initCallback = initalizeCallback;
    	initCallback();
    };

    // public methods
    // gets all the routes
    Database.prototype.getRoutes = function(successCallback, errorCallback) {
        db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM Route', [], successCallback, errorCallback);
        });
    };

    // gets all the stations
    Database.prototype.getStations = function(successCallback, errorCallback) {
        db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM Station', [], successCallback, errorCallback);
        });
    };

    // gets the stations for a given route
    Database.prototype.getStationForRoute = function(routeID, successCallback, errorCallback) {
        db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM Station WHERE routeID = ?', [routeID], successCallback, errorCallback);
        });
    };

    // gets the routes for a given station
    Database.prototype.getStationForRoute = function(StationID, successCallback, errorCallback) {
        db.transaction(function(tx) {
            tx.executeSql('SELECT Station.* FROM Station JOIN WHERE routeID = ?', [routeID], successCallback, errorCallback);
        });
    };

    return Database;
})();

} catch (e) {
	alert('database error');
}
