import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// here is where I want to call the seed file (only ONCE!)

const config = {
  apiKey: "AIzaSyCJ85d8OJVlT0AGy7LhlxIM557SyWcit6I",
  authDomain: "instagram-clone-c0644.firebaseapp.com",
  projectId: "instagram-clone-c0644",
  storageBucket: "instagram-clone-c0644.appspot.com",
  messagingSenderId: "982685429159",
  appId: "1:982685429159:web:e42af4593627a50c109a82",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase)

export { firebase, FieldValue };
