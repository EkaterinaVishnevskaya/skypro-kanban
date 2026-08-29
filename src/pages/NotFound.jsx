import styled from "styled-components";

const SNotFound = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eaeef6;
  color: #33399b;
  align-items: center;
`;
const S404 = styled.h1`
  margin: 0 auto;
`;
const SPNF = styled.h4`
  margin: 0 auto;
`;

const NotFoundPage = () => {
  return (
    <SNotFound>
      <S404>404</S404>
      <SPNF>Страница не найдена</SPNF>
    </SNotFound>
  );
};

export default NotFoundPage;
