## questions
* incomplete work time
* display branch in working dir
* knex testing
* close garage door
* how did elias find what he found?
* port proxy
* what endpoints to prioritize
* how to do auth with postgres

## next steps
first priority: getting timer to display, and upon completion, updates the backend
implemenet joe's sessions solution
user creation endpoint doesn't accommodate non-required fields
getting sessions by user id, order by doesn't work
adding time in postgres
7. during breaks, update glossary/notebook
8. user sign up page
9. responsive design

## backend capstone things to fix, or apply next time
* he said this could be a portfolio project!!!
* router
  * /albums
  * /users
  * /genre
* split tests into other files
  * albums.test.js
* in folder albums, make folders by feature
  * modules
  * routes
  * test
* comments for each server endpoint
  * @params
  * description
  * detailed comments
* move dist to public
* move index.html to public
* remove views
* remove express static dist
* copy contents of dist into public
  * express's static public means that the first file it looks at it is in public
  * can get rid of static dist
* index.html into public
* results of a build system go in the dist folder
* clickng submit deosn't do anything when it's blank
* get rid of root endpoint
* store readme stuff in a docs folder
* github pinned repository for profile
* backend project can be a portfolio with the cleanup
* README for live version
* most of the root files should go away and be put into a user folder
  * scripts folder
    * put in arrayize, seeder, etc.
* remove the dev password from the seeder
* .ts allows you catch errors while compiling, before runtime
* dotenv allows you to set all your env stuff in a separate file which you don't have to push to github
```
let dotenv = require('dotenv'); if (dotenv) dotenv.config();
```
put it at top of config file
* what is env?
  * it can be your computer
  * or mobile, android, or iOS
  * for each env you can set variables
    * export KRIS=123
    * echo $KRIS will be 123
* mario mol we can talk about it again

## capstone
* use the things from mario's session
* comments for functions
* documentation
  * draw pic of what xyz should look like
  * text, what it should have
  * play around with finding the right team dynamic
* unit and integration tests
* RESTful
  * model 
  * CRUD
* async/await?
* each of us works on a per feature basis
* what's our basic data model?
* responsive mobile first design, postgres?
  * fluid
* git rebase branch-to-rebase-off-of
  * git push --force
* develop on a per feature basis
* bare minimum ui until wednesday
* features
  * set work time length
  * set break time length
  * set number of intervals, or auto-divide intervals based on max time
  * start timer
  * stop timer
  * skip interval
  * notifications/sound for each
    * try to stick to curric, don't reach until after wednesday
  * save on/off settings somewhere, per user
  * user page
    * previous timers view
    * click on a 'project' to go to timer view
    * resume, or start new?
    * delete projects
    * rename projects
* techs to not forget
  * express router
  * fetch
  * ci, heroku
    * mocha, chai, chaihttp
  * tests for front and back end