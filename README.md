# amat

Project which includes creating an angular app with material design using Angular 7 and angular-material.


Installation
Prerequisites

The following instructions allow you to run a local copy on your machine.

Install tools

1. If you have not yet installed nodejs, please Download and globally install nodejs : https://nodejs.org
Note: download Recommended For Most Users version

2. Now Simply install Typings globally by running the command "npm install -g typings" and wait for npm to do the dirty work.

Note: Make sure you have Node version >= 4.0 and NPM >= 3 . 

3. Also globally installed typescript by running command "npm install -g typescript"

4. Installing Angular-CLI globally is as simple as running this simple command: 
npm install -g @angular/cli@latest

5. After the tools is installed, go inside of the template directory and install dependencies:

Run "npm install" to install node dependencies defined in package.json.



Running local copy

To run a local copy in development mode, execute ng serve and go to http://localhost:4200 in your browser. Use "ng serve -o" to also open browser automatically.


Deploying project output on server : 
1. To run the local copy in production mode and build the sources, execute "ng build --prod". This will build a production version of the application. All html,css and js code is minified and put to dist folder.
2. Copy the content of "/dist" folder and upload on the server.
