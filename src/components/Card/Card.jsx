import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SCardItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;
const SCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 130px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
`;
const SCardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SCardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const SCardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

const SCardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`;

const SCardBtnDiv = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94a6be;
`;

const SCardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const SCardDateP = styled.p`
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94a6be;
  letter-spacing: 0.2px;
`;

const SCardDateSVG = styled.svg`
  width: 13px;
`;

const SCardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
`;

const SCardThemeP = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;

const SCardOrangeTheme = styled(SCardTheme)`
  background-color: #ffe4c2;
`;
const SCardOrangeThemeP = styled(SCardThemeP)`
  color: #ff6d00;
`;

const SCardPurpleTheme = styled(SCardTheme)`
  background-color: #e9d4ff;
`;
const SCardPurpleThemeP = styled(SCardThemeP)`
  color: #9a48f1;
`;

const SCardGreenTheme = styled(SCardTheme)`
  background-color: #b4fdd1;
`;
const SCardGreenThemeP = styled(SCardThemeP)`
  color: #06b16e;
`;

const SCardGrayTheme = styled(SCardTheme)`
  background-color: #94a6be;
`;
const SCardGrayThemeP = styled(SCardThemeP)`
  color: #ffffff;
`;

function Card({ card }) {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/card/${card._id}`);
  };
  const formatDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);

    return `${day}.${month}.${year}`;
  };

  const theme = () => {
    switch (card.topic) {
      case "Web Design":
        return (
          <SCardOrangeTheme>
            <SCardOrangeThemeP>{card.topic}</SCardOrangeThemeP>
          </SCardOrangeTheme>
        );
      case "Research":
        return (
          <SCardGreenTheme>
            <SCardGreenThemeP>{card.topic}</SCardGreenThemeP>
          </SCardGreenTheme>
        );
      case "Copywriting":
        return (
          <SCardPurpleTheme>
            <SCardPurpleThemeP>{card.topic}</SCardPurpleThemeP>
          </SCardPurpleTheme>
        );
      default:
        return (
          <SCardGrayTheme>
            <SCardGrayThemeP>{card.topic}</SCardGrayThemeP>
          </SCardGrayTheme>
        );
    }
  };
  return (
    <SCardItem key={card._id}>
      <SCard>
        <SCardGroup>
          {theme()}
          {/* <a href="#popBrowse" target="_self"> */}
          <SCardBtn onClick={handleCardClick}>
            <SCardBtnDiv></SCardBtnDiv>
            <SCardBtnDiv></SCardBtnDiv>
            <SCardBtnDiv></SCardBtnDiv>
          </SCardBtn>
          {/* </a> */}
        </SCardGroup>
        <SCardContent>
          <a href="" target="_blank">
            <SCardTitle>{card.title || "Без названия"}</SCardTitle>
          </a>
          <SCardDate>
            <SCardDateSVG
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <g clip-path="url(#clip0_1_415)">
                <path
                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                  stroke="#94A6BE"
                  stroke-width="0.8"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                  stroke="#94A6BE"
                  stroke-width="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_415">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </SCardDateSVG>
            <SCardDateP>{formatDate(card.date)}</SCardDateP>
          </SCardDate>
        </SCardContent>
      </SCard>
    </SCardItem>
  );
}
export default Card;
