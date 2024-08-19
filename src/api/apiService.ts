import { axiosFetcher, BASE_API_URL } from "./apiConfig";
import useSWRImmutable from "swr/immutable";
import { Employee } from "../types/Employee";

const swrConfig = {
  fetcher: <T>(url: string) => axiosFetcher<T>(BASE_API_URL, url),
  suspense: true,
  revalidateOnFocus: false,
  refreshInterval: 120000,
};

export function getEmployees() {
  return useSWRImmutable<Employee[]>("/employee", swrConfig);
}
