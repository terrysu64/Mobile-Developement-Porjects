import React from "react";
import { RestaurantCard } from "../components/restaurant-card.component";

//RestaurantDetailScreen has already been defined as a stack navigation route in restaurant-navigator.js
export const RestaurantDetailScreen = ({ route }) => {
    const { restaurant } = route.params;
    return (
        <RestaurantCard restaurant={restaurant}/>
    );
};