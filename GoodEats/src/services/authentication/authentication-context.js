import React, { useState, createContext } from "react";
import { LoginRequest } from "./authentication-service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const onLogin = (email, password) => {
        setIsLoading(true);
        LoginRequest(email, password)
            .then((currUser) => {
                setUser(currUser)
                setIsLoading(false)
                console.log(user)
            })
            .catch((err) => {
                setIsLoading(false)
                setError(err)
            })
    };

    return (
        <AuthenticationContext.Provider
            value={{
                user,
                isLoading,
                error,
                onLogin,
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