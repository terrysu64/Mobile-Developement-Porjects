import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication-context";
import { 
        AccountBackground, 
        AccountContainer, 
        AccountCover, 
        AuthInput, 
        ErrorText, 
        LoginButton, 
        TerryText, 
        BackButton,
        Title } from "../components/account-styles";

export const LoginScreen = ({ navigation }) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, error} = useContext(AuthenticationContext);

    return (
        <AccountBackground>
            <AccountCover/>
            <Title>GoodEats</Title>
            <AccountContainer>
                <AuthInput
                    label="E-mail"
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(u) => setEmail(u)}
                />
                <AuthInput
                    label="Password"
                    value={password}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    secure
                    onChangeText={(p) => setPassword(p)}
                />
                {error && (
                    <ErrorText>{error}</ErrorText>
                )}
                <LoginButton onPress={() => onLogin(email, password)}>Login</LoginButton>
            </AccountContainer>
            <BackButton onPress={() => navigation.goBack()}>Back</BackButton>
            <TerryText>Made By: Terry Su</TerryText>
        </AccountBackground>
    );
};