import axios from "axios";

const baseUrl = "https://restcountries.eu/rest/v2";

const getAll = () =>
  axios
    .get(`${baseUrl}/all`)
    .then((response) => response.data)
    .catch((error) => console.log(error));

export default {
  getAll,
};
