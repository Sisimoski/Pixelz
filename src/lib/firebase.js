import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { functions } from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyChcDjawrTT_I4zBZNu-4TCgGfc-8rqJOM",
    authDomain: "pixelz-5a043.firebaseapp.com",
    projectId: "pixelz-5a043",
    storageBucket: "pixelz-5a043.appspot.com",
    messagingSenderId: "357784226060",
    appId: "1:357784226060:web:d72d92d4e251254b992129",
    measurementId: "G-05CSWTCELG"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
    try {
        auth.signInWithPopup(provider);
        alert("Zalogowano pomyślnie!")
        window.location = '/profile';
    } catch {

    }

};

export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { email, displayName } = user;
        try {
            await userRef.set({
                displayName,
                email,

                ...additionalData
            });
        } catch (error) {
            console.error("Error creating user document", error);
        }
    }
    return getUserDocument(user.uid);
};
const getUserDocument = async uid => {
    if (!uid) return null;
    try {
        const userDocument = await firestore.doc(`users/${uid}`).get();
        return {
            uid,
            ...userDocument.data()
        };
    } catch (error) {
        console.error("Error fetching user", error);
    }
};