import axios from "axios";

export const API = axios.create({
  baseURL: "https://churchills-taylor.herokuapp.com/",
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
  withCredentials: false,
});
