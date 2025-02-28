// services/firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();

// Subscribe to podcast
export const subscribeToPodcast = async (userId, podcastId) => {
  await db.collection('users').doc(userId).update({
    subscriptions: firebase.firestore.FieldValue.arrayUnion(podcastId)
  });
};