import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://expat-journal-api.herokuapp.com/",
    headers: {
      token: token,
      "Content-Type": "application/json",
      Authorization: token
    }
  });
};
