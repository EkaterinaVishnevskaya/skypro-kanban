import { cardList } from "../../data";
import PopBrowse from "../components/PopBrowse/PopBrowse";
import { useParams } from "react-router-dom";

export function Card() {
  const { id } = useParams();
  const Card = cardList.find((item) => item.id == id);
  console.log(Card);
  return <PopBrowse card = {Card}/>;
}
