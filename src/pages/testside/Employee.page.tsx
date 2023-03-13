import { BodyLong, Heading, Loader, Panel, Table } from "@navikt/ds-react";
import useSWR from "swr";
import { fetcher } from "../../api/api";
import { MIN_URL } from "../../api/urls";
import { Employee } from "../../models/Employee";
import "./Employee.css";

const ResultatSide = () => {
  const { data, isLoading } = useSWR<Employee[]>(MIN_URL, fetcher);

  if (isLoading) {
    return <Loader size="3xlarge" title="Henter data..." />;
  }

  return (
    <div>
      <Panel border className="mt-6 text-center">
        <Heading spacing level="2" size="large">
          sokos-mikrofrontend-template
        </Heading>
        <BodyLong>Dette er et template for å bygge undersider i Økonomiportalen</BodyLong>
      </Panel>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">Navn</Table.HeaderCell>
            <Table.HeaderCell scope="col">Fødseslnr.</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data?.map(({ id, navn, yrke }, i) => {
            return (
              <Table.Row key={i + id}>
                <Table.HeaderCell scope="row">{navn}</Table.HeaderCell>
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
