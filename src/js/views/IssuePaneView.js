define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrapjs',
    'ActiveIssueView'
], function($, _, Backbone, Bootstrap, ActiveIssueView){
    //Require the needed scripts, views, models, etc.
    var IssuePaneView = Backbone.View.extend({
        //A view which represents each individual issue pane stub.
        el: '.issues-pane', //Define .issues-pane as the element as it contains all of the stubs

        initialize: function(options){
            this.IssueModel = options["IssueModel"]; //Store the model for future use
            this.render(this.IssueModel);
            this.parent = options["parent"]; //Store the parent as we will need it later in manipulating to the active view.
            $('.issue-container').unbind('click').on('click', function(event){
                //Bind the an on click listener to each pane. When clicked, make it the active pane.
                this.makeActive(event);
            }.bind(this)) //maintain context
        },

        render: function(IssueModel){
            //Build the structure for each section
            var gravatarContainer = $('<div/>')
                .addClass("user-gravatar-container")
                .html('<img class="user-gravatar" src="' + IssueModel.reporterGravatarURL + '" width="50" height="50"> ');
            var usernameContainer = $('<div/>')
                .addClass("username-container")
                .html(IssueModel.reporterUsername);
            var labelContainer = $('<div/>')
                .addClass("label-container");
            var usernameLabelContainer = $('<div/>')
                .addClass("issue-info-container")
                .html(gravatarContainer)
                .append(usernameContainer)
                .append(labelContainer);
            _.each(IssueModel.labels, function(label){
                var textColor = this.evalLumens(label["color"]);
                labelContainer.append($("<span/>")
                    .addClass("label-element")
                    .html(label["name"])
                    .css({"background-color" : '#'+label["color"],
                         "color" : '#' + textColor}));
            }.bind(this));
            var issueStateContainer = $('<div/>')
                .addClass("state-container")
                .html(IssueModel.state);

            //render the header. Contains the number and title.
            var issueHeader = $('<div/>')
                .addClass("issue-header")
                .html($('<div/>')
                        .addClass("issue-number")
                        .html(IssueModel.number))
                .append(issueStateContainer)
                .append($('<div/>')
                    .addClass("issue-title")
                    .html(IssueModel.title));



            //Add both the summary and body, and set display : block / none when required / not needed.
            var issueSummaryContainer = $('<div/>').addClass("issue-summary-container").html(IssueModel.issueSummary);
            var issueBodyContainer = $('<div/>').addClass("issue-body-container").html(IssueModel.issueBody);


            //Render the body as a composition of the above rendered elements.
            var issueBody = $('<div/>')
                .addClass("issue-body")
                .append(usernameLabelContainer)
                .append(issueSummaryContainer)
                .append(issueBodyContainer);


            //Render the issue as composition of the above elements.
            var issueContainer = $('<div/>')
                .addClass("issue-container")
                .append(issueHeader)
                .append(issueBody);

            $('.issues-pane').append(issueContainer); //push the HTML to the issue pane
        },

        makeActive : function(event){
            //Flow: Animates, Take the HTML of the now active element, Copy it to the active, hide the swivelled out one.
            if(this.parent.$activeIssue != undefined){
                this.parent.ActiveIssueView.remove(); //remove the old active object.
                this.parent.$activeIssue.css("display", "block"); //redisplay the old stub for the old active
                this.parent.$activeIssue.css({"position" : "relative", "top" : "0px"}); //set it back to relative to regain its space.
                this.parent.$activeIssue.stop().animate({"margin-left" : "20px"}, 1000); //Animate the movement
            }
            this.parent.$activeIssue = $(event.target).closest(".issue-container"); //select the new active object

            this.parent.$activeIssue.stop().animate({"margin-left": "52%"}, 1000,function(){
                //Animate the new active object out.
                this.parent.ActiveIssueView = new ActiveIssueView(this.parent.$activeIssue.clone()); //Clone because I don't actually want to move it.
                this.parent.$activeIssue.css("display", "none"); //Hide the element as to hold its place.
            }.bind(this));//maintain context
        },

        evalLumens : function(hex){
            //Borrowed from : http://stackoverflow.com/questions/12043187/how-to-check-if-hex-color-is-too-black
            var hex = hex.substring(1);      // strip #
            var rgb = parseInt(hex, 16);   // convert rrggbb to decimal
            var r = (rgb >> 16) & 0xff;  // extract red
            var g = (rgb >>  8) & 0xff;  // extract green
            var b = (rgb >>  0) & 0xff;  // extract blue

            var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

            if (luma < 120) {
                return 'FFF';
            } else {
                return '000';
            }
        }
    });

    return IssuePaneView;
});