type EnvUrl = { development: string; production: string };

const ENVIRONMENT: EnvUrl = {
  development: "http://localhost:5173",
  production: "http://localhost:5173",
};

const BASE_URL: string = import.meta.env.PROD ? ENVIRONMENT.production : ENVIRONMENT.development;

export const MIN_URL = `${BASE_URL}/api/endpoint`;
