import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAB8ZNLYQ4SZw9AiE8D1uaXaAgy7H0r9po",
    authDomain: "parrain-orphelin.firebaseapp.com",
    databaseURL: "https://parrain-orphelin.firebaseio.com",
    projectId: "parrain-orphelin",
    storageBucket: "parrain-orphelin.appspot.com",
    messagingSenderId: "194725904318",
    appId: "1:194725904318:web:c4eaffd198dd7afa18c3ef",
    measurementId: "G-3DSBTTKF13"
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);
      //import 'firebase/auth';
    }

    // *** Auth API *** 
    
    //sign up function
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    //login function
    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    //logout function
    doSignOut = () => this.auth.signOut();

    //functions to manage passwords 
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    
    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
  }
  export default Firebase;