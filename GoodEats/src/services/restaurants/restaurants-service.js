import {mocks} from "./mock"

export const restaurantRequest = (location = "43.653225,-79.383186") => {
    return new Promise ((resolve,reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject("not found")
        }
        resolve(mock);
    })
};

restaurantRequest().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log('not found')
})