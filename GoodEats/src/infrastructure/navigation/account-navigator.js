import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const LoginStack = createStackNavigator();

export const AccountNavigator = () => {
    return (
        <LoginStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <LoginStack.Screen name="AccountScreen" component={() => null}/>
            <LoginStack.Screen name="LoginScreen" component={() => null}/>
        </LoginStack.Navigator>
    )
};