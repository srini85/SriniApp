const functions = require('firebase-functions');

exports.technologies = require('./technology').technologies;

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});
