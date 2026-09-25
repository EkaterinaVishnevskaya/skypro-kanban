import { useNavigate } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import { topics } from "../../../data";
import { useState } from "react";
import { createTask } from "../../services/tasks";
import { getToken } from "../../services/auth";

function PopNewCard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("Web Design");
  const navigate = useNavigate();
  const handleClick =() => {
    navigate(`/`);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = {
      title: title || "Новая задача",
      description: description || "",
      topic,
      date: new Date().toISOString(),
    };
    await createTask(newTask, getToken());
    navigate(`/`);
  };

  console.log(topics);
  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <button className="pop-new-card__close" onClick={handleClick}>
              &#10006;
            </button>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
                onSubmit={handleSubmit}
              >
                <div className="form-new__block">
                  <label forhtml="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Введите название задачи..."
                    autoFocus
                  ></input>
                </div>
                <div className="form-new__block">
                  <label forhtml="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <Calendar></Calendar>
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                {topics.map((i) => (
                  <div
                    className={`categories__theme ${i.color} ${topic === i.name ? "_active-category" : ""}`}
                    onClick={() => setTopic(i.name)}
                  >
                    <p className={i.color}>{i.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <button className="form-new__create _hover01" id="btnCreate" form="formNewCard">
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PopNewCard;
