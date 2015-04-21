define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrapjs',
    'IssuePaneView',
    'IssuePaneModel'
], function($, _, Backbone, Bootstrap, IssuePaneView, IssuePaneModel){

    var IssuesView = Backbone.View.extend({
        el: '.issues-pane',

        initialize: function(){
            this.page = 1;
            this.issues = [];
            this.$activeIssue = undefined;
            $.get('https://api.github.com/repos/rails/rails/issues?page=' + this.page + '&per_page=25', function(data){
                _.each(data, function(issue){
                    var pane = new IssuePaneView({IssueModel : new IssuePaneModel(issue), parent : this});
                    this.issues.push(pane);
                }.bind(this))
            }.bind(this));
            $(window).scroll(function(){
                this.infiniteScroll();
            }.bind(this));
        },

        infiniteScroll : function(){
            if ($(window).scrollTop() == $(document).height()-$(window).height()){
                this.page += 1;
                $.get('https://api.github.com/repos/rails/rails/issues?page=' + this.page + '&per_page=25', function(data){
                    _.each(data, function(issue){
                        var pane = new IssuePaneView({IssueModel : new IssuePaneModel(issue), parent : this});
                        this.issues.push(pane);
                    }.bind(this))
                }.bind(this))
            }
        }
    });

    return IssuesView;
});