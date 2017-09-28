const functions = require('firebase-functions');

const technologies = [
    'C', 
    'C#'
];

exports.technologies = functions.https.onRequest((request, response) => {
    response.send(technologies);
});
