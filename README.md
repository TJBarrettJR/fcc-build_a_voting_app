FCC-Build a Voting App
=========================

Login and users add and updates is up.
Added basics of polls and pages

To run from codeanywhere use "nf run npm start"
--------------------------
Uses [node-forman](https://github.com/strongloop/node-foreman) to follow [this](https://support.glitch.com/t/what-changes-do-i-need-to-make-to-my-project-to-host-on-my-own-machine/1382/2) guide from glitch


Will use angular, bootstrap, mongoDB, and either chart.js or d3.js for final product

TODO:

using [this](https://angular.io/tutorial/toh-pt4#inject-the-heroservice) to get basics of angular

* Focus on converting everything from pug to angular
  * Adjust angular routes and urls for what is already built
  * May need to run "tsc -p public/ --listEmittedFiles" when adding new components
  * pug to convert
    * polls
    * vote
    * editPoll
    * indexBody -- Need to figure out the default view
    * login
    * newPoll
    * poll
    * pollComments
    * pollForm
    * pollResults
* Finish poll-form for new poll and edit poll
* Finish new poll setup and send
* Finish edit poll setup and send
  * Decide if edit resets all answers
* Add comment saving and loading
* Add ability for the user that created the comment to edit or delete the comment
* Comment versioning so users can see previous versions of a comment
* Account information page
  * Ability to de-register an account
    * Keep id but remove everything else and set a status of inactive
    * Will require changes to the login process
* Ability to see and manage your polls
* Ability to search polls
* Refactor everything to not be in a single server.js file
* Need to review the OAuth2 stuff to understand what it is doing
* Find other things that need to be done
* Review [forever](https://www.npmjs.com/package/forever) if I ever want to have the server stay up on codeanywhere