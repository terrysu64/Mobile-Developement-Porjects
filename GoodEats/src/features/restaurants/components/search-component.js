//NOT CONNECTED TO RESTAURANT CONTEXT YET

import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Searchbar } from 'react-native-paper';
import { LocationContext } from "../../../services/location/location-context";

const SearchContinaer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const SearchBar= () => {
    
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        search(searchKeyword)
    }, []);

    return (
        <SearchContinaer>
            <Searchbar 
                placeholder="Search by Location 📍" 
                value={searchKeyword}
                onSubmitEditing = {() => {search(searchKeyword)}}
                onChangeText = {(text) => {
                    if (text) {
                        setSearchKeyword(text)
                    }
                }}
            />
        </SearchContinaer>
    );
};