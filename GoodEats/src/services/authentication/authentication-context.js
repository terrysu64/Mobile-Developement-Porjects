import React, { useState, createContext } from "react";
import { LoginRequest, RegisterRequest, LogoutRequest } from "./authentication-service";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {getFirestore,doc,setDoc} from 'firebase/firestore/lite'

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const auth = getAuth();
    onAuthStateChanged(auth, (currUser) => {
        if (currUser) {
          setUser(currUser)
          setIsAuthenticated(true)
        } 
        setIsLoading(false)
      });

    const resetError = () => {
        setError(null);
    };

    const onLogin = (email, password) => {
        setIsLoading(true);
        LoginRequest(email, password)
            .then((currUser) => {
                setUser(currUser)
                setIsAuthenticated(true)
                setIsLoading(false)
                console.log("User logged in:", currUser.user.uid)
            })
            .catch((err) => {
                setIsLoading(false)
                setError(err.toString())
            })
    };

    const onRegister = (email, password) => {
        const db = getFirestore()
        setIsLoading(true)
        RegisterRequest(email, password)
            .then((currUser) => {
                setUser(currUser)
                setIsAuthenticated(true)
                setDoc(doc(db, "favourites", currUser.user.uid), {
                    restaurants: []
                });
                setIsLoading(false)
                console.log("User registered:", currUser.user.uid)
            })
            .catch((err) => {
                setIsLoading(false)
                setError(err.toString())
            })
    };

    const onLogout = () => {
        setIsLoading(true)
        LogoutRequest()
            .then(() => {
                console.log("User logged out:", user.uid)
                setIsLoading(false)
                setUser(null)
                setIsAuthenticated(false)
            })
            .catch((err) => {
                console.log('Logout Error:', err)
            })
    };

    return (
        <AuthenticationContext.Provider
            value={{
                user,
                isAuthenticated,
                isLoading,
                error,
                onLogin,
                onRegister,
                onLogout,
                resetError,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};


