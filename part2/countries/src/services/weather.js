import axios from "axios";

const baseUrl = "http://api.weatherstack.com";
const API_KEY = process.env.REACT_APP_WEATHERSTACK

const get = (capital) => {
  return axios
    .get(`${baseUrl}/current`, {
      params: {
        access_key: API_KEY,
        query: capital
      }
    })
    .then((response) => response.data)
    .catch((error) => console.log(error))};

export default {
  get
};
