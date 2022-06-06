import React, { createContext, useState } from "react";
import { locationRequest, locationTransform } from "./location-service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {

    const [keyword, setKeyword] = useState("toronto");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [location, setLocation] = useState(null);

    const OnSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword.toLowerCase());
        locationRequest(searchKeyword)
        .then(locationTransform)
        .then(result => {
            setIsLoading(false)
            setLocation(result)
        }) 
        .catch((error) => {
            setIsLoading(false)
            setError(error)
        })
        console.log(location)
    };

    return (
        <LocationContext.Provider
            value = {{
                isLoading,
                error,
                location,
                keyword,
                search: OnSearch
            }}
        >
            {children}
        </LocationContext.Provider>
    );
}; 