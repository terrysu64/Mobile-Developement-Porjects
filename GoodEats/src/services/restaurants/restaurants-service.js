import {mocks, mockImages} from "./mock";
import camelize from "camelize";
import { ThemeConsumer } from "styled-components/native";

export const restaurantsRequest = (location) => {
    return new Promise ((resolve,reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject("not found")
        }
        resolve(mock);
    })
};

export const restaurantsTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = mockImages
        return {
            ... restaurant,
            isOpen: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status !== "OPERATIONAL", 
        }
    })
    return camelize(mappedResults)
};