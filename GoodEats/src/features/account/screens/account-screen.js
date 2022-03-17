import React from "react";
import styled from "styled-components/native";

const AccountBackground = styled.ImageBackground.attrs({
    source: require("../../../../assets/account-background.jpg")
})`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const AccountCover = styled.View`
    position: absolute;
    height: 100%;
    width: 100%
    background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountScreen = () => {
    return (
        <AccountBackground>
            <AccountCover/>
        </AccountBackground>
    );
};