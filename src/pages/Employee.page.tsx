import { BodyLong, Heading, Loader, Panel, Table } from "@navikt/ds-react";
import useSWRImmutable from "swr/immutable";
import { fetcher, includeCredentials } from "../api/api";
import { employeeApiUrl } from "../api/urls";
import { Employee } from "../models/Employee";

const ResultatSide = () => {
  const { data, isLoading } = useSWRImmutable<Employee[]>(
    { path: employeeApiUrl, options: { method: "GET", includeCredentials } },
    fetcher
  );

  if (isLoading) {
    return (
      <div className="flex justify-center m-10">
        <Loader size="3xlarge" title="Henter data..." />
      </div>
    );
  }

  return (
    <>
      <Panel border className="text-center">
        <Heading spacing level="2" size="large">
          sokos-mikrofrontend-template
        </Heading>
        <BodyLong>Dette er en template for å bygge undersider i Økonomiportalen</BodyLong>
      </Panel>
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
};

export default ResultatSide;
