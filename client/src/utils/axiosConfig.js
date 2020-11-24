import axios from "axios";

let apiBaseUri = process.env.REACT_APP_API_BASE_URL;

const axiosDefaultInstance = axios.create({
  baseURL: apiBaseUri,
  headers: {
    //initialize default application headers here
    "X-Custom-Header": "foobar",
  },
  withCredentials: true,
});

export default axiosDefaultInstance;
