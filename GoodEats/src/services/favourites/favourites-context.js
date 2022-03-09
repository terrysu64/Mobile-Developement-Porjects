import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
    
    const [favourites, setFavourites]= useState([]);

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