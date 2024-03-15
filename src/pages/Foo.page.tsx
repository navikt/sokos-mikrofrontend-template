import { BodyLong, GuidePanel, Heading, Loader, Table } from "@navikt/ds-react";
import styles from "./Employee.module.css";
import RestService from "../services/rest-service";

const ResultatSide = () => {
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
      <GuidePanel poster>
        <Heading style={{color:"white", backgroundColor: "purple"}} spacing level="2" size="large">
          sokos-mikrofrontend-template
        </Heading>
        <BodyLong style={{color:"white", backgroundColor: "green"}}>Dette er en annen side</BodyLong>
      </GuidePanel>
      <Table zebraStripes>
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
};

export default ResultatSide;
