FCC-Build a Voting App
=========================

Login and users add and updates is up.
Added basics of polls and pages

To run from codeanywhere use "nf run npm start"
--------------------------
Uses [node-forman](https://github.com/strongloop/node-foreman) to follow [this](https://support.glitch.com/t/what-changes-do-i-need-to-make-to-my-project-to-host-on-my-own-machine/1382/2) guide from glitch
Use npm install -g foreman

To run on windows
-----------------
These must be installed globally
* concurrently
* foreman
* nodemon
* typescript
* npm-windows-upgrade
  * Not sure this is actually needed | Will test

Will use angular, bootstrap, mongoDB, and either chart.js or d3.js for final product

TODO:

using [this](https://angular.io/tutorial/toh-pt4#inject-the-heroservice) to get basics of angular

* Lookup and use .gitignore !!!!!!!!!!!!!!!!!
* Focus on converting everything from pug to angular
  * Adjust angular routes and urls for what is already built
  * May need to run "tsc -p public/ --listEmittedFiles" when adding new components
  * pug to convert
    * polls
    * vote
    * indexBody -- Need to figure out the default view
    * login
    * poll
    * pollComments
    * pollForm  --- Come back to this once the poll voting is converted
      * editPoll
      * newPoll   ----------------------- Working on building the base html from pug
    * pollResults
* Finish poll-form for new poll and edit poll
  * reset vote counts when saving changes to a poll
* On app-nav make changes to navbarDropdown indicated in comments
* On app-nav change active area based upon routing (Stays on Home currently)
* Fix OAuth2 stuff once pug is converted
  * Learn more about angular and OAuth
  * Find out how to still 'connect' when testing offline on localhost
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
* Redo server routing to support manually entered URLs and refresh
* Refactor everything to not be in a single server.js file
* Need to review the OAuth2 stuff to understand what it is doing
* Find other things that need to be done
* Review [forever](https://www.npmjs.com/package/forever) if I ever want to have the server stay up on codeanywhere