import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-app-6oxq.onrender.com/api",
});

export default instance;
