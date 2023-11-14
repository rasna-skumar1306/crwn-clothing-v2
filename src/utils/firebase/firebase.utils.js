import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvouaVKjV1G0boocYg7-MO5p5PsyXVUZw",
  authDomain: "crwn-clothing-db-b6c78.firebaseapp.com",
  projectId: "crwn-clothing-db-b6c78",
  storageBucket: "crwn-clothing-db-b6c78.appspot.com",
  messagingSenderId: "366512081377",
  appId: "1:366512081377:web:33d8ee7ddbe88bb725aaa0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (err) {
      console.log("error creating the user", err.message);
    }
  }

  return userDocRef;
};
