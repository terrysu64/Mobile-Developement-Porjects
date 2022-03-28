import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { FavouritesContext } from "../../../services/favourites/favourites-context";
import { TouchableOpacity } from "react-native";
import { RestaurantCard } from "../../restaurants/components/restaurant-card.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
    width: 100%;
`;

const FavouritesContainer = styled.View`
    justify-content: center;
    align-items: center;
`;

const NoFavouritesText = styled.Text`
    text-align: center;
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.title};
    font-weight: bold;
    top: 50%;
`;

export const FavouritesScreen = () => {

    const { favourites } = useContext(FavouritesContext);
    
    if (favourites.length) {
        return (
            <FavouritesContainer>
                <RestaurantList
                    data={favourites}
                    renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("RestaurantDetail", {
                                restaurant: item,
                                })
                            }
                        >
                            <RestaurantCard restaurant={item} />
                        </TouchableOpacity>
                    );
                    }}
                    keyExtractor={(item) => item.name}
                />
            </FavouritesContainer>
        )
    }
    else {
        return <NoFavouritesText>No favourites yet. Go explore some restaurants 😁</NoFavouritesText>
    };
};