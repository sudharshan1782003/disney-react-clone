import React, { useContext } from "react"
import { createContext } from "react"
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut as firebaseSignOut
} from "firebase/auth"
import {auth} from "./UseAuth.js"


const UseUsercontext= createContext();


export function UsercontextProvider({ children }) {
    const [User, setUser] = React.useState("");

    function Register(email,password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function Loggedin(Loginemail, Loginpassword) {
       return signInWithEmailAndPassword(auth, Loginemail, Loginpassword)
    }
    function signOut() {
        return firebaseSignOut(auth);
      }
    
    React.useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser);
        });
        return () => {
            unSubscribe();
        };
    }, []);
    return <UseUsercontext.Provider value={{ User, Register,  Loggedin, signOut}}>{children}</UseUsercontext.Provider>


}


export function UserAuth() {
    return useContext(UseUsercontext);
}




