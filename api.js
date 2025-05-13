import axios from "axios";

const tvShowApi = axios.create({
  baseURL: "https://api.tvmaze.com/",
});

export const getShows = (searchTerm) => {
  return tvShowApi
    .get(`search/shows?q=${searchTerm}&limit=12`)
    .then((response) => response.data);
};


