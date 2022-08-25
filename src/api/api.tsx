import { QueryFunctionContext } from "react-query";

const checkResponse = (response: Response) => {
  if (!response.ok) {
    throw new Error("Fetch request failed");
  }
};

export const fetcher = async (queryFunctionContext: QueryFunctionContext) => {
  const url = queryFunctionContext.queryKey.toString();

  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  });

  checkResponse(response);

  return response.json();
};
