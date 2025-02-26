import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
    }

    const Logout = () =>{
        setLoading(true)
       return signOut(auth)
    }

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }


     useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log("Ovserbe inside the useeffecct", currentUser);
            setUser(currentUser);
            setLoading(false);
            
        })

        return () =>{
            unSubscribe()
        }
     },[])


    const authInfo = {user, loading, createUser, signInUser, googleLogin, Logout}

    return (

        <AuthContext.Provider value={authInfo}>

            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;