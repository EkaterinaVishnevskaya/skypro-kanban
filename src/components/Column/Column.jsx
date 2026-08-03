import { cardList } from "../../../data";
import Card from "../Card/Card";

function Column({ taskStatus }) {
  let cards = cardList.filter((card) => {
    return card.status == taskStatus;
  });
  return (
    <div className="main__column column">
      <div class="column__title">
        <p>{taskStatus}</p>
      </div>
      <div class="cards">
        {cards.map((item) => (
          <Card card={item} />
        ))}
      </div>
    </div>
  );
}
export default Column;
