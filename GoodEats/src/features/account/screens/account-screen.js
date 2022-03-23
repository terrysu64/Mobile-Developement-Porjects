import React, { useContext, useEffect } from "react";
import LottieView from  "lottie-react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication-context";
import {    
        AccountBackground, 
        AccountContainer, 
        LoginButton, 
        RegisterButton,
        Title,
        TerryText,
        AccountCover,
        AnimationWrapper, 
        } from "../components/account-styles";

export const AccountScreen = ({ navigation }) => {
    
    const { isAuthenticated, resetError } = useContext(AuthenticationContext);
    
    useEffect(() => {
        foodAnimation.play()
    },[]);

    useEffect(() => {
        foodAnimation.play()
    },[isAuthenticated]);

    return (
        <AccountBackground>
            <AnimationWrapper>
                <LottieView
                    ref={animation => {foodAnimation=animation}}
                    autoPlay
                    loop
                    resizeMode="cover"
                    source={require("../../../../assets/food-animation.json")}
                />
            </AnimationWrapper>
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

