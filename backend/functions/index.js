const functions = require('firebase-functions');
const app = require('express')();

//Store handler code
const { signup, login, uploadImage } = require('./handlers/stores')

//FB (FireBase) authentication middleware
const FBAuth = require('./util/fbAuth'); 

// Store routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/store/image', FBAuth, uploadImage);

exports.api = functions.region('us-east4').https.onRequest(app);