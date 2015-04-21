var assert = require('assert');
var fs = require('fs');
var should = require('should');
describe('Files', function(){
    describe('CSS', function(){
        it('Bootstrap should exist', function(){
            var j = fs.readFileSync('./src/css/bootstrap.min.css');
            j.should.exist;
        });
        it('Footer should exist', function(){
            var j = fs.readFileSync('./src/css/footer.css');
            j.should.exist;
        });
        it('Header should exist', function(){
            var j = fs.readFileSync('./src/css/header.css');
            j.should.exist;
        });
        it('Main should exist', function(){
            var j = fs.readFileSync('./src/css/main.css');
            j.should.exist;
        })
    });
    describe('Assets', function(){
        it('github.png should exist', function(){
            var j = fs.readFileSync('./src/img/github-icon.png');
            j.should.exist;
        })
    });
    describe('Assets', function(){
        it('github.png should exist', function(){
            var j = fs.readFileSync('./src/img/github-icon.png');
            j.should.exist;
        })
    });
    describe('Javascript', function(){
        describe('libs', function(){
            it('Backbone should exist', function(){
                var j = fs.readFileSync('./src/js/libs/backbone/backbone.js');
                j.should.exist;
            });
            it('BootstrapJS should exist', function(){
                var j = fs.readFileSync('./src/js/libs/bootstrap/bootstrap.min.js');
                j.should.exist;
            });
            it('jQuery should exist', function(){
                var j = fs.readFileSync('./src/js/libs/jquery/jquery.js');
                j.should.exist;
            });
            it('require should exist', function(){
                var j = fs.readFileSync('./src/js/libs/require/require.js');
                j.should.exist;
            });
            it('underscore should exist', function(){
                var j = fs.readFileSync('./src/js/libs/underscore/underscore.js');
                j.should.exist;
            })
        });
        describe('Collections', function(){
            it('IssueCollection should exist', function(){
                var j = fs.readFileSync('./src/js/collections/IssueCollection.js');
                j.should.exist;
            })
        });
        describe('Models', function(){
            it('IssuePaneModel should exist', function(){
                var j = fs.readFileSync('./src/js/models/IssuePaneModel.js');
                j.should.exist;
            })
        });
        describe('Views', function(){
            it('ActiveIssueView should exist', function(){
                var j = fs.readFileSync('./src/js/views/ActiveIssueView.js');
                j.should.exist;
            });
            it('IssuePaneView should exist', function(){
                var j = fs.readFileSync('./src/js/views/IssuePaneView.js');
                j.should.exist;
            });
            it('IssuesView should exist', function(){
                var j = fs.readFileSync('./src/js/views/IssuesView.js');
                j.should.exist;
            })
        })
        describe('Require', function(){
            it('app should exist', function(){
                var j = fs.readFileSync('./src/js/app.js');
                j.should.exist;
            });
            it('bootstrapper should exist', function(){
                var j = fs.readFileSync('./src/js/bootstrapper.js');
                j.should.exist;
            });
            it('IssuesView should exist', function(){
                var j = fs.readFileSync('./src/js/views/IssuesView.js');
                j.should.exist;
            })
        });
        describe('License', function(){
            it('MIT License should exist', function(){
                var j = fs.readFileSync('./LICENSE.txt');
                j.should.exist;
            })
        })
        describe('HTML', function(){
            it('Main should exist', function(){
                var j = fs.readFileSync('./src/main.html');
                j.should.exist;
            })
        })
        describe('Package.json', function(){
            it('package should exist', function(){
                var j = fs.readFileSync('./package.json');
                j.should.exist;
            })
        })
    });
});