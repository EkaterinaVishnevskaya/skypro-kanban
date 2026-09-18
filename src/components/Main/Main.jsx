import { useEffect, useState } from "react";
import { columns } from "../../../data";
import Column from "../Column/Column";
import styled from "styled-components";
import { getToken } from "../../services/auth";
import { fetchTasks } from "../../services/tasks";

const SMain = styled.main`
  width: 100%;
  background-color: #eaeef6;
`;

const SContainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`;

const SMainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
  @media screen and (max-width: 1200px) {
    padding: 40px 0 64px;
  }
`;

const SMainContent = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

function Main({ loading }) {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadTasks() {
      const token = getToken();

      if (!token) {
        setError("Сначала войдите в аккаунт");
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError("");
        const data = await fetchTasks(token);
        setTasks(data);
      } catch (requestError) {
        setError(requestError.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadTasks();
  }, []);
  return (
    <SMain>
      <SContainer>
        <SMainBlock>
          <SMainContent>
            {isLoading ? (
              <p>Идёт загрузка</p>
            ) : (
              columns.map((item) => <Column key={item} taskStatus={item} />)
            )}
          </SMainContent>
        </SMainBlock>
      </SContainer>
    </SMain>
  );
}
export default Main;
