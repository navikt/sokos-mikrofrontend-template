import React from "react";
import { Panel } from "@navikt/ds-react";
import "./Komponent.css";

interface Props {
  tekst: string;
}

const Komponent = ({ tekst }: Props) => {
  return (
    <div className="komponent">
      <Panel>
        <p>{tekst}</p>
      </Panel>
    </div>
  );
};

export default Komponent;
