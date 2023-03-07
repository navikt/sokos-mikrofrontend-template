import "./Komponent.css";

type Props = {
  tekst: string;
};

const Komponent: React.FC<Props> = ({ tekst }) => {
  return (
    <div className="bg-green-300 border-green-600 border-b p-4 m-4 rounded flex justify-center">
      <p>{tekst}</p>
    </div>
  );
};

export default Komponent;
