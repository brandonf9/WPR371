# WPR371
Web Programming 371 Weather API Project

## PROJECT SETUP STEPS ##

First, I created a GitHub Account, and set up a repository named WPR371 under the username brandonf9 (if required)

My directory is: 
C:\Users\User\Documents\Assignments and Projects\
WPR371 2023>
_Project>
__express>
__react>  

Run these commands to start a project, but should not be necessary since we are working in the same Git repo.

In VS Code Terminal:

    npm init
    npm install express --save

Paste this code into an app.js file inside the express folder:

    const express = require('express');
    const app = express();

    //Remove once proper code is done
    app.get('/', function (req, res) {
        res.send('Server test');
      });
    //End

    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
 
 
Run the server in the Terminal using this command:

    node app.js
    
    
GIT REPOSITORY:

Create GitHub Account,
Download GitHub here: https://desktop.github.com/
Download Git here: https://git-scm.com/download/win

COMMANDS FOR VS CODE TERMINAL: 

1. DOWNLOAD REPOSITORY:

clone -b master https://github.com/brandonf9/WPR371.git



