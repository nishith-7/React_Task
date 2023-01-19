# Node js task

// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

/* 
Some of the below links are not valid, means they are returning a 404 response. 
Write a script to create two groups of the links, one with the active and another with the inactive links and log both of them at the end once we've identified all the links.
*/

const request = require('request');

const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/posts/59",
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts/178",
  "https://jsonplaceholder.typicode.com/comments",
  "https://jsonplaceholder.typicode.com/users/987",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/todos/967",
  "https://jsonplaceholder.typicode.com/comments/732",
  "https://jsonplaceholder.typicode.com/photos",
  "https://jsonplaceholder.typicode.com/todos",
  "https://jsonplaceholder.typicode.com/photos/800"
];
