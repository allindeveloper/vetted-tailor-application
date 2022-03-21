import axios from "axios";
import { getBaseUrl } from "../utils/globalUtils";

const AxiosInstance = axios.create({
  baseURL: getBaseUrl(),
});

export default AxiosInstance;
