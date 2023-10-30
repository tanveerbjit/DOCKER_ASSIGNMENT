import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://35.181.178.126/api/v1",
  timeout: 10000,
  withCredentials: true,
});

export default axiosInstance;
