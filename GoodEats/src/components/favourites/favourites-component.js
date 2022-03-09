import React, { useContext } from "react";
import styled from "styled-components/native";
import { FontAwesome5 } from '@expo/vector-icons';
import { FavouritesContext } from "../../services/favourites/favourites-context";
import { TouchableOpacity } from "react-native";

const FavouriteButton = styled(TouchableOpacity)`
    position: absolute;
    top: 25px;
    right: 25px;
    z-index: 10;
`;

export const Favourite = ({ restaurant }) => {
    
    const { favourites, addToFavourites, removeFromFavourites} = useContext(FavouritesContext);
    const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);
    
    return (
        <FavouriteButton
            onPress={() => !isFavourite ? addToFavourites(restaurant) : removeFromFavourites(restaurant)}
        >
            <FontAwesome5 name="grin-hearts" size={24} color={isFavourite ? "red" : "white"}/>
        </FavouriteButton>
    );
};