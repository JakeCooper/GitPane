define([
    'jquery',
    'underscore',
    'backbone',
    'IssuePaneModel'
], function($, _, Backbone, IssuePaneModel){

    /**
     * @extends Backbone.Collection
     */
    var IssueCollection = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: IssuePaneModel

    });

    /**
     * @return
     */
    return IssueCollection;
});