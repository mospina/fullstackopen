import axios from "axios";

const baseUrl = "http://localhost:3003/persons";

const getAll = () =>
  axios
    .get(baseUrl)
    .then((response) => response.data)
    .catch((error) => console.log(error));

const create = (person) => axios.post(baseUrl, person).then((response) => response.data).catch((error) => console.log(error));

const remove = (id) => axios.delete(`${baseUrl}/${id}`).then((response) => response.status).catch((error) => console.log(error))

export default {
  getAll,
  create,
  remove
};
