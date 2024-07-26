export default [
  {
    url: "/mikrofrontend-api/api/v1/employee",
    method: "GET",
    response: () => {
      return [
        {
          id: 1,
          navn: "Ola Nordmann",
          yrke: "Tech Lead",
        },
        {
          id: 2,
          navn: "Kari Nordmann",
          yrke: "Prosjektleder",
        },
      ];
    },
  },
];
