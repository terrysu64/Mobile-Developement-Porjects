import React, {useContext} from 'react';
import { FlatList, Pressable } from 'react-native';
import styled from "styled-components/native";
import { RestaurantCard } from '../components/restaurant-card.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants-context';
import { ActivityIndicator } from 'react-native-paper';
import { SearchBar } from '../components/search-component';

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

export const RestaurantsScreen = ({ navigation }) => {

  const { isLoading, error, restaurants} = useContext(RestaurantsContext);
  
  return (
  <Container>
    {isLoading && (
      <LoadingContainer>
        <Loading size={50} animating={true} color={'#e396d9'}/>
      </LoadingContainer>
    )}
    <SearchBar/>
    <RestaurantList
      data={restaurants}
      renderItem={({item}) => {
        return (
          <Pressable onPress={() => navigation.navigate("RestaurantDetail")}>
            <RestaurantCard restaurant={item}/>
          </Pressable>
        )
      }}
      keyExtractor={(item) => item.name}
    />
  </Container>
  );

}
