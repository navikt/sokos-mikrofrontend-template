type Props = {
  path: string;
  options?: object;
};

export const includeCredentials = {
  credentials: "include",
};

export const fetcher = async ({ path, options }: Props) => {
  const response = await fetch(path, {
    method: "GET",
    ...options,
  });

  if (!response.ok) {
    throw new Error("Fetch request failed");
  }

  return await response.json();
};
