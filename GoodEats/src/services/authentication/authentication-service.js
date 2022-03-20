import React from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";

export const LoginRequest = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
};

export const RegisterRequest = (email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
};