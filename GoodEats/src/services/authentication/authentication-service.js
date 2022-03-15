import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const LoginRequest = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
};