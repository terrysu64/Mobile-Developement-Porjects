import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../features/account/screens/account-screen";
import { LoginScreen } from "../../features/account/screens/login-screen";
import { RegisterScreen } from "../../features/account/screens/register-screen";

const LoginStack = createStackNavigator();

export const AccountNavigator = () => {
    return (
        <LoginStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <LoginStack.Screen name="AccountScreen" component={AccountScreen}/>
            <LoginStack.Screen name="LoginScreen" component={LoginScreen}/>
            <LoginStack.Screen name="RegisterScreen" component={RegisterScreen}/>
        </LoginStack.Navigator>
    )
};