########################## Spreadsheet-App
!!~~~~~~In browser spreadsheet application

This application seeks to recreate popular spreadsheet applications in the browser.


**STARTING THE APP**
1. Fork and clone this repo to your preferred location.
2. Run ```npm start``` to initialize the app.


**NAVIGATING**
1. The grid is divided into 41 rows and 27 columns, including title row and column.
2. Users can use their mouse or arrow-keys to select tiles on the grid.
3. Tiles in title rows are not selectable.


**TESTING**
1. Tests can be accessed by installing Mocha, Chai, and Karma. This can be done with ```npm install --save-dev karma mocha chai karma-mocha karma-chai karma-chrome-launcher karma-mocha-reporter```.
2. To run the test suite use ```npm test```.
