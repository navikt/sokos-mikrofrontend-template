import { Loader, Table } from "@navikt/ds-react";
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
