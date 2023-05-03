import { BodyLong, Heading, Loader, Panel, Table } from "@navikt/ds-react";
import useSWR from "swr";
import { fetcher } from "../api/api";
import { Employee } from "../models/Employee";
import { employeeApiUrl } from "../api/urls";
import style from "./Employee.module.css";

const ResultatSide = () => {
  const { data, isLoading } = useSWR<Employee[]>(employeeApiUrl, fetcher);

  if (isLoading) {
    return (
      <div className="flex justify-center m-10">
        <Loader size="3xlarge" title="Henter data..." />
      </div>
    );
  }

  return (
    <div className="mx-5 mt-5">
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
    </div>
  );
};

export default ResultatSide;
