// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDAZbSOai8uDZMlmczJ-vqbBzwEoiGaLQ0',
	authDomain: 'crwn-db-4545f.firebaseapp.com',
	projectId: 'crwn-db-4545f',
	storageBucket: 'crwn-db-4545f.appspot.com',
	messagingSenderId: '687466359187',
	appId: '1:687466359187:web:36b2ea9a1735f2a6aaa066',
	measurementId: 'G-KPMDVKW73V'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

 const google = () => {
	const provider = new GoogleAuthProvider();
	signInWithPopup(auth, provider);
};

export const signInWithGoogle = async () => {
	try {
		await google();
	} catch (err) {
		console.log(err);
	}
};
