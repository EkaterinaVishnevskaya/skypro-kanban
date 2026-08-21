function PopUser({ user }) {
  return (
    <div class="header__pop-user-set pop-user-set" id="user-set-target">
      <p class="pop-user-set__name">{user.name}</p>
      <p class="pop-user-set__mail">{user.mail}</p>
      <div class="pop-user-set__theme">
        <p>Темная тема</p>
        <input type="checkbox" class="checkbox" name="checkbox"></input>
      </div>
      <button type="button" class="_hover03">
        <a href="#popExit">Выйти</a>
      </button>
    </div>
  );
}
export default PopUser;
