# Github Issue Viewer

Github issue viewer is an open sourced issue viewer for the rails repository. This lightweight viewer was developed for my application to Twitter.

## Tests

All dependencies and tests are stored in package.json. Simply run

> npm install

within the directory and mocha and should will be downloaded.

To run the tests simply type 

> npm test

and the tests will run. There are 22, and they should all pass.

## Usage

Open the main.html file enclosed in the src folder in Chrome. You should be greeted with a window that looks something like this.

http://i.imgur.com/gxfQpIN.png

25 issues should be loaded by default. To obtain the next page of issues, simply scroll to the bottom of the page and another 25 will be appended.

Clicking on an issue should expand it into the right panel and load all of its comments.

http://i.imgur.com/yR6tCtk.png

Clicking on the Github Icon in the center will bring you directly to the rails repository issues.

Clicking on a the issue number will bring you directly to the Github thread.

Clicking on a tagged user will bring them to your Github profile

## Credits
<REDACTED>

## License
MIT Licence