import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import  { CompactRestaurantInfo } from "../restaurants/compact-restaurant-info";

const FavouritesWrapper = styled.View`
    padding: 10px;
`;

const CompactRestaurantView = styled.View`
    margin-right: 10px;
`;

export const FavouritesBar = ({ favourites, navigateDetail }) => {
    if (favourites) {
        return (
            <FavouritesWrapper>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {favourites.map((restaurant) => {
                        const key = restaurant.name.split(" ").join("");
                        return (
                            <TouchableOpacity key={key} onPress={() => 
                            navigateDetail("RestaurantDetail", {restaurant})}>
                                <CompactRestaurantView key={key}>
                                    <CompactRestaurantInfo restaurant={restaurant}/>
                                </CompactRestaurantView>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </FavouritesWrapper>
        );
    };
    return null
};