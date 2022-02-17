import React, {useContext} from 'react';
import { StatusBar, View, FlatList, SafeAreaView} from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from "styled-components/native";
import { RestaurantCard } from '../components/restaurant-card.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants-context';

const SearchContinaer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  },
})``;

export const RestaurantsScreen = () => {
  
  //testing if API data was transformed into react context
  const restaurantContext = useContext(RestaurantsContext);
  console.log(restaurantContext)

  return (
  <View>
    <SearchContinaer>
        <Searchbar placeholder="Search Restaurants 🍽"/>
    </SearchContinaer>
    <RestaurantList
      data={restaurantContext.restaurants}
      renderItem={() => <RestaurantCard/>}
      keyExtractor={(item) => item.name}
    />
  </View>
  );

}
