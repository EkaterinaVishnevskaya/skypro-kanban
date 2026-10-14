import PopBrowse from "../components/PopBrowse/PopBrowse";
import { useParams } from "react-router-dom";
import { getTaskById } from "../services/tasks";
import { getToken } from "../services/auth";
import { useEffect, useState } from "react";

function CardPage() {
  const { id } = useParams();
  const [card, setCard] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    async function loadTask() {
      const token = getToken();

      if (!token) {
        setError("Сначала войдите в аккаунт");
        return;
      }

      try {
        setError("");
        const data = await getTaskById(id, token);
        setCard(data);
      } catch (requestError) {
        setError(requestError.message);
      }
    }

    loadTask();
  }, [id]);
  return error ? <p>{error}</p> : <PopBrowse card={card} />;
}

export default CardPage;
