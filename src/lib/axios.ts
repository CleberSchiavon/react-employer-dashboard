import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const APIClient = axios.create({
  baseURL: publicRuntimeConfig.API_URL,
});
