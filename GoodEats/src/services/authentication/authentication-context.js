import React, { useState, createContext } from "react";
import { LoginRequest, RegisterRequest, LogoutRequest } from "./authentication-service";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
                console.log("User logged in:", currUser)
            })
            .catch((err) => {
                setIsLoading(false)
                setError(err.toString())
            })
    };

    const onRegister = (email, password) => {
        setIsLoading(true)
        RegisterRequest(email, password)
            .then((currUser) => {
                setUser(currUser)
                setIsAuthenticated(true)
                setIsLoading(false)
                console.log("User registered:", currUser)
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

  //temp firebase testing
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     const auth = getAuth();
  //     signInWithEmailAndPassword(auth, "terry@gmail.com", "111111")
  //       .then((user) => {
  //         console.log('found user', user)
  //         setIsAuthenticated(true)
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       });
  //   },2000)
  // }, []);

  // if (!isAuthenticated) {
  //   return null
  // };