const isProduction = window.location.href.includes("intern.nav.no");
const isDevelopment = window.location.href.includes("intern.dev.nav.no");

export const getEnvironment = (): string => {
  if (isProduction) {
    return "production";
  }

  if (isDevelopment) {
    return "development";
  }

  return "local";
};

const SOKOS_MIKROFRONTEND_API: Record<string, string> = {
  local: "http://localhost:5173",
  development: "https://sokos-mikrofrontend-api.intern.dev.nav.no",
  production: "https://sokos-mikrofrontend-api.intern.nav.no",
};

const sokosMikrofrontendAPI = SOKOS_MIKROFRONTEND_API[getEnvironment()];

export const employeeApiUrl = `${sokosMikrofrontendAPI}/api/employee`;
