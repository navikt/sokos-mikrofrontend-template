# sokos-mikrofrontend-template

Brukes som utgangspunkt for å opprette nye mikrofrontends i Økonomiportalen.

NB! Navngi følgende: `sokos-up-appNavn` eg: `sokos-up-skattekort`

## Tilpass repo-et

1. Kjør `chmod 755 setupTemplate.sh`
2. Kjør:

   ```bash
   ./setupTemplate.sh
   ```

3. Kun spesifiser navnet på applikasjonen som skal stå etter sokos-up-`appNavn`. Hvis du ønsker `sokos-up-test` så skriv inn bare `test`.
4. Slett `setupTemplate.sh` hvis du er ferdig med endre navn på prosjektet

5. Sett riktig namespace og team i nais manifestene, de ligger i mappen under `nais/<cluster>`
6. Velg riktig ingress til appen i nais.yaml. Ingressen bør være `https://utbetalingsportalen.intern.dev.nav.no/appNavn`

## Kom i gang

1. Installere [Node.js](https://nodejs.dev/en/)
2. Installer [pnpm](https://pnpm.io/)
3. Installere dependencies `pnpm install && cd server && pnpm install`
4. Start appen med to følgende måter:

- Mot en mock server -> `pnpm run dev`
- Mot en backend kjørende lokalt `pnpm run dev-backend`
  - Gå til [vite.config.ts](/vite.config.ts), endre server.proxy block.

```javascript
proxy: {
   "/mikrofrontend-api/api/v1": {
   target: "https://sokos-mikrofrontend-api.intern.dev.nav.no",
   rewrite: (path: string) => path.replace(/^\/mikrofrontend-api/, ""),
   changeOrigin: true,
   secure: true;
  }
}
```

5. Bruker du ikke routing? Appen nås på <http://localhost:5173>
6. Bruker du routing? Appen nås på <http://localhost:5173/mikrofrontend>

## Ønsker du routing?

Templaten har ikke routing. Men om du ønsker å ha routing gjør du følgende:

1. `pnpm i react-router-dom`
2. Erstatter følgende innhold i [App.tsx](/src/App.tsx)

```typescript
return <TemplatePage />;
```

med

```typescript
return <BrowserRouter basename="/mikrofrontend">
    <Routes>
      <Route path={"/"} ErrorBoundary={ErrorBoundary}>
        <Route path="/" element={<TemplatePage />} />
        <Route path="/anotherpage" element={<AnotherPage />} />
      </Route>
    </Routes>
  </BrowserRouter>

function ErrorBoundary(): JSX.Element {
  const error = useRouteError();
  throw error;
}
```

## Design

Det finnes et utkast til en designguide kan man basere seg på: [Kjerneoppsett Utbetalingsportalen](https://navno-my.sharepoint.com/:o:/g/personal/julie_utgard_nav_no/EtV6P-sYimZNsACTYqZmSbsBLeSlsvc6PP2svso_H09dZA?e=KSY5SO)

## Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på Github.
Interne henvendelser kan sendes via Slack i kanalen #po-utbetaling.
