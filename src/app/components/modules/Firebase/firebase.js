import app from 'firebase/app';
import 'firebase/auth';

import config from '../../../../config/firebaseConfig'

class Firebase {
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth();
    }

    // auth api
    createUser = (email, password) => {
      this.auth.createUserWithEmailAndPassword(email, password);
    };

    loginUser = (email, password) => {
      this.auth.signInWithEmailAndPassword(email, password);
    };

    signoutUser = () => this.auth.signOut();
    passwordReset = email => this.auth.sendPasswordResetEmail(email);
    passwordUpdate = password => this.auth.currentUser.updatePassword(password);

  }
   
  export default Firebase;