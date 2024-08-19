import useSWRImmutable from "swr/immutable";
import { EmployeeListe } from "../types/Employee";
import { BASE_API_URL, axiosFetcher } from "./apiConfig";

const swrConfig = {
  fetcher: <T>(url: string) => axiosFetcher<T>(BASE_API_URL, url),
  suspense: true,
  revalidateOnFocus: false,
  refreshInterval: 120000,
};

export function useGetEmployee() {
  return useSWRImmutable<EmployeeListe>(`/employee`, swrConfig);
}
