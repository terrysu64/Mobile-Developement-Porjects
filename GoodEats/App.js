import React from 'react';
import { View, Text } from 'react-native';
import styled from "styled-components/native";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants-screen';
import { ThemeProvider } from "styled-components/native";
import { theme} from './src/infrastructure/theme/index';

const Container = styled.View`
    flex: 1;
`;

export default function App() {

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen/>
        <ExpoStatusBar style="auto"/>
      </ThemeProvider>
    </Container>
  );

};

