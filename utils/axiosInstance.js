import axios from "axios";
import { API } from "../config";

const axiosIstance = axios.create({
  baseURL: API,
});

export default axiosIstance;
