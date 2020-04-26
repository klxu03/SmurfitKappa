const functions = require('firebase-functions');
const app = require('express')();

const { admin, db } = require('./util/admin');

const { signup, login, uploadImage } = require('./handlers/stores')

//FB (FireBase) authentication middleware
const FBAuth = (req, res, next) => {
    let idToken;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        idToken = req.headers.authorization.split('Bearer ')[1];
    } else {
        console.error('No token found');
        return res.status(403).json({ error: 'Unauthorized '});
    }

    admin.auth().verifyIdToken(idToken)
        .then(decodedToken => {
            req.user = decodedToken;
            console.log('Decoded token', decodedToken);
            return db.collection('stores')
                .where('userId', '==', req.user.uid)
                .limit(1)
                .get()
        })
        .then(data => {
            req.user.handle = data.docs[0].data().handle;
        })
}

// Store routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);

exports.api = functions.region('us-east4').https.onRequest(app);