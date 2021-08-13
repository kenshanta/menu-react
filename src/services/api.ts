import axios from "axios";

export const API = axios.create({
  baseURL: "https://churchills-taylor.herokuapp.com/",
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
  withCredentials: false,
});
