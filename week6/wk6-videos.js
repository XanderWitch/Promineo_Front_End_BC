/* CHROME DEV TOOLS */

//Access by pressing F12 or right-click in Browser and selecting Inspect

// 1. Device Toggle
// Shows mobile and desktop version of your code; ensure good UX

// 2. Console Tab
// Shows console.log statement results, see errors, get to the root of problems, testing

// 3. Elements Tab
// Allows you to see the DOM (document object model) - everything on the page

// 4. Sources Tab
// Shows what is loaded in the current browser (e.g., "wk6-video.js")

// 5. Network Tab
// Shows requests that are being sent

// 6. Application Tab
// Can look at local storage (to see caches, key-value pairs; storing variables in the browser's memory for use later on, even when user closes browser)


/* DEBUGGING */

// There are tools to help us identify errors and fix them.

// How to do it with Chrome Dev Tools
// In sources, you can add a 'break point,' where code will stop running; step through the code line by line and check the values at each point. Just click on line number under Sources. Also, you can Step Into, Step Out of, and Step Over functions (buttons at top right of dev tool area).


/* UNIT TESTS: MOCHA AND CHAI */

//UNIT TESTING: the process of writing code to test our application code, specifically to test small pieces of functionality called units; safety net for our code's logic, so that the unit test will fail if a change causes a breakdown of the code

//Two most common testing frameworks for JS: Mocha and Chai

//Mocha - testing framework 

//Chai - assertion library

//Use Node Package Manager: install node.js (will include npm); run npm -version in CMD to verify

//Once npm is installed, you can use npm to install mocha and chai. Navigate to root directory of project, and use the following three commands: 
    //npm init
    //npm install mocha
    //npm install chai
//note that this will install some stuff in your project directory, including a directory named 'node modules'

//After you write your code, you need to write your unit test code to check your file. "happy path" - path you expect to work

//var chai = chai.expect (import chai expect method) to be able to call it

//read more on mocha and chai and how to run***


/* TEST-DRIVEN DEVELOPMENT */
//Write unit tests to reduce errors and breaking changes
//Modern methodology - write tests first; then code --> 'test-driven development', defining logic for the code in the unit test before writing the actual code

