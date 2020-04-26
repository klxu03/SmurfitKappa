const functions = require('firebase-functions');
const app = require('express')();

const {admin, db} = require('./util/admin');

const { signup, uploadImage } = require('./handlers/stores')

// Store routes
app.post('/signup', signup)
app.post('/user/image', uploadImage)

exports.getStores = functions.https.onRequest((req, res) => {
    db.collection('stores').get()
        .then(data => {
            let stores = [];

            data.forEach(doc => {
                stores.push(doc.data())
            })

            return res.json(stores);
        })
        .catch (err => console.error(err));
});

exports.api = functions.region('us-east4').https.onRequest(app);