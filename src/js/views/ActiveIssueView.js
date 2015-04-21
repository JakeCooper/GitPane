define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrapjs'
], function($, _, Backbone, Bootstrap){

    var ActiveIssueView = Backbone.View.extend({
        el: '.active-issue-pane',

        initialize: function($activeIssue){
            this.$activeIssue = $activeIssue;
            this.$el.html(this.$activeIssue);
            this.$activeIssue.css({"width" : "92%","margin-left" : "20px"});
            this.displayBody();
            this.loadComments();
        },

        displayBody : function(){
            //Hide the summary, display the body. Occurs when a pane becomes of state active.
            this.$activeIssue.children(".issue-body").children(".issue-summary-container").css("display", "none");
            this.$activeIssue.children(".issue-body").children(".issue-body-container").css("display", "block");
        },

        remove: function(){
            //Removes the currently active pane.
            this.$activeIssue.css("display", "none"); //set to none as to prevent an issue where content wasn't disappearing fast enough.
            this.$el.children(".comment-container").remove(); //Make the remove call.
        },

        loadComments : function(){

            this.$el.append($('<div/>')
                            .addClass("comment-container")); //Create the comment container
            $.get('https://api.github.com/repos/rails/rails/issues/' + this.$activeIssue.children(".issue-header").children(".issue-number").text() + '/comments', function(data){
                //Make a get request to github.
                if(data.length === 0){
                    //In the event there are no comments, display something so that the user knows it.
                    this.$el.children(".comment-container").append($('<div/>')
                        .addClass("comment")
                        .html("This issue has no comments"));
                } else {
                    //When there are comments, render them sequentially, as well as the gravatar and username of the user who submitted the comment.
                    _.each(data, function(comment){
                        this.$el.children(".comment-container").append($('<div/>')
                            .addClass("comment")
                            .html($('<div/>')
                                .addClass('user-info-container')
                                .html('<img class="user-gravatar user-gravatar-comments" src="' + comment["user"]["avatar_url"] + '" width="50" height="50">')
                                .append($('<div/>')
                                    .addClass('comment-username-container')
                                    .html('<a href="https://github.com/' + comment["user"]["login"] + '">' + comment["user"]["login"] + '</a>')))
                            .append(comment["body"].replace(/@(\w+)/g, '<a href="https://github.com/$1">@$1</a>'))); //Scan and replace @ tagged users with links.
                    }.bind(this)) //maintain context
                }
            }.bind(this)); //maintain context
        }
    });

    return ActiveIssueView;
});