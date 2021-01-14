import axios from "axios";

const baseUrl = "http://localhost:3009/api/persons";

const getAll = () =>
  axios
    .get(baseUrl)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error)
      throw error
    });

const create = (person) =>
  axios
    .post(baseUrl, person)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error)
      throw error
    });

const remove = (id) =>
  axios
    .delete(`${baseUrl}/${id}`)
    .then((response) => response.status)
    .catch((error) => {
      console.log(error)
      throw error
    });

const update = (id, changes) =>
  axios
    .put(`${baseUrl}/${id}`, changes)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error)
      throw error
    });

export default {
  getAll,
  create,
  remove,
  update
};
