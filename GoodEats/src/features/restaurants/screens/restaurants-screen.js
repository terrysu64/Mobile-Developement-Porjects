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
  
  const { isLoading, error, restaurants} = useContext(RestaurantsContext);

  return (
  <View>
    <SearchContinaer>
        <Searchbar placeholder="Search Restaurants 🍽"/>
    </SearchContinaer>
    <RestaurantList
      data={restaurants}
      renderItem={({item}) => {
        console.log(item)
        return <RestaurantCard restaurant={item}/>
      }}
      keyExtractor={(item) => item.name}
    />
  </View>
  );

}
