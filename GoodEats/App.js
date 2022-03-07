import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from "styled-components/native";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from "styled-components/native";
import { theme } from './src/infrastructure/theme';
import { useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants-context';
import { LocationContextProvider } from './src/services/location/location-context';
import { AppNavigator } from './src/infrastructure/navigation/app-navigator';
import { FavouritesContextProvider } from './src/services/favourites/favourites-context';

//Note: StatusBar.currentHeight only exists on Android
const SafeArea = styled(SafeAreaView)`
  height: 100%;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}; 
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
    <>
      <SafeArea>
        <ThemeProvider theme={theme}>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <AppNavigator/>
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </ThemeProvider>
        <ExpoStatusBar style="auto"/>
      </SafeArea>
    </>
  );

};

