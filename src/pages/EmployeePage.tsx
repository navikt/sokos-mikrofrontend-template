import { BodyLong, Box, Heading, Loader, Table } from "@navikt/ds-react";
import styles from "./EmployeePage.module.css";
import { getEmployees } from "../api/apiService";

export default function ResultatSide() {
  const { data, isLoading } = getEmployees();

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Loader size="3xlarge" title="Henter data..." />
      </div>
    );
  }

  return (
    <>
      <Box border className={styles.panel}>
        <Heading spacing level="2" size="large">
          sokos-mikrofrontend-template
        </Heading>
        <BodyLong>Dette er en template for å bygge undersider i Økonomiportalen</BodyLong>
      </Box>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">Id</Table.HeaderCell>
            <Table.HeaderCell scope="col">Navn</Table.HeaderCell>
            <Table.HeaderCell scope="col">Yrke</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data?.map(({ id, navn, yrke }, i) => {
            return (
              <Table.Row key={i + id}>
                <Table.HeaderCell scope="row">{id}</Table.HeaderCell>
                <Table.DataCell>{navn}</Table.DataCell>
                <Table.DataCell>{yrke}</Table.DataCell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
}
