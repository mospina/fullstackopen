import axios from "axios";

const baseUrl = "http://localhost:3003/persons";

const getAll = () =>
  axios
    .get(baseUrl)
    .then((response) => response.data)
    .catch((error) => console.log(error));

export default {
  getAll,
};
