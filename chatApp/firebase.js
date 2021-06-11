import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyBZLeGp_gRfDpLHuriyq8mWs37DEfVL7EA",
  authDomain: "gifted-chat-8be3e.firebaseapp.com",
  projectId: "gifted-chat-8be3e",
  storageBucket: "gifted-chat-8be3e.appspot.com",
  messagingSenderId: "124901009717",
  appId: "1:124901009717:web:87d901678cf6b20e6f447c"
};

let app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
