import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDbkxUQnZP4i776rGi5fP30qKwjzN0uWQA",
	authDomain: "blogs-app-8d983.firebaseapp.com",
	projectId: "blogs-app-8d983",
	storageBucket: "blogs-app-8d983.appspot.com",
	messagingSenderId: "335521253405",
	appId: "1:335521253405:web:587d5e7753f2c73dbb1ef4",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
