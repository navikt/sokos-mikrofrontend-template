import "./Komponent.css";

type Props = {
  tekst: string;
};

const Komponent: React.FC<Props> = ({ tekst }) => {
  return (
    <div className="komponent">
      <p>{tekst}</p>
    </div>
  );
};

export default Komponent;
