type EnvUrl = { development: string; production: string };

const ENVIRONMENT: EnvUrl = {
  development: "http://localhost:5173",
  production: "https://sokos-mikrofrontend-api.intern.dev.nav.no",
};

const BASE_URL: string = import.meta.env.PROD ? ENVIRONMENT.production : ENVIRONMENT.development;

export const EMPLOYEE_URL = `${BASE_URL}/api/employee`;
