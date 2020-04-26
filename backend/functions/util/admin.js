const admin = require('firebase-admin');

const serviceAccount = require("./key/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://smurfitkappa-4631e.firebaseio.com"
  });

const db = admin.firestore();

module.exports = { admin, db };