import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import styled from "styled-components/native";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants-screen';
import { ThemeProvider } from "styled-components/native";
import { theme } from './src/infrastructure/theme';
import { useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants-context'

//Note: StatusBar.currentHeight only exists on Android
const SafeArea = styled(SafeAreaView)`
  height: 100%;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}; 
`;

const Tab = createBottomTabNavigator();

//settings + map under construction
const Settings = () => <Text>settings</Text>
const Map = () => <Text>map</Text>


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
          <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  if (route.name === 'Restaurants') {
                    return <Ionicons name={'md-fast-food'} size={size} color={color}/>
                  } 
                  else if (route.name === 'Map') {
                    return <FontAwesome5 name="map-marked-alt" size={size} color={color}/>
                  }
                  else if (route.name === 'Settings') {
                    return <MaterialIcons name="app-settings-alt" size={size} color={color} />
                  }
                },
                tabBarActiveTintColor: '#e396d9',
                tabBarInactiveTintColor: 'gray',
              })}
            >
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
          </RestaurantsContextProvider>
        </ThemeProvider>
        <ExpoStatusBar style="auto"/>
      </SafeArea>
    </>
  );

};

