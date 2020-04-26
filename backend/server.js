const app = require('express')();

const { uploadImage } = require('./handlers/post')

app.post('/image', uploadImage)