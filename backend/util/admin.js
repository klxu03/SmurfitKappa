const admin = require('firebase-admin');

// const firebaseConfig = {
//     apiKey: "AIzaSyB9gIb9AXpW49S2oIJHpf6_7XjYSGaQ8m0",
//     authDomain: "smurfitkappa-ee622.firebaseapp.com",
//     databaseURL: "https://smurfitkappa-ee622.firebaseio.com",
//     projectId: "smurfitkappa-ee622",
//     storageBucket: "smurfitkappa-ee622.appspot.com",
//     messagingSenderId: "434234577150",
//     appId: "1:434234577150:web:e6930321e3a1dddbfe15af",
//     measurementId: "G-H1NJNKPYN9"
// }

// admin.initializeApp(firebaseConfig);
admin.initializeApp();

const db = admin.firestore();

module.exports = { admin, db };