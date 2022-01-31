import React from 'react';
import { StatusBar, StyleSheet, View, SafeAreaView} from 'react-native';
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

const ListContainer = styled.View`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
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
