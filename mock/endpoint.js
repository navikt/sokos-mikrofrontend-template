export default [
  {
    url: "/api/endpoint",
    method: "get",
    response: () => {
      return [
        {
          id: 1,
          navn: "Ola Nordmann",
          yrke: "Systemutvikler",
        },
        {
          id: 2,
          navn: "Kari Nordmann",
          yrke: "Avdelingsleder",
        },
      ];
    },
  },
];
