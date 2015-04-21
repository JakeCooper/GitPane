define([
	'jquery',
	'underscore',
	'backbone',
	'bootstrapjs',
	'IssueView'

], function($, _, Backbone, Bootstrap, IssueView){
	//Use require to define my Scripts/Models/etc.
	var manyIssuesView;

	var Initialize = function () {
		manyIssuesView = new IssueView(); //Initialize the main view
		Backbone.history.start();
	};
	
	// Map public API functions to internal functions
	return {
		Initialize: Initialize
	};
});