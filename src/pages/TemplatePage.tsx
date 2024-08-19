import { BodyLong, Heading, Loader, Table } from "@navikt/ds-react";
import { useGetEmployee } from "../api/apiService";
import { Employee } from "../types/Employee";
import styles from "./TemplatePage.module.css";

export default function TemplatePage() {
  const { data, isLoading } = useGetEmployee();

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Loader size="3xlarge" title="Henter data..." />
      </div>
    );
  }

  return (
    <>
      <div className={styles.template__header}>
        <Heading spacing level="2" size="large">
          Mikrofrontend Template
        </Heading>
        <BodyLong>
          Dette er en template for å bygge undersider i Utbetalingsportalen
        </BodyLong>
      </div>

      <div className={styles.template__body}>
        <Heading spacing level="2" size="medium">
          Ansatte
        </Heading>

        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope="col">Id</Table.HeaderCell>
              <Table.HeaderCell scope="col">Navn</Table.HeaderCell>
              <Table.HeaderCell scope="col">Yrke</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data?.map((employee: Employee) => {
              return (
                <Table.Row key={employee.id}>
                  <Table.HeaderCell scope="row">{employee.id}</Table.HeaderCell>
                  <Table.DataCell>{employee.navn}</Table.DataCell>
                  <Table.DataCell>{employee.yrke}</Table.DataCell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}
