import { BodyLong, Heading, Table } from "@navikt/ds-react";
import { Employee } from "../types/Employee";
import styles from "./TemplatePage.module.css";

export default function TemplatePage() {
  const employees = [
    { id: 1, navn: "Ola Nordmann", yrke: "Lærer" },
    { id: 2, navn: "Kari Nordmann", yrke: "Sykepleier" },
    { id: 3, navn: "Per Hansen", yrke: "Elektriker" },
  ];

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
            {employees?.map((employee: Employee) => {
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
