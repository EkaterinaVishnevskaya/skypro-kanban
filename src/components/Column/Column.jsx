import Card from "../Card/Card";

function Column() {
  return (
    <div className="main__column column">
      <div class="column__title">
        <p>Новое</p>
      </div>
      <div class="cards">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}
export default Column;
