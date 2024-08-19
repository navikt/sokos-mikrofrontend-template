import axios, { CreateAxiosDefaults } from "axios";
import { ApiError, HttpStatusCodeError } from "../types/errors";

const config = (baseUri: string): CreateAxiosDefaults => ({
  baseURL: baseUri,
  timeout: 30000,
  withCredentials: true,
  headers: {
    Pragma: "no-cache",
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
  },
  validateStatus: (status) => status < 400,
});

function api(baseUri: string) {
  const instance = axios.create(config(baseUri));

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 400) {
        // her kan vi legge feilkoder også som vi fra backend
        throw new HttpStatusCodeError(error.response?.status);
      }
      if (error.response?.status === 401 || error.response?.status === 403) {
        // Uinnlogget - vil ikke skje i miljø da appen er beskyttet
        return Promise.reject(error);
      }
      throw new ApiError("Issues with connection to backend");
    },
  );
  return instance;
}

export const BASE_API_URL = "/mikrofrontend-api/api/v1";

export function axiosFetcher<T>(baseUri: string, url: string) {
  return api(baseUri)
    .get<T>(url)
    .then((res) => res.data);
}
