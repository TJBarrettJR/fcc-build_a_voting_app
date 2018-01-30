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
    * indexBody -- Need to figure out the default view
      * polls - bootstrap cards
        * check if user created is current user and add an edit button if so
        * this will also go to the MyPolls and MyVotes pages
    * login
    * poll
      * pollComments
      * pollResults
      * vote
* Finish poll-service
  * BIG TODO: should vote have its own service?
    * Front end data can be used as is for the poll but need to create a vote object as well
    * Back end would need to split vote and poll data
      * How does that affect performance for MONGO vs having all voting data kept in an array
        * think about votes by user and votes by poll differences
        * do front end models need to match back end?
        * create a chart for this of the two mappings
  * check user credentials for add/delete/edit of polls/votes
  * add vote
  * edit vote
  * delete vote
  * add poll
  * edit poll
  * delete poll
    * decide between delete, deactivate, and archive?
      * delete - never get back
      * deactivate - still shows and searchable to anyone but no voting
      * archive - not shown or searchable to even the owner
        * would need to build the ability to find this for the owner and unarchive
        * decide how voting works with this
          * can users still 'see' that they voted but nothing else?   
      * maybe let user decide
  * Public/Private/secured poll
    * public - anyone can see/search/vote
    * private - anyone can see/vote but can not search or find it naturally
      * owner would need to provide url and it can be shared at will of anyone
    * secured - owner needs to create a 'phrase' for individuals to unlock (Group phrase)
      * can only find with owner provided url
      * users can only view poll information or vote by entering phrase
      * owner can change phrase with options to reset votes or keep votes
        * with reset votes users that previously entered the phrase will need the new one
        * with keep votes users that previously had the phrase entered can change vote and view info
          * new phrase is not exposed to those already registered
          * users not yet registered will need the new phrase
* Finish poll-form for new poll and edit poll
  * reset vote counts when saving changes to a poll
* Adjust poll-view
  * Add userId to comment model
  * Adjust html to check for userId instead of displayName
* On app-nav make changes to navbarDropdown indicated in comments
* On app-nav change active area based upon routing (Stays on Home currently)
* Fix user-info
  * This should be a sub-page (routing?) of an overall settings page
    * Looking at a bootstrap nav in a tab style with the content under that
  * Options (adjust main nav as well for these)
    * Account Info (user-info)
      * Add logout to this and main nav
    * My Polls
    * My Votes
* Adjust where JS file outputs go and may need to add html into that folder
  * Can add to .gitignore once completed to reduce upload/download size
* Restructure project
  * have models, mocks, and services folders
  * Should sub-components be inside of the component folder?
  * Do more research on Angular project structure
* Fix OAuth2 stuff once pug is converted
  * Maybe change how it works and allow the user to select their own values??
  * Learn more about angular and OAuth
  * Find out how to still 'connect' when testing offline on localhost | View passportjs site
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