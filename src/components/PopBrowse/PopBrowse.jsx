import { useNavigate } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import { useState } from "react";
import { columns, topics } from "../../../data";
import { deleteTask } from "../../services/tasks";
import { getToken } from "../../services/auth";

function PopBrowse({ card }) {
  console.log(card);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(String(card.title));
  const [topic, setTopic] = useState(String(card.topic));
  const [description, setDescription] = useState(String(card.description));
  const [status, setStatus] = useState(String(card.status));
  const navigate = useNavigate();
  console.log(title);
  const handleCloseClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/`);
  };
  const handleStatusClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setStatus(e.i)
  };
  const handleEditClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setEditing(true);
  };
  const handleCancelClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setEditing(false);
    setTitle(card.title);
    setTopic(card.topic);
    setDescription(card.description);
  };
  const handleDeleteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    deleteTask(card._id, card, getToken());
    navigate(`/`);
  };
  return (
    <>
      <div className="pop-browse" id="popBrowse">
        <div className="pop-browse__container">
          <div className="pop-browse__block">
            <div className="pop-browse__content">
              <div className="pop-browse__top-block">
                <h3 className="pop-browse__ttl">{title}</h3>
                <div
                  className={`categories__theme theme-top ${topics.find((i) => i.name == topic) || "_gray"} _active-category`}
                >
                  <p className={topics.find((i) => i.name == topic) || "_gray"}>
                    {topic}
                  </p>
                </div>
              </div>
              <div className="pop-browse__status status">
                <p className="status__p subttl">Статус</p>
                {editing ? (
                  <div className="status__themes">
                    {columns.map((i) => {
                      <div className={`status__theme ${i==status? '_gray': ''}`} onClick={() => setStatus(String(i))}>
                        <p className={i==status? 'gray': ''}>{i}</p>
                      </div>;
                    })}
                  </div>
                ) : (
                  <div className="status__themes">
                    <div className="status__theme _gray">
                      <p className="_gray">{card.status}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="pop-browse__wrap">
                <form
                  className="pop-browse__form form-browse"
                  id="formBrowseCard"
                  action="#"
                >
                  <div className="form-browse__block">
                    <label forhtml="textArea01" className="subttl">
                      Описание задачи
                    </label>
                    <textarea
                      className="form-browse__area"
                      name="text"
                      id="textArea01"
                      readOnly={!editing}
                      placeholder="Введите описание задачи..."
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    ></textarea>
                  </div>
                </form>
                <Calendar></Calendar>
              </div>
              <div className="theme-down__categories theme-down">
                <p className="categories__p subttl">Категория</p>
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
              </div>
              {!editing ? (
                <div className="pop-browse__btn-browse ">
                  <div className="btn-group">
                    <button
                      className="btn-browse__edit _btn-bor _hover03"
                      onClick={handleEditClick}
                    >
                      Редактировать задачу
                    </button>
                    <button
                      className="btn-browse__delete _btn-bor _hover03"
                      onClick={handleDeleteClick}
                    >
                      Удалить задачу
                    </button>
                  </div>
                  <button
                    className="btn-browse__close _btn-bg _hover01"
                    onClick={handleCloseClick}
                  >
                    Закрыть
                  </button>
                </div>
              ) : (
                <div className="pop-browse__btn-edit">
                  <div className="btn-group">
                    <button className="btn-edit__edit _btn-bg _hover01">
                      Сохранить
                    </button>
                    <button
                      className="btn-edit__edit _btn-bor _hover03"
                      onClick={handleCancelClick}
                    >
                      Отменить
                    </button>
                    <button
                      className="btn-edit__delete _btn-bor _hover03"
                      id="btnDelete"
                      onClick={handleDeleteClick}
                    >
                      Удалить задачу
                    </button>
                  </div>
                  <button
                    className="btn-edit__close _btn-bg _hover01"
                    onClick={handleCloseClick}
                  >
                    Закрыть
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopBrowse;
