function getEnvironment(): "production" | "development" {
  if (process.env.NODE_ENV === "production") {
    return "production";
  }
  return "development";
}

type EnvUrl = { development: string; production: string };

const API_URL: EnvUrl = {
  development: "http://localhost:5173/api/endpoint",
  production: "https://sokos-mikrofrontend-template.nav.no/api/endpoint",
};

export const apiUrl = API_URL[getEnvironment()];
