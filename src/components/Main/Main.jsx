import { useEffect, useState } from "react";
import { columns } from "../../../data";
import Column from "../Column/Column";

function Main() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 3000);
   }, []);
  return (
    <main class="main">
      <div class="container">
        <div class="main__block">
          <div class="main__content">
            {loading ? <p>Идёт загрузка</p> : columns.map((item) => (
              <Column taskStatus={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
export default Main;
