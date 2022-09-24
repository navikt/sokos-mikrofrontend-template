import { useQuery } from "react-query";
import { fetcher } from "../../api/api";
import { MIN_URL } from "../../api/urls";
import Komponent from "../../components/komponent/Komponent";
import "./TestSide.css";

const ResultatSide = () => {
  const { data } = useQuery(MIN_URL, fetcher);

  const { tekst } = data || {};

  return (
    <div>
      <Komponent tekst={tekst} />
    </div>
  );
};

export default ResultatSide;
