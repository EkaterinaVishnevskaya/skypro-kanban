import PopBrowse from "../components/PopBrowse/PopBrowse";
import { useParams } from "react-router-dom";
import { fetchTasks } from "../services/tasks";

function CardPage() {
  const { id } = useParams();
  const Card = fetchTasks.tasks.find((item) => item._id == id);
  console.log(Card);
  return <PopBrowse card = {Card}/>;
}

export default CardPage;
