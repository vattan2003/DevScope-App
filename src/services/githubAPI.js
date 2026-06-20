import axios from "axios";

const BASE_URL = "https://api.github.com/users";

export const getUser = async (username) => {
  const response = await axios.get(`${BASE_URL}/${username}`);
  return response.data;
};

export const getRepos = async (username) => {
  const response = await axios.get(
    `${BASE_URL}/${username}/repos?sort=updated`
  );
  return response.data;
};