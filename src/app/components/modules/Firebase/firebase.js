import * as firebase from "firebase";
import "firebase/auth";
import config from '../../../../config/firebaseConfig';

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp