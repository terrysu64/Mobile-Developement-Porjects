import React from "react";
import {    
        AccountBackground, 
        AccountCover, 
        AccountContainer, 
        LoginButton, 
        RegisterButton 
        } from "../components/account-styles";

export const AccountScreen = () => {
    return (
        <AccountBackground>
            <AccountCover/>
            <AccountContainer>
                <LoginButton>Login</LoginButton>
                <RegisterButton>Register</RegisterButton>
            </AccountContainer>
        </AccountBackground>
    );
};

