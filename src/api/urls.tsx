function getEnvironment(): "production" | "development" {
  if (process.env.NODE_ENV === "production") {
    return "production";
  }
  return "development";
}

type EnvUrl = { development: string; production: string };

const API_URL: EnvUrl = {
  development: "http://localhost:3000/api",
  production: "https://sokos-xxx-xxx.dev.intern.nav.no/api",
};

export const apiUrl = API_URL[getEnvironment()];

export const minUrl = `${apiUrl}/endpoint`;
