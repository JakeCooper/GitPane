define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrapjs'
], function($, _, Backbone, Bootstrap){

    var IssuePane = Backbone.Model.extend({
        el: '.issue',

        initialize: function(issue){
            this.title = issue["title"];
            this.number = '<a href="https://github.com/rails/rails/issues/' + issue["number"] + '" target="_blank">' + issue["number"] + '</a>';
            this.labels = issue["labels"];
            this.reporterUsername = '<a href="https://github.com/' + issue["user"]["login"] + '" target="_blank">' + issue["user"]["login"] + '</a>'
            this.reporterGravatarURL = issue["user"]["avatar_url"];
            this.commentURL = issue["comments_url"];
            if(issue["body"].length === 0){
                this.issueSummary = "No Description Provided."
            } else {
                this.issueSummary = $.trim(issue["body"]).substring(0, 140).split(" ").slice(0, -1).join(" ") + "..."; //trim down to < 140 char
                this.issueSummary = this.issueSummary.replace(/@(\w+)/g, '<a href="https://github.com/$1">@$1</a>'); //Replace @ tagged users with @tags and links to github profile.
            }
            this.issueBody = issue["body"].replace(/@(\w+)/g, '<a href="https://github.com/$1" target="_blank">@$1</a>'); //Do the @ tag replacement for body as well.
            this.state = issue["state"]; //store the state.
        },

        defaults: {
            title : undefined, //title
            number: undefined, //issue number
            labels : [], //Array of label
            reporterUsername : undefined,
            reporterGravatarURL : undefined,
            issueSummary : '', //140 char representation (truncated @ word)
            issueBody : '', //Full Bodied text
            state : undefined
        }
    });

    return IssuePane;
});