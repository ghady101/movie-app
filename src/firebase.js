// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCOrpJlR8muxk3WQBrS9907F2VRm-iZhYs',
	authDomain: 'netflix-b7a4a.firebaseapp.com',
	projectId: 'netflix-b7a4a',
	storageBucket: 'netflix-b7a4a.appspot.com',
	messagingSenderId: '650994617938',
	appId: '1:650994617938:web:2e2948e3e407519620d98b',
	measurementId: 'G-G32Q0EMVW9',
};

// Initialize Firebase, auth, db
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth };
export default db;
