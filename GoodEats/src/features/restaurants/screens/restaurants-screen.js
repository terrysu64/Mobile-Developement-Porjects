import React from 'react';
import { StatusBar, View, FlatList, SafeAreaView} from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from "styled-components/native";
import { RestaurantCard } from '../components/restaurant-card.component';

const SearchContinaer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  },
})``;


export const RestaurantsScreen = () => {

    return (
    <View>
      <SearchContinaer>
          <Searchbar placeholder="Search Restaurants 🍽"/>
      </SearchContinaer>
      <RestaurantList
        data={[{name:1},{name:2},{name:3},{name:4}]}
        renderItem={() => <RestaurantCard/>}
        keyExtractor={(item) => item.name}
      />
    </View>
    );
}
