import React, {useContext} from 'react';
import { StatusBar, View, FlatList, SafeAreaView} from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from "styled-components/native";
import { RestaurantCard } from '../components/restaurant-card.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants-context';
import { ActivityIndicator } from 'react-native-paper';

const SearchContinaer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

//using native styling system for this one specifically coz we're styling flatlist contents not the flatlist itself
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  },
})``;

const Container = styled.View`
  height: 100%;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantsScreen = () => {
  
  const { isLoading, error, restaurants} = useContext(RestaurantsContext);

  return (
  <Container>
    {isLoading && (
      <LoadingContainer>
        <Loading size={50} animating={true} color={'#e396d9'}/>
      </LoadingContainer>
    )}
    <SearchContinaer>
        <Searchbar placeholder="Search Restaurants 🍽"/>
    </SearchContinaer>
    <RestaurantList
      data={restaurants}
      renderItem={({item}) => {
        return <RestaurantCard restaurant={item}/>
      }}
      keyExtractor={(item) => item.name}
    />
  </Container>
  );

}
