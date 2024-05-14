import { BodyLong, Heading, Loader, Table } from "@navikt/ds-react";
import RestService from "../services/rest-service";
import styles from "./TemplatePage.module.css";

const TemplatePage = () => {
  const { data, isLoading } = RestService.useFetchEmployees();

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
            {data?.map(({ id, name, job }, i) => {
              return (
                <Table.Row key={i + id}>
                  <Table.HeaderCell scope="row">{id}</Table.HeaderCell>
                  <Table.DataCell>{name}</Table.DataCell>
                  <Table.DataCell>{job}</Table.DataCell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default TemplatePage;
