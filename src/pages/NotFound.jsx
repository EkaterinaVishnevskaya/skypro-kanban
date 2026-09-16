import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SNotFound = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #eaeef6;
  color: #33399b;
  align-items: center;
`;
const S404 = styled.h1``;
const SPNF = styled.h4``;

const SButton = styled.button`
  font-family: "Roboto", sans-serif;
  height: 30px;
  padding: 6px 12px;
  background-color: #565eef;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  &:hover {
    background-color: #33399b;
    border-radius: 4px;
  }
  @media screen and (max-width: 375px) {
    height: 40px;
  }
`;

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleToMainClick = () => {
    navigate(`/`);
  };
  return (
    <SNotFound>
      <S404>404</S404>
      <SPNF>Страница не найдена</SPNF>
      <SButton onClick={handleToMainClick}>На главную</SButton>
    </SNotFound>
  );
};

export default NotFoundPage;
