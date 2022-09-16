import { useQuery } from "react-query";
import { fetcher } from "../../api/api";
import { minUrl } from "../../api/urls";
import Komponent from "../../components/komponent/Komponent";
import { Panel } from "@navikt/ds-react";
import "./TestSide.css";

function ResultatSide(): JSX.Element {
  const { data } = useQuery(minUrl, fetcher);

  const { tekst } = data || {};

  return (
    <Panel>
      <Komponent tekst={tekst} />
    </Panel>
  );
}

export default ResultatSide;
