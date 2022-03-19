import React from "react";
import {    
        AccountBackground, 
        AccountCover, 
        AccountContainer, 
        LoginButton, 
        RegisterButton,
        Title,
        TerryText 
        } from "../components/account-styles";

export const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackground>
            <AccountCover/>
            <Title>GoodEats</Title>
            <AccountContainer>
                <LoginButton onPress = {() => navigation.navigate("LoginScreen")}>
                    Login
                </LoginButton>
                <RegisterButton onPress = {() => navigation.navigate("RegisterScreen")}>
                    Register
                </RegisterButton>
            </AccountContainer>
            <TerryText>Made By: Terry Su</TerryText>
        </AccountBackground>
    );
};

