# sokos-mikrofrontend-template

Brukes som utgangspunkt for å opprette nye mikrofrontends i Utbetalingsportalen [sokos-utbetalingsportalen](https://github.com/navikt/sokos-utbetalingsportalen).

NB! Navngi følgende: `sokos-up-appNavn` eg: `sokos-up-navn` (Dette er viktig så vi kan holde styr på alle frontend apper tilhører `up` (utbetalingsportalen))

## Tilpass repo-et

1. Kjør `chmod 755 setupTemplate.sh`
2. Kjør:
   ```
   ./setupTemplate.sh
   ```
3. Kun spesifiser navnet på applikasjonen som skal stå etter sokos-up-`appNavn`. Hvis du ønsker `sokos-up-test` så skriv inn bare `test`.
4. Slett `setupTemplate.sh` hvis du er ferdig med endre navn på prosjektet

5. Sett riktig namespace og team i nais manifestene, de ligger i mappen under `nais/<cluster>`
6. Velg riktig ingress til appen i nais.yaml. Ingressen bør være `https://utbetalingsportalen.intern.dev.nav.no/appNavn`

## Kom i gang

1. Installere [Node.js](https://nodejs.dev/en/)
2. Installer [pnpm](https://pnpm.io/)
3. Installere dependencies `pnpm intall`
4. Start appen lokalt `pnpm run dev`
5. Bruker du ikke routing? Appen nås på http://localhost:5173
6. Bruker du routing? Appen nås på http://localhost:5173/mikrofrontend

## Ønsker du routing?

Templaten har ikke routing. Men om du ønsker å ha routing gjør du følgende:

1. `pnpm i react-router-dom`
2. Erstatter følgende innhold i [App.tsx](/src/App.tsx)

```
return <EmployeePage />;
```

med

```
return <BrowserRouter basename="/mikrofrontend">
    <Routes>
      <Route path="/" element={<EmployeePage />} />
      <Route path="/anotherpage" element={<AnotherPage />} />
    </Routes>
  </BrowserRouter>
```

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på Github.
Interne henvendelser kan sendes via Slack i kanalen #po-utbetaling.
