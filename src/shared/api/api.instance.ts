import axios, { AxiosInstance } from "axios";

const API_URL = "https://dummyjson.com";
export const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
