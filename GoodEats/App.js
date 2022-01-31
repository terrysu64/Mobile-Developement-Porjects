import React from 'react';
import { View, Text } from 'react-native';
import styled from "styled-components/native";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants-screen';
import { ThemeProvider } from "styled-components/native";
import { theme } from './src/infrastructure/theme';
import { useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato';

const Container = styled.View`
    flex: 1;
`;

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null
  };

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen/>
        <ExpoStatusBar style="auto"/>
      </ThemeProvider>
    </Container>
  );

};

