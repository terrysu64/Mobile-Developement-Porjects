import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication-context";
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
    
    const { resetError } = useContext(AuthenticationContext);
    
    return (
        <AccountBackground>
            <AccountCover/>
            <Title>GoodEats</Title>
            <AccountContainer>
                <LoginButton onPress = {() => {
                    navigation.navigate("LoginScreen")
                    resetError()
                }}>
                    Login
                </LoginButton>
                <RegisterButton onPress = {() => {
                    navigation.navigate("RegisterScreen")
                    resetError()
                }}>
                    Register
                </RegisterButton>
            </AccountContainer>
            <TerryText>Made By: Terry Su</TerryText>
        </AccountBackground>
    );
};

