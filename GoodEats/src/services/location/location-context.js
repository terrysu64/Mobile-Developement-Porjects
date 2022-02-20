import React, { createContext, useState, useEffect } from "react";
import { locationRequest, locationTransform } from "./location-service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {

    const [keyword, setKeyword] = useState("toronto");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [location, setLocation] = useState(null);

    const onSearch = (searchKeyword) => {
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
    };

    useEffect(() => {
        onSearch(keyword)
    }, []);

    return (
        <LocationContext.Provider
            value = {{
                isLoading,
                error,
                location,
                search: onSearch,
                keyword,
            }}
        >
            {children}
        </LocationContext.Provider>
    );
};