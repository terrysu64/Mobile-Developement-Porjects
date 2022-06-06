import React, { useState, createContext, useEffect, useContext } from "react";
import { restaurantsRequest, restaurantsTransform } from "./restaurants-service";
import { LocationContext } from "../location/location-context";

export const RestaurantsContext = createContext(); 

export const RestaurantsContextProvider = ({ children }) => {

    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location, keyword } = useContext(LocationContext);

    const retrieveRestaurants = (keyword) => {

        setIsLoading(true);
        setRestaurants([]);

        //setTimeout will be used as a callback for the async restaurantRequest function
        setTimeout(() => {
            restaurantsRequest(keyword)
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
        console.log('location has been changed')
        if (location) {
            retrieveRestaurants(keyword)
        };
    }, [location]);

    //when we return our context provider value we can shorthand the object 
    return (
        <RestaurantsContext.Provider value = {{restaurants,isLoading,error}}> 
            {children}
        </RestaurantsContext.Provider>
    )
};