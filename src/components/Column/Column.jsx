import styled from "styled-components";
import { cardList } from "../../../data";
import Card from "../Card/Card";


const SColumn = styled.div`
    width: "20%";
    margin: 0 auto;
    display: block;
    @media screen and (max-width: 1200px) {
      width: "100%";
    }
`;

const STitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;
`;

const STitleP = styled.p`
  color: #94a6be;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`;

const SCards = styled.div`
  width: 100%;
  display: block;
  @media screen and (max-width: 1200px) {
    display: flex;
    overflow-y: auto;
  }
`;

function Column({ taskStatus }) {
  let cards = cardList.filter((card) => {
    return card.status == taskStatus;
  });
  return (
    <SColumn>
      <STitle>
        <STitleP>{taskStatus}</STitleP>
      </STitle>
      <SCards>
        {cards.map((item) => (
          <Card key={item.id} card={item} />
        ))}
      </SCards>
    </SColumn>
  );
}
export default Column;
