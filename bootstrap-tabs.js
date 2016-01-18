/*global require*/
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
//to avoid errors in workbench: you can remove this when you have added an app
var app;
require.config({
	baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources"
});

require( ["js/qlik"], function ( qlik ){

	qlik.setOnError( function ( error ){
		alert( error.message );
	});

	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		qlik.resize();
	});

	//callbacks -- inserted here --
	//open apps -- inserted here --
	
	//get objects -- inserted here --
	//create cubes and lists -- inserted here --


	if (app) {
		app.getObject('CurrentSelections', 'CurrentSelections').then(function() {
			$(".rain").hide();
			$(".tab-content").show();
			qlik.resize();
		});
	} else {
		$(".rain").hide();
		$(".tab-content").show();
	}

});