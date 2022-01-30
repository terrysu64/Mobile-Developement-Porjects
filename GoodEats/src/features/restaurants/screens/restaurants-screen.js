import React from 'react';
import { StatusBar, StyleSheet, View, SafeAreaView} from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from "styled-components/native";
import { RestaurantCard } from '../components/restaurant-card.component';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContinaer = styled.View`
  padding: 16px;
`;

const ListContainer = styled.View`
  background-color: blue;
  flex: 1;
  padding: 16px;
`;

export const RestaurantsScreen = () => {

    return (
    <>
        <SafeArea >
          <SearchContinaer>
              <Searchbar placeholder="Search Restaurants 🍽"/>
          </SearchContinaer>
          <ListContainer>
              <RestaurantCard/>
          </ListContainer>
        </SafeArea>
    </>
    );
}
