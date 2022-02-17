import {mocks} from "./mock";
import camelize from "camelize";
import { ThemeConsumer } from "styled-components/native";

export const restaurantsRequest = (location = "43.653225,-79.383186") => {
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
        return {
            ... restaurant,
            isOpen: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status !== "OPERATIONAL", 
        }
    })
    return camelize(mappedResults)
};

restaurantsRequest()
    .then(restaurantsTransform)
    .then((transformedRes) => {
        console.log(transformedRes);
    })
    .catch((err) => {
    console.log('not found')
})