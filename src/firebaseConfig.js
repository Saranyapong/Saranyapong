import Firebase from 'firebase'

/* Firebase configuration */
let config = {
    apiKey: "AIzaSyAR7L20koYwRXFvuE5aD-5Zvza-4vca5zY",
    authDomain: "vue-firebase-tutorial-7c4d1.firebaseapp.com",
    databaseURL: "https://vue-firebase-tutorial-7c4d1.firebaseio.com",
    projectId: "vue-firebase-tutorial-7c4d1",
    storageBucket: "vue-firebase-tutorial-7c4d1.appspot.com",
    messagingSenderId: "487359493291"
};

const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();

export {firebaseApp, db};