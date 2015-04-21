require.config({
	baseUrl: "js/", // Base directory for this application
	shim: {
		bootstrapjs: { "deps" : ['jquery'] }
	},
	paths: {
		// Load all of the common modules
		backbone: 'libs/backbone/backbone',
		bootstrapjs: 'libs/bootstrap/bootstrap.min',
		jquery: 'libs/jquery/jquery',
		underscore: 'libs/underscore/underscore',
		//Load Views
		IssueView: 'views/IssuesView',
		ActiveIssueView : 'views/ActiveIssueView',
		IssuePaneView : 'views/IssuePaneView',
		//Load Models
		HeaderModel: 'models/HeaderModel',
		IssuePaneModel: 'models/IssuePaneModel'
	}
});

// Load our app once configuration is complete
require([
	// app.js will be loaded and passed as the object APP
	'app',
], function(App){
	// App entry point
	$(function() {
		App.Initialize();
	});
});