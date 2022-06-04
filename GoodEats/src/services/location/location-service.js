import camelize from "camelize";
import { locations } from './location-mock';
import { POSITIONSTACK_API_KEY } from "../../../env";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("location not found")
    }
    resolve(locationMock)
  })
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location; 
  return { lat, lng, viewport: geometry.viewport };
};

const newLocationRequest = () => { 
  fetch(`http://api.positionstack.com/v1/forward?access_key=${POSITIONSTACK_API_KEY}&query=Markham-Ontario&bbox_module=1`)
  .then((response) => response.json())
  .then((locs) => console.log(locs.data[0]))
  .catch((err) => console.log(err))
};
