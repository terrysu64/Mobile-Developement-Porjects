import React from 'react';
import { View, Text } from 'react-native';
import styled from "styled-components/native";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants-screen';

const Container = styled.View`
    flex: 1;
`;

export default function App() {

  return (
    <Container>
      <RestaurantsScreen/>
      <ExpoStatusBar style="auto"/>
    </Container>
  );

};

