import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.15.16:3000"
});

export default api;
