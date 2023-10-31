import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://13.39.48.41:3000/api/v1",
  timeout: 10000,
  withCredentials: true,
});

export default axiosInstance;
