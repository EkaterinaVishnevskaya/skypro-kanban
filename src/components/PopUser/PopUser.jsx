import { useNavigate } from "react-router-dom";
import { logout } from "../../services/auth";

function PopUser({ user }) {
  const navigate = useNavigate();
  const handleClick = () => {
    logout()
    navigate(`/signin`);
  }
  return (
    <div className="header__pop-user-set pop-user-set" id="user-set-target">
      <p className="pop-user-set__name">{user.name}</p>
      <p className="pop-user-set__mail">{user.login}</p>
      <div className="pop-user-set__theme">
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox"></input>
      </div>
      <button type="button" className="_hover03" onClick={handleClick}>
        <a>Выйти</a>
      </button>
    </div>
  );
}
export default PopUser;
