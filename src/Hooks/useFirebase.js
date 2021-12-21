import { useEffect, useState } from "react";
import initializeAuth from "../Firebase/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

initializeAuth();
const useFirebase = () => {
  const [user, setUser] = useState();

  const auth = getAuth();

  const logingWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  const loginWithUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  //observe user State change;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribe;
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return {
    user,
    logingWithGoogle,
    logOut,
    createUser,
    loginWithUser,
  };
};

export default useFirebase;
