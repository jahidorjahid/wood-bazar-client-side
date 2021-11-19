import initializeFirebase from "../components/Pages/Auth/Firebase/firebase.init";
import { useState, useEffect } from "react";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // register with email and password
  const registerUser = (email, password, name, history) => {
    // enable loader
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        toast.success("Account Created Successfully!");
        // save user to the database
        saveUser(email, name, "POST");
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            toast.error(error.message);
          });
        history.replace("/");
      })
      .catch((error) => {
        setAuthError(error.message);
        toast.error(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // login with email and password
  const loginUser = async (email, password, location, history) => {
    // enable loader
    setIsLoading(true);
    // processing to signin
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const destination = location?.state?.from || "/";
      history.replace(destination);
      setAuthError("");
      toast.success("Login Success!");
    } catch (error) {
      setAuthError(error.message);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Signin with Google
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setAuthError("");
        // upsert the user into database
        saveUser(user.email, user.displayName, "PUT");
        const destination = location?.state?.from || "/";
        history.replace(destination);
        toast.success("Welcome! " + user.displayName);
      })
      .catch((error) => {
        setAuthError(error.message);
        toast.error("Login Failed!");
      })
      .finally(() => setIsLoading(false));
  };

  // observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, [auth]);

  // check admin
  useEffect(() => {
    fetch(`https://woodbazar.herokuapp.com/api/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
        setIsLoading(false);
      });
  }, [user.email]);

  // logout method
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("Logged out success!");
      })
      .catch((error) => {
        // An error happened.
        toast.error("Login Failed!");
      })
      .finally(() => setIsLoading(false));
  };

  // save user to database
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://woodbazar.herokuapp.com/api/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    isLoading,
    setIsLoading,
    authError,
    signInWithGoogle,
    registerUser,
    loginUser,
    logout,
    admin,
  };
};

export default useFirebase;
