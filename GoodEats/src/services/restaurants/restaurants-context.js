import React, { useState, createContext, useEffect, useMemo } from "react";
import { restaurantsRequest, restaurantsTransform } from "./restaurants-service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {

    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveRestaurants = () => {

        setIsLoading(true);

        //setTimeout will be used as a callback for the async restaurantRequest function
        setTimeout(() => {
            restaurantsRequest()
                .then(restaurantsTransform)
                .then((result) => {
                    setIsLoading(false)
                    setRestaurants(result)
                })
                .catch((err) => {
                    setIsLoading(false)
                    setError(err)
                })
        }, 1000)

    };  

    useEffect(() => {
        retrieveRestaurants()
    }, []);

    //when we return our context provider value we can shorthand the object 
    return (
        <RestaurantsContext.Provider value = {{restaurants,isLoading,error}}> 
            {children}
        </RestaurantsContext.Provider>
    )
};