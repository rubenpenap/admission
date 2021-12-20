import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT_DOGS,
});

export const getDogsList = async (callback, errorCallback) => {
  try {
    const dogsList = await api.get('breeds/list/all');
    callback(dogsList.data);
  } catch (err) {
    console.log(err);
    errorCallback(true);
  }
};

export const getDogImages = async (
  callback,
  errorCallback,
  { breed, imageAmount = '' }
) => {
  try {
    const randomImagesPath = imageAmount ? `/random/${imageAmount}` : '';
    const dogsList = await api.get(`breed/${breed}/images${randomImagesPath}`);
    callback(dogsList.data);
  } catch (err) {
    console.log(err);
    errorCallback(true);
  }
};

export default api;
