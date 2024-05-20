import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

console.log(publicRuntimeConfig.API_URL);
export const APIClient = axios.create({
  baseURL: publicRuntimeConfig.API_URL,
});
