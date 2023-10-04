// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
