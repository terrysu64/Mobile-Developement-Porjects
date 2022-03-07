import React, { useContext } from "react";
import styled from "styled-components/native";
import { FontAwesome5 } from '@expo/vector-icons';
import { FavouritesContext } from "../../services/favourites/favourites-context";
import { TouchableOpacity } from "react-native";

const FavouriteButton = styled(TouchableOpacity)`
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
`;

export const Favourite = () => {
    
    const { favourites, addToFavourites, removeFromFavourites} = useContext(FavouritesContext);

    return (
        <FavouriteButton>
            <FontAwesome5 name="grin-hearts" size={24} color="red"/>
        </FavouriteButton>
    );
};