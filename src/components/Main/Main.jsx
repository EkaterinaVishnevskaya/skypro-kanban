import { columns } from "../../../data";
import Column from "../Column/Column";
import styled from "styled-components";

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
  return (
    <SMain>
      <SContainer>
        <SMainBlock>
          <SMainContent>
            {loading ? (
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
