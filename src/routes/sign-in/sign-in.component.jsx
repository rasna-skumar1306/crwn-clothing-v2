import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const lgoGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return <h1 onClick={lgoGoogleUser}>SignIn</h1>;
};

export default SignIn;
