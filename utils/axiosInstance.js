import axios from "axios";
import { API } from "../config";

const axiosInstance = axios.create({
  baseURL: API,
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzAxMGZiYmRjNjFjNjFlN2NmODUwZCIsImlhdCI6MTY1NjgwNzk5MCwiZXhwIjoxNjU3MDY3MTkwfQ.d4zuDjL3pt-Ux_LbTrmjf_Wk9jGqCukEYmT-2-dn2cM",
  },
});

export default axiosInstance;
