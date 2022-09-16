import "./Komponent.css";

interface Props {
  tekst: string;
}

function Komponent({ tekst }: Props): JSX.Element {
  return (
    <div className="komponent">
      <p>{tekst}</p>
    </div>
  );
}

export default Komponent;
