import React, { createContext, useContext, useState, useEffect } from "react";
import { AuthenticationContext } from "../authentication/authentication-context";
import {getFirestore,getDoc,doc,setDoc} from 'firebase/firestore/lite'

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {

    const db = getFirestore()
    const { user } = useContext(AuthenticationContext);
    const [favourites, setFavourites]= useState([]);

    const saveFavourites = async () => {
        try {
          await setDoc(doc(db, "favourites", user.uid), {
            restaurants: favourites
          });
        } 
        catch (error) {
          console.log("error storing favourites", error)
        }
    };
    
    useEffect(() => {
        saveFavourites()
    }, [favourites]);

    const getFavourites = async () => {
        try {
          getDoc(doc(db, "favourites", user.uid)).then(docSnap => {
            if (docSnap.exists()) {
              setFavourites(docSnap.data().restaurants);
            }})
        } 
        catch(error) {
          console.log("error loading favourites", error)
        }
      };
    
    useEffect(() => {
      getFavourites()
    },[]);

    const Add = (restaurant) => {
        setFavourites([...favourites, restaurant])
    }; 

    const Remove = (restaurant) => {
        const tempFavourites = favourites.filter((curr) => curr.placeId !== restaurant.placeId)
        setFavourites(tempFavourites)
    };

    return (
        <FavouritesContext.Provider value={{favourites,addToFavourites: Add, removeFromFavourites: Remove}}>
            {children}
        </FavouritesContext.Provider>
    )
};