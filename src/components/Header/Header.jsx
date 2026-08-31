import PopUser from "../PopUser/PopUser";
import styled from "styled-components";
import { user } from "../../../data";
import { useNavigate } from "react-router-dom";

const SHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
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

const SHeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

const SHeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Header() {
  const navigate = useNavigate();
  const handleNewCardClick = () => {
    navigate(`/new-card`)
  }
  return (
    <SHeader>
      <SContainer>
        <SHeaderBlock>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="/images/logo.png" alt="logo"></img>
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="/images/logo_dark.png" alt="logo"></img>
            </a>
          </div>
          <SHeaderNav>
            <button className="header__btn-main-new _hover01" id="btnMainNew" onClick={handleNewCardClick}>
              Создать новую задачу
            </button>
            <a href="#user-set-target" className="header__user _hover02">
              {user.name}
            </a>
            <PopUser user={user} />
          </SHeaderNav>
        </SHeaderBlock>
      </SContainer>
    </SHeader>
  );
}
export default Header;
