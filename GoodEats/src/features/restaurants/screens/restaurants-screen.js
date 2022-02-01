import React from 'react';
import { StatusBar, FlatList, SafeAreaView} from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from "styled-components/native";
import { RestaurantCard } from '../components/restaurant-card.component';

//Note: StatusBar.currentHeight only exists on Android
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}; 
`;

const SearchContinaer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;


export const RestaurantsScreen = () => {

    return (
    <>
        <SafeArea >
          <SearchContinaer>
              <Searchbar placeholder="Search Restaurants 🍽"/>
          </SearchContinaer>
          <FlatList
            data={[{name:1},{name:2},{name:3},{name:4}]}
            renderItem={() => <RestaurantCard/>}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ padding: 16}}
          />
        </SafeArea>
    </>
    );
}
