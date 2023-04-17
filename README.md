# sokos-mikrofrontend-template

Brukes som utgangspunkt for å opprette nye mikrofrontends i Økonomiportalen.

## Tilpass repo-et

1. Kjør `chmod 755 setupTemplate.sh`
2. Kjør:
   ```
   ./setupTemplate.sh
   ```
3. Slett `setupTemplate.sh` hvis du er ferdig med endre navn på prosjektet

4. Sett riktig namespace og team i nais manifestene, de ligger i mappen under `nais/<cluster>`
5. Velg riktig ingress til appen i nais.yaml. Ingressen bør være `https://okonomiportalen.intern.dev.nav.no/appNavn`

# Kom i gang

1. Installere dependencies `npm intall`
2. Start appen lokalt `npm run dev`
3. Appen nås på http://localhost:5173

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på Github.
Interne henvendelser kan sendes via Slack i kanalen #po-utbetaling.
