import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
    
    const [favourites, setFavourites]= useState([]);

    const saveFavourites = async (restaurant) => {
        try {
          const jsonValue = JSON.stringify(restaurant)
          await AsyncStorage.setItem('@favourites', jsonValue)
        } 
        catch (error) {
          console.log("error storing favourites", error)
        }
    };
    
    useEffect(() => {
        saveFavourites(favourites)
    }, [favourites]);

    const getFavourites = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@favourites')
          setFavourites(jsonValue !== null ? JSON.parse(jsonValue) : [])
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