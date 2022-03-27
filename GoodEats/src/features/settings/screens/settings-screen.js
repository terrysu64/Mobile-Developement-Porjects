import React, { useContext } from "react";
import { List } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication-context";
import styled from "styled-components/native";

const StyledListItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

export const SettingsScreen = () => {

    const { onLogout } = useContext(AuthenticationContext);

    return  (
        <List.Section>
            <StyledListItem
            style={{ padding: 16 }}
            title="Favourites"
            description="Check out your favourite restaurants"
            left={(props) => <List.Icon {...props} color="black" icon="heart-outline" />}
            onPress={() => navigation.navigate("Favourites")}
            />
            <StyledListItem
            style={{ padding: 16 }}
            title="Logout"
            left={(props) => <List.Icon {...props} color="black" icon="door" />}
            onPress={onLogout}
            />
        </List.Section>
    );
};